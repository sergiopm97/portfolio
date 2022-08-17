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
        className="hidden lg:flex w-20 h-[calc(100vh-6rem)] flex-col items-center justify-end fixed"
        initial={{ y: "50%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.25 }}
      >
        <div className="flex flex-col gap-5">
          <a href={githubLink} target={"_blank"}>
            <FiGithub className="w-6 h-6 cursor-pointer fill-0 stroke-std-slate hover:stroke-std-green hover:-translate-y-1 transition-all" />
          </a>
          <a href={linkedinLink} target={"_blank"}>
            <FiLinkedin className="w-6 h-6 cursor-pointer fill-0 stroke-std-slate hover:stroke-std-green hover:-translate-y-1 transition-all" />
          </a>
        </div>
        <div className="w-0.5 h-52 mt-12 bg-std-slate"></div>
      </motion.div>
    );
  }
}

export default Sidebar;
