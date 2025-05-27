import Button from "../../components/ui/button";
import { useAuth } from "./context";
import { logout } from "../../services/auth";
import { NavLink } from "react-router";

const AuthButton = () => {
  const { isLogged, onLogout } = useAuth();
  const handleLogout = async () => {
    await logout();
    onLogout();
  };

  return isLogged ? (
    <Button label="Sign out" variant="secondary" onClick={handleLogout} />
  ) : (
    <NavLink className="btn btn-primary" to="/login">
      Log in
    </NavLink>
  );
};

export default AuthButton;
