import Cross from "./Cross";
import MenuNavigation from "./MenuNavigation";
import { motion } from "framer-motion";

function Menu(props) {
  return (
    <>
      <motion.div
        className="fixed top-0 z-30 flex h-screen w-9/12 items-center justify-center bg-light-slate font-spaceMono"
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.5 }}
      >
        <Cross setMenu={props.setMenu} />
        <MenuNavigation setMenu={props.setMenu} />
      </motion.div>
      <motion.div
        className="fixed top-0 z-20 h-screen w-screen bg-std-navy/[0.8]"
        onClick={() => props.setMenu(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
    </>
  );
}

export default Menu;
