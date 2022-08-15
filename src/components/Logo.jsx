import fetcher from "../services/fetcher";
import { getData } from "../services/getData";
import { config } from "../../config";

function Logo() {
  const authorEndpoint = config.apiEndpoints.author;
  const authorData = getData(authorEndpoint, fetcher);

  if (authorData) {
    return (
      <div className="w-12 h-12 flex items-center justify-center border-2 border-std-green rounded-full cursor-pointer hover:bg-std-green/[0.2] transition-colors">
        <h1 className="font-spaceMono text-std-green text-xl">{authorData.first_name[0]}</h1>
      </div>
    );
  }
}

export default Logo;
