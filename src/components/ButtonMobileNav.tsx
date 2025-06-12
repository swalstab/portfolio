import "./ButtonMobileNav.css";

function ButtonMobileNav({
  navIsOpen,
  handleNavBtn,
}: {
  navIsOpen: boolean;
  handleNavBtn: () => void;
}) {
  return (
    <button
      className="btn-mobile-nav"
      onClick={handleNavBtn}
      aria-label={`${navIsOpen ? "Close" : "Open"} Menu`}
    >
      <div className="bar"></div>
    </button>
  );
}

export default ButtonMobileNav;
