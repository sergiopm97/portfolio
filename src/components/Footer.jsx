import fetcher from "../services/fetcher";
import { getData } from "../services/getData";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { motion } from "framer-motion";
import { config } from "../../config";

function Footer() {
  const socialEndpoint = config.apiEndpoints.social;
  const socialData = getData(socialEndpoint, fetcher);

  if (socialData) {
    let githubLink = new String();
    let linkedinLink = new String();

    socialData.map((socialItem) => {
      if (socialItem["Name"] == "GitHub") {
        githubLink = socialItem["Url"];
      } else if (socialItem["Name"] == "LinkedIn") {
        linkedinLink = socialItem["Url"];
      }
    });

    return (
      <motion.footer
        className="mt-[-8rem] mb-10 w-full pt-32 pl-5 pr-5 xs:pl-8 xs:pr-8 sm:pl-10 sm:pr-10 md:pl-16 md:pr-16 lg:pl-40 lg:pr-20"
        initial={{ y: "50%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col items-center justify-center gap-6 rounded-3xl bg-dark-navy py-5 xs:h-16 xs:flex-row xs:py-0 lg:gap-10">
          <h1 className="font-roboto text-lg font-semibold text-std-slate">
            By Sergio Peña
          </h1>
          <h1 className="flex items-center gap-2 font-roboto text-lg font-semibold text-std-slate">
            Copyright 2022 <AiOutlineCopyrightCircle />
          </h1>
          <div className="flex items-center gap-3 text-std-slate lg:hidden">
            <a href={githubLink} target={"_blank"}>
              <FiGithub className="h-5 w-5 cursor-pointer transition-all hover:-translate-y-1 hover:stroke-std-green" />
            </a>
            <a href={linkedinLink} target={"_blank"}>
              <FiLinkedin className="h-5 w-5 cursor-pointer transition-all hover:-translate-y-1 hover:stroke-std-green" />
            </a>
          </div>
        </div>
      </motion.footer>
    );
  }
}

export default Footer;
