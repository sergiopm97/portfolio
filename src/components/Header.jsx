import Logo from "./Logo";
import Navigation from "./Navigation";
import Hamburger from "./Hamburger";

function Header() {
  return (
    <header className="w-full h-24 flex items-center justify-center font-spaceMono">
      <div className="w-11/12 h-4/5 max-w-screen-2xl flex items-center justify-between">
        <Logo />
        <Navigation />
        <Hamburger />
      </div>
    </header>
  );
}

export default Header;
