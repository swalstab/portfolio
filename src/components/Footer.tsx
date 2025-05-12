import "./Footer.css";

const currentDate: Date = new Date();
const currentYear: number = currentDate.getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="copyright">
          &copy; <span>{currentYear}</span> Stefanie Walstab
        </p>
      </div>
    </footer>
  );
}

export default Footer;
