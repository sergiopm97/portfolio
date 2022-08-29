import fetcher from "../services/fetcher";
import { getData } from "../services/getData";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { motion } from "framer-motion";
import { config } from "../../config";

function Sidebar() {
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
      <motion.div
        className="fixed hidden h-[calc(100vh-6rem)] w-20 flex-col items-center justify-end lg:flex"
        initial={{ y: "50%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.25 }}
      >
        <div className="flex flex-col gap-5">
          <a href={githubLink} target={"_blank"}>
            <FiGithub className="fill-0 h-6 w-6 cursor-pointer stroke-std-slate transition-all hover:-translate-y-1 hover:stroke-std-green" />
          </a>
          <a href={linkedinLink} target={"_blank"}>
            <FiLinkedin className="fill-0 h-6 w-6 cursor-pointer stroke-std-slate transition-all hover:-translate-y-1 hover:stroke-std-green" />
          </a>
        </div>
        <div className="mt-12 h-52 w-0.5 bg-std-slate"></div>
      </motion.div>
    );
  }
}

export default Sidebar;
