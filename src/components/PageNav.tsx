import { NavLink, Link, useLocation } from "react-router-dom";

import swLogo from "../assets/img/icon/logo-sw-110.png";
import githubLogo from "../assets/img/icon/github-mark.svg";
import githubWhiteLogo from "../assets/img/icon/github-mark-white.svg";
import moonIcon from "../assets/img/icon/moon.svg";
import sunIcon from "../assets/img/icon/sun.svg";

import "./PageNav.css";
import { lazy, useState } from "react";

const ButtonMobileNav = lazy(() => import("./ButtonMobileNav"));

function PageNav({
  theme,
  handleThemeButton,
}: {
  theme: string;
  handleThemeButton: () => void;
}) {
  const isHome: boolean = useLocation().pathname === "/";
  const [navIsOpen, setNavIsOpen] = useState<boolean>(false);
  const imgGit: string =
    theme === "dark" || isHome ? githubWhiteLogo : githubLogo;
  const imgTheme: string = theme === "dark" ? sunIcon : moonIcon;

  function handleNavBtn(): void {
    setNavIsOpen((navIsOpen) => !navIsOpen);
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && navIsOpen) setNavIsOpen(false);
  });

  return (
    <header
      className={`header${isHome ? " dark" : ""}${
        navIsOpen ? " nav-open" : ""
      }`}
    >
      <Link to="/" aria-label="go to Homepage" className="link--home">
        <img src={swLogo} alt="" className="main-logo" draggable="false" />
      </Link>

      <div className="header--content">
        <nav className="nav">
          <ul className="nav-list">
            <li onClick={() => setNavIsOpen(false)}>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li onClick={() => setNavIsOpen(false)}>
              <NavLink className="nav-link" to="/projects">
                Projects
              </NavLink>
            </li>
          </ul>
        </nav>

        <Link
          className="nav-git"
          to="https://github.com/swalstab"
          aria-label="go to GitHub Page"
        >
          <img src={imgGit} alt="" draggable="false" />
        </Link>

        <button
          className="btn-theme"
          onClick={handleThemeButton}
          aria-label={`Use ${theme === "dark" ? "Light" : "Dark"} Mode`}
        >
          <img
            src={imgTheme}
            alt=""
            style={theme === "dark" || isHome ? { filter: "invert()" } : {}}
            draggable="false"
          />
        </button>

        <ButtonMobileNav handleNavBtn={handleNavBtn} />
      </div>
    </header>
  );
}

export default PageNav;
