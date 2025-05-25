import "./header.css";
import { useEffect, useState } from "react";
import { Hamburger } from "../ui/hamburger";
import clsx from "clsx";
import { Link } from "react-router";
import LogoIcon from "../icons/logo-icon";

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
    <header className="mb-4 border-b-1 border-gray-200">
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
              "md:flex md:gap-8",
            )}
          >
            <li>
              {/* TODO <NavLink to="/adverts/new" end>Create advert</NavLink> */}
              <a href="">Create advert</a>
            </li>
            <li>
              {/* TODO <AuthButton /> */}
              <a href="">Log</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
