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
        className="relative mb-40 w-full pt-32 pl-5 pr-5 xs:mt-[-8rem] xs:pt-32 xs:pl-8 xs:pr-8 sm:pl-10 sm:pr-10 md:static md:pl-16 md:pr-16 lg:pl-40 lg:pr-20"
        id="studies"
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
              1.
            </span>
            Studies
          </h1>
        </motion.div>
        <motion.div
          className="mb-10 flex flex-wrap gap-1 border-b-0 border-std-green xs:flex-nowrap xs:border-b-2 sm:gap-2 md:mb-20"
          initial={{ y: "50%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <a
            className={`cursor-pointer border-2 border-std-green/[0] bg-dark-navy px-3 py-1 text-base text-std-green transition-colors hover:bg-std-green/[0.1] xs:border-0 xs:border-x-2 xs:border-t-2 xs:bg-transparent xs:text-2xl sm:px-4 lg:text-xl xl:text-2xl ${
              esic && "border-std-green/[1] !bg-std-green/[0.1]"
            }`}
            onClick={() => handleTabs("esic")}
          >
            ESIC
          </a>
          <a
            className={`cursor-pointer border-2 border-std-green/[0] bg-dark-navy px-3 py-1 text-base text-std-green transition-colors hover:bg-std-green/[0.1] xs:border-0 xs:border-x-2 xs:border-t-2 xs:bg-transparent xs:text-2xl sm:px-4 lg:text-xl xl:text-2xl ${
              aepiFirst && "border-std-green/[1] !bg-std-green/[0.1]"
            }`}
            onClick={() => handleTabs("aepiFirst")}
          >
            AEPI
          </a>
          <a
            className={`cursor-pointer border-2 border-std-green/[0] bg-dark-navy px-3 py-1 text-base text-std-green transition-colors hover:bg-std-green/[0.1] xs:border-0 xs:border-x-2 xs:border-t-2 xs:bg-transparent xs:text-2xl sm:px-4 lg:text-xl xl:text-2xl ${
              aepiSecond && "border-std-green/[1] !bg-std-green/[0.1]"
            }`}
            onClick={() => handleTabs("aepiSecond")}
          >
            AEPI
          </a>
          <a
            className={`cursor-pointer border-2 border-std-green/[0] bg-dark-navy px-3 py-1 text-base text-std-green transition-colors hover:bg-std-green/[0.1] xs:border-0 xs:border-x-2 xs:border-t-2 xs:bg-transparent xs:text-2xl sm:px-4 lg:text-xl xl:text-2xl ${
              ironhack && "border-std-green/[1] !bg-std-green/[0.1]"
            }`}
            onClick={() => handleTabs("ironhack")}
          >
            Ironhack
          </a>
        </motion.div>
        {esic && (
          <motion.div
            className="flex items-center md:gap-24 lg:gap-32 xl:gap-40"
            initial={{ y: "25%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="w-full md:w-6/12">
              <h1 className="mb-2 text-xl font-semibold text-std-white xs:text-2xl md:text-xl xl:text-2xl">
                @{esicData.name}
                <span className="ml-4 text-lg font-normal text-light-slate xs:text-xl md:text-lg xl:text-xl">
                  ({esicData.degree})
                </span>
              </h1>
              <h2 className="mb-6 font-spaceMono text-lg italic text-light-slate xs:text-xl md:text-lg xl:text-xl">
                {esicData.time}
              </h2>
              <p className="text-lg text-std-slate xs:text-xl md:text-lg xl:text-2xl">
                {esicData.description}
              </p>
            </div>
            <div className="absolute bottom-0 right-5 opacity-20 xs:top-5 xs:right-10 sm:right-20 md:static md:flex md:justify-start md:opacity-100">
              <img
                className="w-28 xs:w-32 sm:w-40 md:w-56 xl:w-80"
                src={generateImageApiCall(esicData.image)}
              ></img>
            </div>
          </motion.div>
        )}
        {aepiFirst && (
          <motion.div
            className="flex items-center md:gap-24 lg:gap-32 xl:gap-40"
            initial={{ y: "25%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="w-full md:w-6/12">
              <h1 className="mb-2 text-xl font-semibold text-std-white xs:text-2xl md:text-xl xl:text-2xl">
                @{aepiPythonData.name}
                <span className="ml-4 text-lg font-normal text-light-slate xs:text-xl md:text-lg xl:text-xl">
                  ({aepiPythonData.degree})
                </span>
              </h1>
              <h2 className="mb-6 font-spaceMono text-lg italic text-light-slate xs:text-xl md:text-lg xl:text-xl">
                {aepiPythonData.time}
              </h2>
              <p className="text-lg text-std-slate xs:text-xl md:text-lg xl:text-2xl">
                {aepiPythonData.description}
              </p>
            </div>
            <div className="absolute bottom-0 right-5 justify-start opacity-20 xs:top-5 xs:right-10 sm:right-20 md:static md:flex md:opacity-100">
              <img
                className="w-28 xs:w-32 sm:w-40 md:w-56 xl:w-80"
                src={generateImageApiCall(aepiPythonData.image)}
              ></img>
            </div>
          </motion.div>
        )}
        {aepiSecond && (
          <motion.div
            className="flex items-center md:gap-24 lg:gap-32 xl:gap-40"
            initial={{ y: "25%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="w-full md:w-6/12">
              <h1 className="mb-2 text-xl font-semibold text-std-white xs:text-2xl md:text-xl xl:text-2xl">
                @{aepiDataScientistData.name}
                <span className="ml-4 text-lg font-normal text-light-slate xs:text-xl md:text-lg xl:text-xl">
                  ({aepiDataScientistData.degree})
                </span>
              </h1>
              <h2 className="mb-6 font-spaceMono text-lg italic text-light-slate xs:text-xl md:text-lg xl:text-xl">
                {aepiDataScientistData.time}
              </h2>
              <p className="text-lg text-std-slate xs:text-xl md:text-lg xl:text-2xl">
                {aepiDataScientistData.description}
              </p>
            </div>
            <div className="absolute bottom-0 right-5 justify-start opacity-20 xs:top-5 xs:right-10 sm:right-20 md:static md:flex md:opacity-100">
              <img
                className="w-28 xs:w-32 sm:w-40 md:w-56 xl:w-80"
                src={generateImageApiCall(aepiDataScientistData.image)}
              ></img>
            </div>
          </motion.div>
        )}
        {ironhack && (
          <motion.div
            className="flex items-center md:gap-24 lg:gap-32 xl:gap-40"
            initial={{ y: "25%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="w-full md:w-6/12">
              <h1 className="mb-2 text-xl font-semibold text-std-white xs:text-2xl md:text-xl xl:text-2xl">
                @{ironhackData.name}
                <span className="ml-4 text-lg font-normal text-light-slate xs:text-xl md:text-lg xl:text-xl">
                  ({ironhackData.degree})
                </span>
              </h1>
              <h2 className="mb-6 font-spaceMono text-lg italic text-light-slate xs:text-xl md:text-lg xl:text-xl">
                {ironhackData.time}
              </h2>
              <p className="text-lg text-std-slate xs:text-xl md:text-lg xl:text-2xl">
                {ironhackData.description}
              </p>
            </div>
            <div className="absolute bottom-0 right-5 justify-start opacity-20 xs:top-5 xs:right-10 sm:right-20 md:static md:flex md:opacity-100">
              <img
                className="w-28 xs:w-32 sm:w-40 md:w-56 xl:w-72"
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
