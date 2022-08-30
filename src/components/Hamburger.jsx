import { RiMenu4Line } from "react-icons/ri";
import { motion } from "framer-motion";

function Hamburger(props) {
  return (
    <motion.div
      className="block md:hidden"
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <RiMenu4Line
        className="h-10 w-10 cursor-pointer fill-std-green stroke-0"
        onClick={() => props.setMenu(true)}
      />
    </motion.div>
  );
}

export default Hamburger;
