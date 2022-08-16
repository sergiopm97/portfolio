import Logo from "./Logo";
import Navigation from "./Navigation";
import Hamburger from "./Hamburger";
import Menu from "./Menu";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <header className="w-full h-24 flex items-center justify-center font-spaceMono">
        <div className="w-11/12 h-4/5 max-w-screen-2xl flex items-center justify-between">
          <Logo />
          <Navigation />
          <Hamburger setMenu={setMenu} />
        </div>
      </header>
      <AnimatePresence>{menu && <Menu setMenu={setMenu} />}</AnimatePresence>
    </>
  );
}

export default Header;
