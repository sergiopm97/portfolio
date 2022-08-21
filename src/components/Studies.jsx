import { useState } from "react";
import fetcher from "../services/fetcher";
import { getData } from "../services/getData";
import { motion } from "framer-motion";
import { config } from "../../config";

function Studies() {
  const [esic, setEsic] = useState(true);
  const [aepiFirst, setAepiFirst] = useState(false);
  const [aepiSecond, setAepiSecond] = useState(false);
  const [ironhack, setIronhack] = useState(false);

  const studiesEndpoint = config.apiEndpoints.studies;
  const studiesData = getData(studiesEndpoint, fetcher);

  function handleTabs(tab) {
    if (tab === "esic") {
      setEsic(true);
      setAepiFirst(false);
      setAepiSecond(false);
      setIronhack(false);
    } else if (tab === "aepiFirst") {
      setEsic(false);
      setAepiFirst(true);
      setAepiSecond(false);
      setIronhack(false);
    } else if (tab === "aepiSecond") {
      setEsic(false);
      setAepiFirst(false);
      setAepiSecond(true);
      setIronhack(false);
    } else if (tab === "ironhack") {
      setEsic(false);
      setAepiFirst(false);
      setAepiSecond(false);
      setIronhack(true);
    }
  }

  function generateImageApiCall(imageId) {
    return `https://1vze7rmf.directus.app/assets/${imageId}?quality=100`;
  }

  if (studiesData) {
    const esicData = studiesData.find((object) => {
      return object.name === "ESIC";
    });

    const aepiPythonData = studiesData.find((object) => {
      return object.name === "AEPI" && object.id === 2;
    });

    const aepiDataScientistData = studiesData.find((object) => {
      return object.name === "AEPI" && object.id === 3;
    });

    const ironhackData = studiesData.find((object) => {
      return object.name === "Ironhack";
    });

    return (
      <div
        className="w-full md:static relative xs:pt-32 pt-32 xs:mt-[-8rem] lg:pl-40 md:pl-16 sm:pl-10 xs:pl-8 pl-5 lg:pr-20 md:pr-16 sm:pr-10 xs:pr-8 pr-5"
        id="studies"
      >
        <motion.div
          className="xl:text-4xl lg:text-3xl xs:text-4xl text-3xl xs:mb-16 mb-10"
          initial={{ y: "50%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-std-white font-semibold">
            <span className="mr-2 text-std-green font-spaceMono font-normal">1.</span>
            Studies
          </h1>
        </motion.div>
        <motion.div
          className="flex xs:flex-nowrap flex-wrap sm:gap-2 gap-1 md:mb-20 mb-10 xs:border-b-2 border-b-0 border-std-green"
          initial={{ y: "50%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <a
            className={`xl:text-2xl lg:text-xl xs:text-2xl text-base sm:px-4 px-3 py-1 xs:border-x-2 xs:border-t-2 xs:border-0 border-2 border-std-green/[0] cursor-pointer xs:bg-transparent bg-dark-navy text-std-green hover:bg-std-green/[0.1] transition-colors ${
              esic && "bg-std-green/[0.1] border-std-green/[1]"
            }`}
            onClick={() => handleTabs("esic")}
          >
            ESIC
          </a>
          <a
            className={`xl:text-2xl lg:text-xl xs:text-2xl text-base sm:px-4 px-3 py-1 xs:border-x-2 xs:border-t-2 xs:border-0 border-2 border-std-green/[0] cursor-pointer xs:bg-transparent bg-dark-navy text-std-green hover:bg-std-green/[0.1] transition-colors ${
              aepiFirst && "bg-std-green/[0.1] border-std-green/[1]"
            }`}
            onClick={() => handleTabs("aepiFirst")}
          >
            AEPI
          </a>
          <a
            className={`xl:text-2xl lg:text-xl xs:text-2xl text-base sm:px-4 px-3 py-1 xs:border-x-2 xs:border-t-2 xs:border-0 border-2 border-std-green/[0] cursor-pointer xs:bg-transparent bg-dark-navy text-std-green hover:bg-std-green/[0.1] transition-colors ${
              aepiSecond && "bg-std-green/[0.1] border-std-green/[1]"
            }`}
            onClick={() => handleTabs("aepiSecond")}
          >
            AEPI
          </a>
          <a
            className={`xl:text-2xl lg:text-xl xs:text-2xl text-base sm:px-4 px-3 py-1 xs:border-x-2 xs:border-t-2 xs:border-0 border-2 border-std-green/[0] cursor-pointer xs:bg-transparent bg-dark-navy text-std-green hover:bg-std-green/[0.1] transition-colors ${
              ironhack && "bg-std-green/[0.1] border-std-green/[1]"
            }`}
            onClick={() => handleTabs("ironhack")}
          >
            Ironhack
          </a>
        </motion.div>
        {esic && (
          <motion.div
            className="flex items-center xl:gap-40 lg:gap-32 md:gap-24"
            initial={{ y: "25%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="md:w-6/12 w-full">
              <h1 className="xl:text-2xl md:text-xl xs:text-2xl text-xl mb-2 text-std-white font-semibold">
                @{esicData.name}
                <span className="xl:text-xl md:text-lg xs:text-xl text-lg ml-4 text-light-slate font-normal">
                  ({esicData.degree})
                </span>
              </h1>
              <h2 className="xl:text-xl md:text-lg xs:text-xl text-lg mb-6 text-light-slate font-spaceMono italic">
                {esicData.time}
              </h2>
              <p className="xl:text-2xl md:text-lg xs:text-xl text-lg text-std-slate">{esicData.description}</p>
            </div>
            <div className="md:flex md:justify-start md:static absolute xs:top-5 bottom-0 sm:right-20 xs:right-10 right-5 md:opacity-100 opacity-20">
              <img
                className="xl:w-80 md:w-56 sm:w-40 xs:w-32 w-28"
                src={generateImageApiCall(esicData.image)}
              ></img>
            </div>
          </motion.div>
        )}
        {aepiFirst && (
          <motion.div
            className="flex items-center xl:gap-40 lg:gap-32 md:gap-24"
            initial={{ y: "25%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="md:w-6/12 w-full">
              <h1 className="xl:text-2xl md:text-xl xs:text-2xl text-xl mb-2 text-std-white font-semibold">
                @{aepiPythonData.name}
                <span className="xl:text-xl md:text-lg xs:text-xl text-lg ml-4 text-light-slate font-normal">
                  ({aepiPythonData.degree})
                </span>
              </h1>
              <h2 className="xl:text-xl md:text-lg xs:text-xl text-lg mb-6 text-light-slate font-spaceMono italic">
                {aepiPythonData.time}
              </h2>
              <p className="xl:text-2xl md:text-lg xs:text-xl text-lg text-std-slate">
                {aepiPythonData.description}
              </p>
            </div>
            <div className="md:flex justify-start md:static absolute xs:top-5 bottom-0 sm:right-20 xs:right-10 right-5 md:opacity-100 opacity-20">
              <img
                className="xl:w-80 md:w-56 sm:w-40 xs:w-32 w-28"
                src={generateImageApiCall(aepiPythonData.image)}
              ></img>
            </div>
          </motion.div>
        )}
        {aepiSecond && (
          <motion.div
            className="flex items-center xl:gap-40 lg:gap-32 md:gap-24"
            initial={{ y: "25%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="md:w-6/12 w-full">
              <h1 className="xl:text-2xl md:text-xl xs:text-2xl text-xl mb-2 text-std-white font-semibold">
                @{aepiDataScientistData.name}
                <span className="xl:text-xl md:text-lg xs:text-xl text-lg ml-4 text-light-slate font-normal">
                  ({aepiDataScientistData.degree})
                </span>
              </h1>
              <h2 className="xl:text-xl md:text-lg xs:text-xl text-lg mb-6 text-light-slate font-spaceMono italic">
                {aepiDataScientistData.time}
              </h2>
              <p className="xl:text-2xl md:text-lg xs:text-xl text-lg text-std-slate">
                {aepiDataScientistData.description}
              </p>
            </div>
            <div className="md:flex justify-start md:static absolute xs:top-5 bottom-0 sm:right-20 xs:right-10 right-5 md:opacity-100 opacity-20">
              <img
                className="xl:w-80 md:w-56 sm:w-40 xs:w-32 w-28"
                src={generateImageApiCall(aepiDataScientistData.image)}
              ></img>
            </div>
          </motion.div>
        )}
        {ironhack && (
          <motion.div
            className="flex items-center xl:gap-40 lg:gap-32 md:gap-24"
            initial={{ y: "25%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="md:w-6/12 w-full">
              <h1 className="xl:text-2xl md:text-xl xs:text-2xl text-xl mb-2 text-std-white font-semibold">
                @{ironhackData.name}
                <span className="xl:text-xl md:text-lg xs:text-xl text-lg ml-4 text-light-slate font-normal">
                  ({ironhackData.degree})
                </span>
              </h1>
              <h2 className="xl:text-xl md:text-lg xs:text-xl text-lg mb-6 text-light-slate font-spaceMono italic">
                {ironhackData.time}
              </h2>
              <p className="xl:text-2xl md:text-lg xs:text-xl text-lg text-std-slate">
                {ironhackData.description}
              </p>
            </div>
            <div className="md:flex justify-start md:static absolute xs:top-5 bottom-0 sm:right-20 xs:right-10 right-5 md:opacity-100 opacity-20">
              <img
                className="xl:w-72 md:w-56 sm:w-40 xs:w-32 w-28"
                src={generateImageApiCall(ironhackData.image)}
              ></img>
            </div>
          </motion.div>
        )}
      </div>
    );
  }
}

export default Studies;
