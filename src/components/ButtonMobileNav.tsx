import "./ButtonMobileNav.css";

function ButtonMobileNav({
  handleNavBtn,
}: {
  handleNavBtn: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button className="btn-mobile-nav" onClick={handleNavBtn}>
      <div className="bar"></div>
    </button>
  );
}

export default ButtonMobileNav;
