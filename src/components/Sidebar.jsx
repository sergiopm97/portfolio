import { FiGithub, FiLinkedin } from "react-icons/fi";

function Sidebar() {
  return (
    <div className="w-12 h-[calc(100vh-6rem)] flex flex-col items-center justify-end fixed">
      <FiGithub className="w-6 h-6 cursor-pointer fill-0 stroke-std-slate hover:stroke-std-green hover:-translate-y-1 transition-all" />
      <FiLinkedin className="w-6 h-6 mt-6 cursor-pointer fill-0 stroke-std-slate hover:stroke-std-green hover:-translate-y-1 transition-all" />
      <div className="w-0.5 h-52 mt-12 bg-std-slate"></div>
    </div>
  );
}

export default Sidebar;
