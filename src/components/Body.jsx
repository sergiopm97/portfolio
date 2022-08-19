import About from "./About";
import Sidebar from "./Sidebar";
import Studies from "./Studies";

function Body() {
  return (
    <div className="w-full max-w-screen-2xl m-auto">
      <Sidebar />
      <About />
      <Studies />
    </div>
  );
}

export default Body;
