import Project from "./Project";
import Slider from "react-slick";
import fetcher from "../services/fetcher";
import { getData } from "../services/getData";
import { motion } from "framer-motion";
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
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          cssEase: "ease-in-out",
        },
      },
    ],
  };

  if (projectsData) {
    return (
      <div
        className="w-full pt-32 mt-[-8rem] mb-40 lg:pl-40 md:pl-16 sm:pl-10 xs:pl-8 pl-5 lg:pr-20 md:pr-16 sm:pr-10 xs:pr-8 pr-5"
        id="projects"
      >
        <motion.div
          className="xl:text-4xl lg:text-3xl xs:text-4xl text-3xl xs:mb-16 mb-10"
          initial={{ y: "50%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-std-white font-semibold">
            <span className="mr-2 text-std-green font-spaceMono font-normal">2.</span>
            Proyects
          </h1>
        </motion.div>
        <motion.div
          initial={{ y: "50%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Slider {...sliderSettings}>
            <Project data={projectsData} project={"Sokkai"} />
            <Project data={projectsData} project={"Samba"} />
            <Project data={projectsData} project={"Portfolio"} />
          </Slider>
        </motion.div>
      </div>
    );
  }
}

export default Projects;
