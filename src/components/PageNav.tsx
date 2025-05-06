import { NavLink, Link } from "react-router-dom";
import Logo from "./Logo";
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <header className={styles.header}>
      <Logo />

      <nav>
        <ul>
          <li>
            <Link to="https://github.com/swalstab">
              <img
                src="./src/assets/img/github-mark-white.svg"
                alt="logo GitHub"
                className={styles.logo}
              />
            </Link>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
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
