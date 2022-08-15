import Logo from "./Logo";

function Header() {
  return (
    <header className="w-full h-24 flex items-center justify-center">
      <div className="max-w-screen-2xl w-11/12 h-4/5 flex items-center justify-between">
        <Logo />
      </div>
    </header>
  );
}

export default Header;
