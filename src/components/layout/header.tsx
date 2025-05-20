import { useEffect, useState } from "react";
import { Hamburger } from "../ui/hamburger";
import "./header.css";

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
        <a href="/">
          <img src="/" alt="logo" />
        </a>
        <nav>
          {isMobile && (
            <Hamburger
              defaultIsOpen={isNavOpen}
              onClick={handleHamburgerClick}
            />
          )}
          <ul className={`${isNavOpen ? "opened" : "hidden"} md:flex md:gap-8`}>
            <li>
              <a href="">Create advert</a>
            </li>
            <li>
              <a href="">Log</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
