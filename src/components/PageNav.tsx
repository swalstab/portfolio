import { NavLink, Link, useLocation } from "react-router-dom";

import "./PageNav.css";

function PageNav({
  theme,
  handleThemeButton,
}: {
  theme: string;
  handleThemeButton: () => void;
}) {
  const isHome: boolean = useLocation().pathname === "/";
  const imgGit: string =
    theme === "dark" || isHome ? "github-mark-white.svg" : "github-mark.svg";
  const imgTheme: string = theme === "dark" ? "sun" : "moon";

  return (
    <header className={`header ${isHome ? "dark" : ""}`}>
      <Link to="/" aria-label="go to Homepage" className="link--home">
        <img
          src="./src/assets/img/icon/logo-sw-110.png"
          alt=""
          className="main-logo"
          draggable="false"
        />
      </Link>

      <nav>
        <ul className="nav">
          <li>
            <NavLink className="nav-item" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-item" to="/projects">
              Projects
            </NavLink>
          </li>
          <li>
            <Link
              className="nav-git"
              to="https://github.com/swalstab"
              aria-label="go to GitHub Page"
            >
              <img
                src={`./src/assets/img/icon/${imgGit}`}
                alt=""
                draggable="false"
              />
            </Link>
          </li>
          <li>
            <button
              className="btn-theme"
              onClick={handleThemeButton}
              aria-label={`Use ${theme === "dark" ? "Light" : "Dark"} Mode`}
            >
              <img
                src={`./src/assets/img/icon/${imgTheme}.svg`}
                alt=""
                style={theme === "dark" || isHome ? { filter: "invert()" } : {}}
                draggable="false"
              />
            </button>
          </li>
        </ul>
      </nav>

      {/* <button className={styles["btn-mobile-nav"]}>
        <div className={styles.bar}></div>
      </button> */}
    </header>
  );
}

export default PageNav;
