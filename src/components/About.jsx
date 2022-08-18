import { config } from "../../config";

function About() {
  return (
    <div className="w-full xs:h-[calc(100vh-6rem)] flex lg:flex-row flex-col items-center lg:justify-between justify-center lg:gap-0 sm:gap-14 gap-12 xs:mt-0 mt-5 lg:pl-40 lg:pr-20 xs:px-2 px-5">
      <div className="lg:w-6/12 w-full flex flex-col lg:text-left xs:text-center text-left">
        <h1 className="xl:text-2xl lg:text-xl sm:text-3xl xs:text-2xl text-xl mb-6 text-std-green font-spaceMono">
          Hello! My name is
        </h1>
        <h2 className="xl:text-6xl lg:text-5xl sm:text-7xl xs:text-6xl text-4xl xs:mb-3 mb-1 text-light-slate font-roboto font-semibold">
          Sergio Peña.
        </h2>
        <h3 className="xl:text-5xl lg:text-4xl sm:text-6xl xs:text-[2.9rem] text-[1.7rem] lg:mb-8 md:mb-12 mb-10 text-std-slate font-roboto font-semibold">
          I develop web and AI.
        </h3>
        <p className="lg:block xs:hidden block xl:text-xl text-lg mb-10 text-std-slate font-roboto">
          I am a developer specialized in data analysis and data processing, AI creation and currently growing in
          the web development world with a strong background in frontend but with basic knowledge in backend.
        </p>
        <a href={config.apiEndpoints.resume}>
          <button className="lg:text-lg sm:text-xl  text-base lg:px-6 sm:px-12 px-8 lg:py-4 sm:py-6 py-4 rounded text-std-green bg-dark-navy/[0.5] font-semibold hover:bg-dark-navy transition-colors">
            Check my resume
          </button>
        </a>
      </div>
      <div className="lg:w-5/12 w-full flex justify-center">
        <img className="lg:w-full md:w-4/12 xs:w-5/12 w-7/12" src="src/assets/programmer.gif"></img>
      </div>
    </div>
  );
}

export default About;
