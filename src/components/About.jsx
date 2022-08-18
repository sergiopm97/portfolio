import { config } from "../../config";

function About() {
  return (
    <div className="w-full h-[calc(100vh-6rem)] flex items-center justify-between lg:pl-48 lg:pr-28">
      <div className="w-6/12">
        <h1 className="xl:text-2xl mb-6 text-std-green font-spaceMono">Hello! My name is</h1>
        <h2 className="xl:text-6xl mb-3 text-light-slate font-roboto font-semibold">Sergio Peña.</h2>
        <h3 className="xl:text-5xl mb-8 text-std-slate font-roboto font-semibold"> I develop web and AI.</h3>
        <p className="xl:text-xl mb-10 text-std-slate font-roboto">
          I am a developer specialized in data analysis and data processing, AI creation and currently growing in
          the web development world with a strong background in frontend but with basic knowledge in backend.
        </p>
        <a href={config.apiEndpoints.resume}>
          <button className="xl:text-base px-6 py-3 rounded text-std-green bg-dark-navy/[0.5] font-semibold hover:bg-dark-navy transition-colors">
            Check my resume
          </button>
        </a>
      </div>
      <div className="w-5/12 flex justify-end">
        <img src="src/assets/programmer.gif"></img>
      </div>
    </div>
  );
}

export default About;
