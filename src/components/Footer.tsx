import styles from "./Footer.module.css";

const currentDate: Date = new Date();
const currentYear: number = currentDate.getFullYear();

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.copyright}>
          &copy; <span>{currentYear}</span> Stefanie Walstab
        </p>
      </div>
    </footer>
  );
}

export default Footer;
