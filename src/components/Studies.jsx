import { useState } from "react";

function Studies() {
  const [esic, setEsic] = useState(true);
  const [aepiFirst, setAepiFirst] = useState(false);
  const [aepiSecond, setAepiSecond] = useState(false);
  const [ironhack, setIronhack] = useState(false);

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

  return (
    <div className="w-full lg:pl-40 lg:pr-20" id="studies">
      <div className="xl:text-4xl mb-16">
        <h1 className="text-std-white font-semibold">
          <span className="mr-2 text-std-green font-spaceMono font-normal">1.</span>
          Studies
        </h1>
      </div>
      <div className="flex gap-2 border-b-2 border-std-green ">
        <a
          className={`xl:text-lg xl:px-4 xl:py-1 border-x-2 border-t-2 border-std-green/[0] cursor-pointer text-std-green hover:bg-std-green/[0.1] transition-colors ${
            esic && "bg-std-green/[0.1] border-std-green/[1]"
          }`}
          onClick={() => handleTabs("esic")}
        >
          ESIC
        </a>
        <a
          className={`xl:text-lg xl:px-4 xl:py-1 border-x-2 border-t-2 border-std-green/[0] cursor-pointer text-std-green hover:bg-std-green/[0.1] transition-colors ${
            aepiFirst && "bg-std-green/[0.1] border-std-green/[1]"
          }`}
          onClick={() => handleTabs("aepiFirst")}
        >
          AEPI
        </a>
        <a
          className={`xl:text-lg xl:px-4 xl:py-1 border-x-2 border-t-2 border-std-green/[0] cursor-pointer text-std-green hover:bg-std-green/[0.1] transition-colors ${
            aepiSecond && "bg-std-green/[0.1] border-std-green/[1]"
          }`}
          onClick={() => handleTabs("aepiSecond")}
        >
          AEPI
        </a>
        <a
          className={`xl:text-lg xl:px-4 xl:py-1 border-x-2 border-t-2 border-std-green/[0] cursor-pointer text-std-green hover:bg-std-green/[0.1] transition-colors ${
            ironhack && "bg-std-green/[0.1] border-std-green/[1]"
          }`}
          onClick={() => handleTabs("ironhack")}
        >
          Ironhack
        </a>
      </div>
    </div>
  );
}

export default Studies;
