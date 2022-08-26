import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Sidebar from "./Sidebar";
import Studies from "./Studies";

function Body() {
  return (
    <div className="w-full max-w-screen-2xl m-auto">
      <Sidebar />
      <About />
      <Studies />
      <Projects />
      <Contact />
      <div className="h-screen"></div>
    </div>
  );
}

export default Body;
