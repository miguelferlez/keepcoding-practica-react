import "./header.css";
import "../ui/button.css";
import { useEffect, useState } from "react";
import { Hamburger } from "../ui/hamburger";
import clsx from "clsx";
import { Link, NavLink } from "react-router";
import LogoIcon from "../icons/logo-icon";
import AuthButton from "../../pages/auth/auth-button";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const maxWidth = 768;
  const [isMobile, setIsMobile] = useState(window.innerWidth < maxWidth);

  const handleHamburgerClick = () => {
    setIsNavOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= maxWidth) {
        setIsNavOpen(false);
      }
      setIsMobile(window.innerWidth < maxWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="z-999 mb-4 border-b-1 border-gray-200">
      <div className="header-container">
        <Link to="/">
          <LogoIcon className="fill-primary" />
        </Link>
        <nav>
          {isMobile && (
            <Hamburger
              defaultIsOpen={isNavOpen}
              onClick={handleHamburgerClick}
            />
          )}
          <ul
            className={clsx(
              {
                hidden: !isNavOpen,
                opened: isNavOpen,
              },
              "md:flex md:items-center md:gap-6",
            )}
          >
            <li>
              <NavLink to="/adverts/new" className="btn btn-secondary">
                Create advert
              </NavLink>
            </li>
            <li>
              <AuthButton />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
