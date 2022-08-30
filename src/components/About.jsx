import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { config } from "../../config";

function About() {
  return (
    <div className="static mt-5 flex w-full flex-col items-center justify-center gap-12 px-5 xs:relative xs:mt-0 xs:h-[calc(100vh-6rem)] xs:px-2 sm:gap-14 lg:static lg:flex-row lg:justify-between lg:gap-0 lg:pl-40 lg:pr-20">
      <div className="relative flex w-full flex-col items-baseline text-left xs:static xs:items-center xs:text-center lg:relative lg:w-6/12 lg:items-baseline lg:text-left">
        <motion.h1
          className="mb-6 font-spaceMono text-xl text-std-green xs:text-2xl sm:text-3xl lg:text-xl xl:text-2xl"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Hello! My name is
        </motion.h1>
        <motion.h2
          className="mb-1 font-roboto text-4xl font-semibold text-light-slate xs:mb-3 xs:text-6xl sm:text-7xl lg:text-5xl xl:text-6xl"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Sergio Peña.
        </motion.h2>
        <motion.h3
          className="mb-10 font-roboto text-[1.7rem] font-semibold text-std-slate xs:text-[2.9rem] sm:text-6xl md:mb-12 lg:mb-8 lg:text-4xl xl:text-5xl"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("I develop web and AI.")
                .pauseFor(2500)
                .deleteAll()
                .start();
            }}
            options={{
              loop: true,
            }}
          ></Typewriter>
        </motion.h3>
        <motion.p
          className="mb-10 block font-roboto text-lg text-std-slate xs:hidden lg:block xl:text-2xl"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          I am a developer specialized in data analysis and data processing, AI
          creation and currently growing in the web development world with a
          strong background in frontend but with basic knowledge in backend.
        </motion.p>
        <motion.button
          className="h-12 w-48 rounded bg-dark-navy/[0.5] text-base font-semibold text-std-green transition-colors hover:bg-dark-navy xs:h-14 xs:w-52 sm:h-16 sm:w-64 sm:text-xl lg:h-14 lg:w-52 lg:text-lg"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <a href={config.apiEndpoints.resume}>Check my resume</a>
        </motion.button>
        <motion.div
          className="absolute bottom-0 right-2 flex h-16 w-16 items-center justify-center xs:bottom-10 xs:right-10 lg:bottom-[-2%] lg:left-56"
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
        className="flex w-full justify-center lg:w-5/12"
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1.1 }}
      >
        <motion.img
          className="w-7/12 xs:w-5/12 md:w-4/12 lg:w-full"
          src="programmer.gif"
          animate={{ y: ["0%", "-1.5%", "0%"] }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
        ></motion.img>
      </motion.div>
    </div>
  );
}

export default About;
