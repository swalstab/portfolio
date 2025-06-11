import { Link, useLocation } from "react-router-dom";
import "./Footer.css";

const currentDate: Date = new Date();
const currentYear: number = currentDate.getFullYear();

function Footer() {
  const isHome = useLocation().pathname === "/";

  return (
    <footer className={`footer ${isHome ? "dark" : ""}`}>
      <div className="container">
        <div className="legal center-text">
          <Link to="/impressum">Impressum</Link>
        </div>

        <div className="copyright center-text">
          <p>&copy; {currentYear} Stefanie Walstab</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
