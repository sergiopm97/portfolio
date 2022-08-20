import { useState } from "react";
import fetcher from "../services/fetcher";
import { getData } from "../services/getData";
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
      return object.name === "Ironhack Amsterdam";
    });

    return (
      <div className="w-full pt-32 mt-[-8rem] lg:pl-40 lg:pr-20" id="studies">
        <div className="xl:text-4xl mb-16">
          <h1 className="text-std-white font-semibold">
            <span className="mr-2 text-std-green font-spaceMono font-normal">1.</span>
            Studies
          </h1>
        </div>
        <div className="flex gap-2 mb-20 border-b-2 border-std-green ">
          <a
            className={`xl:text-2xl xl:px-4 xl:py-1 border-x-2 border-t-2 border-std-green/[0] cursor-pointer text-std-green hover:bg-std-green/[0.1] transition-colors ${
              esic && "bg-std-green/[0.1] border-std-green/[1]"
            }`}
            onClick={() => handleTabs("esic")}
          >
            ESIC
          </a>
          <a
            className={`xl:text-2xl xl:px-4 xl:py-1 border-x-2 border-t-2 border-std-green/[0] cursor-pointer text-std-green hover:bg-std-green/[0.1] transition-colors ${
              aepiFirst && "bg-std-green/[0.1] border-std-green/[1]"
            }`}
            onClick={() => handleTabs("aepiFirst")}
          >
            AEPI
          </a>
          <a
            className={`xl:text-2xl xl:px-4 xl:py-1 border-x-2 border-t-2 border-std-green/[0] cursor-pointer text-std-green hover:bg-std-green/[0.1] transition-colors ${
              aepiSecond && "bg-std-green/[0.1] border-std-green/[1]"
            }`}
            onClick={() => handleTabs("aepiSecond")}
          >
            AEPI
          </a>
          <a
            className={`xl:text-2xl xl:px-4 xl:py-1 border-x-2 border-t-2 border-std-green/[0] cursor-pointer text-std-green hover:bg-std-green/[0.1] transition-colors ${
              ironhack && "bg-std-green/[0.1] border-std-green/[1]"
            }`}
            onClick={() => handleTabs("ironhack")}
          >
            Ironhack
          </a>
        </div>
        {esic && (
          <div className="flex gap-40">
            <div className="w-6/12">
              <h1 className="text-2xl mb-2 text-std-white font-semibold">
                @{esicData.name}
                <span className="text-xl ml-4 text-light-slate font-normal">({esicData.degree})</span>
              </h1>
              <h2 className="text-xl mb-6 text-light-slate font-spaceMono italic">{esicData.time}</h2>
              <p className="text-xl text-std-slate">{esicData.description}</p>
            </div>
            <div className="flex justify-start">
              <img className="w-80" src={generateImageApiCall(esicData.image)}></img>
            </div>
          </div>
        )}
        {aepiFirst && (
          <div className="flex items-center gap-40">
            <div className="w-6/12">
              <h1 className="text-2xl mb-2 text-std-white font-semibold">
                @{aepiPythonData.name}
                <span className="text-xl ml-4 text-light-slate font-normal">({aepiPythonData.degree})</span>
              </h1>
              <h2 className="text-xl mb-6 text-light-slate font-spaceMono italic">{aepiPythonData.time}</h2>
              <p className="text-xl text-std-slate">{aepiPythonData.description}</p>
            </div>
            <div className="flex justify-start">
              <img className="w-80" src={generateImageApiCall(aepiPythonData.image)}></img>
            </div>
          </div>
        )}
        {aepiSecond && (
          <div className="flex items-center gap-40">
            <div className="w-6/12">
              <h1 className="text-2xl mb-2 text-std-white font-semibold">
                @{aepiDataScientistData.name}
                <span className="text-xl ml-4 text-light-slate font-normal">({aepiDataScientistData.degree})</span>
              </h1>
              <h2 className="text-xl mb-6 text-light-slate font-spaceMono italic">{aepiDataScientistData.time}</h2>
              <p className="text-xl text-std-slate">{aepiDataScientistData.description}</p>
            </div>
            <div className="flex justify-start">
              <img className="w-80" src={generateImageApiCall(aepiDataScientistData.image)}></img>
            </div>
          </div>
        )}
        {ironhack && (
          <div className="flex items-center gap-40">
            <div className="w-6/12">
              <h1 className="text-2xl mb-2 text-std-white font-semibold">
                @{ironhackData.name}
                <span className="text-xl ml-4 text-light-slate font-normal">({ironhackData.degree})</span>
              </h1>
              <h2 className="text-xl mb-6 text-light-slate font-spaceMono italic">{ironhackData.time}</h2>
              <p className="text-xl text-std-slate">{ironhackData.description}</p>
            </div>
            <div className="flex justify-start">
              <img className="w-64" src={generateImageApiCall(ironhackData.image)}></img>
            </div>
          </div>
        )}
        <div className="h-screen"></div>
      </div>
    );
  }
}

export default Studies;
