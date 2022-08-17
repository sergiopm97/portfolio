import fetcher from "../services/fetcher";
import { getData } from "../services/getData";
import { FiGithub, FiLinkedin } from "react-icons/fi";
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
      <div className="w-12 h-[calc(100vh-6rem)] flex flex-col items-center justify-end fixed">
        <a href={githubLink} target={"_blank"}>
          <FiGithub className="w-6 h-6 cursor-pointer fill-0 stroke-std-slate hover:stroke-std-green hover:-translate-y-1 transition-all" />
        </a>
        <a href={linkedinLink} target={"_blank"}>
          <FiLinkedin className="w-6 h-6 mt-6 cursor-pointer fill-0 stroke-std-slate hover:stroke-std-green hover:-translate-y-1 transition-all" />
        </a>
        <div className="w-0.5 h-52 mt-12 bg-std-slate"></div>
      </div>
    );
  }
}

export default Sidebar;
