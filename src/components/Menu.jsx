import Cross from "./Cross";
import MenuNavigation from "./MenuNavigation";
import { motion } from "framer-motion";

function Menu(props) {
  return (
    <>
      <motion.div
        className="w-9/12 h-screen flex items-center justify-center fixed top-0 font-spaceMono bg-light-slate z-30"
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.5 }}
      >
        <Cross setMenu={props.setMenu} />
        <MenuNavigation setMenu={props.setMenu} />
      </motion.div>
      <motion.div
        className="w-screen h-screen fixed top-0 bg-std-navy/[0.8] z-20"
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
