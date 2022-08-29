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
    <div className="relative flex h-80 flex-col justify-center gap-5 bg-dark-navy p-5 transition-all hover:shadow-[6px_6px_0px_0px_rgba(100,255,218,0.6)] xs:h-64">
      <h1 className="font-roboto text-2xl font-semibold text-light-slate sm:text-3xl md:text-2xl xl:text-3xl">
        {selectedProject.Name}
      </h1>
      <h2 className="font-roboto text-base text-std-slate sm:text-xl md:text-base lg:text-lg xl:text-xl">
        {selectedProject.Description}
      </h2>
      <a
        href={selectedProject.Link}
        className="flex h-8 w-24 items-center justify-center border-2 border-std-green font-spaceMono text-sm font-semibold text-std-green hover:bg-std-green/[0.1] xs:h-10 xs:w-32 sm:text-base md:text-xs lg:text-sm xl:text-base"
      >
        See more
      </a>
      <div className="absolute bottom-0 right-0 flex gap-2 pb-3 pr-3">
        {sokkai && (
          <FaPython className="h-3 w-3 fill-std-green opacity-50 lg:h-5 lg:w-5 xl:h-6 xl:w-6" />
        )}
        {samba && (
          <>
            <FaPython className="h-3 w-3 fill-std-green opacity-50 lg:h-5 lg:w-5 xl:h-6 xl:w-6" />
            <SiJavascript className="h-3 w-3 fill-std-green opacity-50 lg:h-5 lg:w-5 xl:h-6 xl:w-6" />
            <AiFillHtml5 className="h-3 w-3 fill-std-green opacity-50 lg:h-5 lg:w-5 xl:h-6 xl:w-6" />
            <SiCss3 className="h-3 w-3 fill-std-green opacity-50 lg:h-5 lg:w-5 xl:h-6 xl:w-6" />
          </>
        )}
        {portfolio && (
          <>
            <SiJavascript className="h-3 w-3 fill-std-green opacity-50 lg:h-5 lg:w-5 xl:h-6 xl:w-6" />
            <AiFillHtml5 className="h-3 w-3 fill-std-green opacity-50 lg:h-5 lg:w-5 xl:h-6 xl:w-6" />
            <SiCss3 className="h-3 w-3 fill-std-green opacity-50 lg:h-5 lg:w-5 xl:h-6 xl:w-6" />
          </>
        )}
      </div>
    </div>
  );
}

export default Project;
