import Project from "./Project";
import Slider from "react-slick";
import fetcher from "../services/fetcher";
import { getData } from "../services/getData";
import { config } from "../../config";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projects() {
  const projectsEndpoint = config.apiEndpoints.projects;
  const projectsData = getData(projectsEndpoint, fetcher);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
  };

  if (projectsData) {
    return (
      <div className="w-full pt-32 mt-[-8rem] pl-40 pr-20" id="projects">
        <div className="text-4xl mb-16">
          <h1 className="text-std-white font-semibold">
            <span className="mr-2 text-std-green font-spaceMono font-normal">2.</span>
            Proyects
          </h1>
        </div>
        <Slider {...sliderSettings}>
          <Project data={projectsData} project={"Sokkai"} />
          <Project data={projectsData} project={"Samba"} />
          <Project data={projectsData} project={"Portfolio"} />
        </Slider>
      </div>
    );
  }
}

export default Projects;
