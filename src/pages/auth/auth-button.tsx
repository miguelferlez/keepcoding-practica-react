import Button from "../../components/ui/button";
import { useAuth } from "./context";
import { logout } from "../../services/auth";
import { Link } from "react-router";

const AuthButton = () => {
  const { isLogged, onLogout } = useAuth();
  const handleLogout = async () => {
    await logout();
    onLogout();
  };

  return isLogged ? (
    <Button label="Sign out" variant="secondary" onClick={handleLogout} />
  ) : (
    <Link className="btn btn-primary" to="/login">
      Log in
    </Link>
  );
};

export default AuthButton;
