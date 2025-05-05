import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <header className={styles.header}>
      <Logo />

      <nav>
        <ul>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
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
