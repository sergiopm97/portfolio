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
        className="mt-[-8rem] mb-40 w-full pt-32 pl-5 pr-5 xs:pl-8 xs:pr-8 sm:pl-10 sm:pr-10 md:pl-16 md:pr-16 lg:pl-40 lg:pr-20"
        id="projects"
      >
        <motion.div
          className="mb-10 text-3xl xs:mb-16 xs:text-4xl lg:text-3xl xl:text-4xl"
          initial={{ y: "50%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h1 className="font-semibold text-std-white">
            <span className="mr-2 font-spaceMono font-normal text-std-green">
              2.
            </span>
            Projects
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
