import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { config } from "../../config";

function About() {
  return (
    <div className="w-full xs:h-[calc(100vh-6rem)] lg:static xs:relative static flex lg:flex-row flex-col items-center lg:justify-between justify-center lg:gap-0 sm:gap-14 gap-12 xs:mt-0 mt-5 lg:pl-40 lg:pr-20 xs:px-2 px-5">
      <div className="lg:w-6/12 w-full lg:relative xs:static relative flex flex-col lg:items-baseline xs:items-center items-baseline lg:text-left xs:text-center text-left">
        <motion.h1
          className="xl:text-2xl lg:text-xl sm:text-3xl xs:text-2xl text-xl mb-6 text-std-green font-spaceMono"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Hello! My name is
        </motion.h1>
        <motion.h2
          className="xl:text-6xl lg:text-5xl sm:text-7xl xs:text-6xl text-4xl xs:mb-3 mb-1 text-light-slate font-roboto font-semibold"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Sergio Peña.
        </motion.h2>
        <motion.h3
          className="xl:text-5xl lg:text-4xl sm:text-6xl xs:text-[2.9rem] text-[1.7rem] lg:mb-8 md:mb-12 mb-10 text-std-slate font-roboto font-semibold"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("I develop web and AI.").pauseFor(2500).deleteAll().start();
            }}
            options={{
              loop: true,
            }}
          ></Typewriter>
        </motion.h3>
        <motion.p
          className="lg:block xs:hidden block xl:text-2xl text-lg mb-10 text-std-slate font-roboto"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          I am a developer specialized in data analysis and data processing, AI creation and currently growing in
          the web development world with a strong background in frontend but with basic knowledge in backend.
        </motion.p>
        <motion.button
          className="lg:w-52 sm:w-64 xs:w-52 w-48 lg:h-14 sm:h-16 xs:h-14 h-12 lg:text-lg sm:text-xl text-base rounded text-std-green bg-dark-navy/[0.5] font-semibold hover:bg-dark-navy transition-colors"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <a href={config.apiEndpoints.resume}>Check my resume</a>
        </motion.button>
        <motion.div
          className="w-16 h-16 absolute flex items-center justify-center lg:bottom-[-2%] xs:bottom-10 bottom-0 lg:left-56 xs:right-10 right-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.7 }}
        >
          <motion.img
            src="sunglasses_emoji.png"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 5, ease: "linear", repeat: Infinity }}
          ></motion.img>
        </motion.div>
      </div>
      <motion.div
        className="lg:w-5/12 w-full flex justify-center"
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1.1 }}
      >
        <motion.img
          className="lg:w-full md:w-4/12 xs:w-5/12 w-7/12"
          src="programmer.gif"
          animate={{ y: ["0%", "-1.5%", "0%"] }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
        ></motion.img>
      </motion.div>
    </div>
  );
}

export default About;
