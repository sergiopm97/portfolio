import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      className="w-full pt-32 mt-[-8rem] mb-10 lg:pl-40 md:pl-16 sm:pl-10 xs:pl-8 pl-5 lg:pr-20 md:pr-16 sm:pr-10 xs:pr-8 pr-5"
      initial={{ y: "50%", opacity: 0 }}
      whileInView={{ y: "0%", opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="xs:h-16 flex xs:flex-row flex-col items-center justify-center lg:gap-10 gap-6 rounded-3xl xs:py-0 py-5 bg-dark-navy">
        <h1 className="text-lg text-std-slate font-roboto font-semibold">By Sergio Peña</h1>
        <h1 className="flex items-center gap-2 text-lg text-std-slate font-roboto font-semibold">
          Copyright 2022 <AiOutlineCopyrightCircle />
        </h1>
        <div className="lg:hidden flex items-center gap-3 text-std-slate">
          <FiGithub className="w-5 h-5" />
          <FiLinkedin className="w-5 h-5" />
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
