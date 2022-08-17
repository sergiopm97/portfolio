import About from "./About";
import Sidebar from "./Sidebar";

function Body() {
  return (
    <div className="w-full max-w-screen-2xl m-auto">
      <Sidebar />
      <About />
    </div>
  );
}

export default Body;
