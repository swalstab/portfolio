import { NavLink, Link, useLocation } from "react-router-dom";

import "./PageNav.css";

function PageNav({
  isDark,
  handleThemeButton,
}: {
  isDark: boolean;
  handleThemeButton: () => void;
}) {
  const isHome: boolean = useLocation().pathname === "/";
  const imgGit: string =
    isDark || isHome ? "github-mark-white.svg" : "github-mark.svg";
  const imgTheme: string = isDark ? "sun" : "moon";

  return (
    <header className={`header ${isHome ? "dark" : ""}`}>
      <Link to="/">
        <img
          // src="./src/assets/img/icon/logo-sw.svg"
          src="./src/assets/img/icon/user-solid.svg"
          alt="SW logo"
          className="main-logo"
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
            <Link className="nav-git" to="https://github.com/swalstab">
              <img src={`./src/assets/img/icon/${imgGit}`} alt="GitHub logo" />
            </Link>
          </li>
          <li>
            <button className="btn-theme" onClick={handleThemeButton}>
              <img
                src={`./src/assets/img/icon/${imgTheme}.svg`}
                alt={`icon ${imgTheme}`}
                style={isDark || isHome ? { filter: "invert()" } : {}}
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
