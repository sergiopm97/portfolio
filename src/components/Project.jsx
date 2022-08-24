import { FaPython } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3 } from "react-icons/si";

function Project(props) {
  const selectedProject = props.data.find((project) => {
    return project.Name === props.project;
  });

  const sokkai = props.project === "Sokkai";
  const samba = props.project === "Samba";
  const portfolio = props.project === "Portfolio";

  return (
    <div className="flex flex-col justify-center gap-5 relative xs:h-64 h-80 p-5 bg-dark-navy hover:shadow-[6px_6px_0px_0px_rgba(100,255,218,0.6)] transition-all">
      <h1 className="xl:text-3xl md:text-2xl sm:text-3xl text-2xl text-light-slate font-roboto font-semibold">
        {selectedProject.Name}
      </h1>
      <h2 className="xl:text-xl lg:text-lg md:text-base sm:text-xl text-base text-std-slate font-roboto">
        {selectedProject.Description}
      </h2>
      <a
        href={selectedProject.Link}
        className="flex items-center justify-center xs:w-32 w-24 xs:h-10 h-8 xl:text-base lg:text-sm md:text-xs sm:text-base text-sm border-2 border-std-green text-std-green font-spaceMono font-semibold hover:bg-std-green/[0.1]"
      >
        See more
      </a>
      <div className="flex gap-2 absolute bottom-0 right-0 pb-3 pr-3">
        {sokkai && <FaPython className="xl:w-6 xl:h-6 lg:w-5 lg:h-5 w-3 h-3 fill-std-green opacity-50" />}
        {samba && (
          <>
            <FaPython className="xl:w-6 xl:h-6 lg:w-5 lg:h-5 w-3 h-3 fill-std-green opacity-50" />
            <SiJavascript className="xl:w-6 xl:h-6 lg:w-5 lg:h-5 w-3 h-3 fill-std-green opacity-50" />
            <AiFillHtml5 className="xl:w-6 xl:h-6 lg:w-5 lg:h-5 w-3 h-3 fill-std-green opacity-50" />
            <SiCss3 className="xl:w-6 xl:h-6 lg:w-5 lg:h-5 w-3 h-3 fill-std-green opacity-50" />
          </>
        )}
        {portfolio && (
          <>
            <SiJavascript className="xl:w-6 xl:h-6 lg:w-5 lg:h-5 w-3 h-3 fill-std-green opacity-50" />
            <AiFillHtml5 className="xl:w-6 xl:h-6 lg:w-5 lg:h-5 w-3 h-3 fill-std-green opacity-50" />
            <SiCss3 className="xl:w-6 xl:h-6 lg:w-5 lg:h-5 w-3 h-3 fill-std-green opacity-50" />
          </>
        )}
      </div>
    </div>
  );
}

export default Project;
