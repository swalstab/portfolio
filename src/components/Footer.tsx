import { useLocation } from "react-router-dom";
import "./Footer.css";

const currentDate: Date = new Date();
const currentYear: number = currentDate.getFullYear();

function Footer() {
  const isHome = useLocation().pathname === "/";

  return (
    <footer className={`footer ${isHome ? "dark" : ""}`}>
      <div className="container">
        <p className="copyright">
          &copy; <span>{currentYear}</span> Stefanie Walstab
        </p>
      </div>
    </footer>
  );
}

export default Footer;
