import Logo from "./Logo";
import Navigation from "./Navigation";
import Hamburger from "./Hamburger";
import Menu from "./Menu";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

function Header() {
  const [menu, setMenu] = useState(false);
  const [header, setHeader] = useState(false);

  useEffect(() => {
    addWidthListener();
    addScrollListener();
  }, []);

  function addWidthListener() {
    return window.addEventListener("resize", function () {
      if (this.innerWidth >= 768) {
        return setMenu(false);
      }
    });
  }

  function addScrollListener() {
    return window.addEventListener("scroll", function () {
      if (this.scrollY > 0) {
        return setHeader(true);
      } else {
        return setHeader(false);
      }
    });
  }

  return (
    <>
      <header
        className={`sticky top-0 z-10 flex h-24 w-full items-center justify-center font-spaceMono transition-all ${
          header && "bg-dark-navy/[0.90] shadow-md transition-all"
        }`}
      >
        <div className="flex h-4/5 w-11/12 max-w-screen-2xl items-center justify-between">
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
