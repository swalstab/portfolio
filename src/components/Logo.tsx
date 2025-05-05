import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/">
      <img
        src="./src/assets/img/user-solid.svg"
        alt="SW logo"
        className={styles.logo}
      />
    </Link>
  );
}

export default Logo;
