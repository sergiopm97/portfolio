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
    <div className="flex flex-col justify-center gap-5 relative h-64 p-5 bg-dark-navy hover:shadow-[6px_6px_0px_0px_rgba(100,255,218,0.6)] transition-all">
      <h1 className="text-3xl text-light-slate font-roboto font-semibold">{selectedProject.Name}</h1>
      <h1 className="text-xl text-std-slate font-roboto">{selectedProject.Description}</h1>
      <a
        href={selectedProject.Link}
        className="flex items-center justify-center w-32 h-10 border-2 border-std-green text-std-green font-spaceMono font-semibold hover:bg-std-green/[0.1]"
      >
        See more
      </a>
      <div className="flex gap-2 absolute bottom-0 right-0 pb-3 pr-3">
        {sokkai && <FaPython className="w-6 h-6 fill-std-green opacity-50" />}
        {samba && (
          <>
            <FaPython className="w-6 h-6 fill-std-green opacity-50" />
            <SiJavascript className="w-6 h-6 fill-std-green opacity-50" />
            <AiFillHtml5 className="w-6 h-6 fill-std-green opacity-50" />
            <SiCss3 className="w-6 h-6 fill-std-green opacity-50" />
          </>
        )}
        {portfolio && (
          <>
            <SiJavascript className="w-6 h-6 fill-std-green opacity-50" />
            <AiFillHtml5 className="w-6 h-6 fill-std-green opacity-50" />
            <SiCss3 className="w-6 h-6 fill-std-green opacity-50" />
          </>
        )}
      </div>
    </div>
  );
}

export default Project;
