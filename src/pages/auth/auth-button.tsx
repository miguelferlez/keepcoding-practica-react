import Button from "../../components/ui/button";
import { useAuth } from "./context";
import { logout } from "../../services/auth";
import { NavLink } from "react-router";
import WarningPopup from "../../components/ui/warning-popup";
import { useState } from "react";

const AuthButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isLogged, onLogout } = useAuth();
  const handleModalClick = () => {
    setIsModalOpen((prev) => !prev);
  };
  const handleLogout = async () => {
    await logout();
    onLogout();
  };

  return isLogged ? (
    <>
      <Button label="Sign out" variant="secondary" onClick={handleModalClick} />
      <WarningPopup
        title="Sign out?"
        text="You will need to log in again in order to use this app."
        defaultIsOpen={isModalOpen}
        onConfirm={handleLogout}
        onClose={handleModalClick}
      />
    </>
  ) : (
    <NavLink className="btn btn-primary" to="/login">
      Log in
    </NavLink>
  );
};

export default AuthButton;
