import "../../components/ui/alert.css";
import EnvelopeIcon from "../../components/icons/envelope-icon";
import KeyIcon from "../../components/icons/key-icon";
import Button from "../../components/ui/button";
import FormField from "../../components/ui/form-field";
import Alert from "../../components/ui/alert";
import { login } from "../../services/auth";
import { useAuth } from "./context";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { useLocation, useNavigate } from "react-router";
import { AxiosError } from "axios";

function LoginPage() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = credentials;
  const { onLogin } = useAuth();
  const [remember, setRemember] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const isDisabled = !email || !password || isFetching;
  const [error, setError] = useState<{ message: string[] } | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      setIsFetching(true);
      await login(credentials, remember);
      onLogin();
      navigate(location.state?.from ?? "/", { replace: true });
    } catch (error) {
      if (error instanceof AxiosError) {
        setError({
          message:
            error.status === 401
              ? "Wrong credentials, please try again"
              : (error.response?.data?.message ??
                error.message ??
                "Something wrong happened"),
        });
      }
    } finally {
      setIsFetching(false);
    }
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="heading-1">Log in</h2>
        <form onSubmit={handleSubmit} className="mb-8">
          <FormField
            label="Username"
            icon={<EnvelopeIcon className="size-6" />}
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="user@email.com"
            required
          />
          <FormField
            label="Password"
            icon={<KeyIcon className="size-6" />}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
            placeholder="********"
          />
          <div className="flex items-center">
            <input
              id="remember"
              type="checkbox"
              onChange={() => {
                setRemember((prevRemember) => !prevRemember);
              }}
              checked={remember}
              className="accent-primary h-4 w-4 rounded-sm border-gray-300"
            />
            <label htmlFor="remember" className="ms-2">
              Remember me
            </label>
          </div>
          <div className="mt-8 flex flex-col">
            <Button
              label="Log in"
              variant="primary"
              type="submit"
              disabled={isDisabled}
            />
          </div>
        </form>
        {error && (
          <Alert
            type="error"
            onClick={() => {
              setError(null);
            }}
          >
            {error.message}
          </Alert>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
