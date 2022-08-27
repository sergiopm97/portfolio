import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Sidebar from "./Sidebar";
import Studies from "./Studies";
import Footer from "./Footer";

function Body() {
  return (
    <div className="w-full max-w-screen-2xl m-auto">
      <Sidebar />
      <About />
      <Studies />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Body;
