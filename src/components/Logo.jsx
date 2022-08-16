import fetcher from "../services/fetcher";
import { getData } from "../services/getData";
import { config } from "../../config";

function Logo() {
  const authorEndpoint = config.apiEndpoints.author;
  const authorData = getData(authorEndpoint, fetcher);

  if (authorData) {
    return (
      <div
        className="w-12 h-12 flex items-center justify-center rounded-full cursor-pointer border-2 border-std-green hover:bg-std-green/[0.2] transition-colors"
        onClick={() => window.scrollTo(0, 0)}
      >
        <h1 className="text-std-green text-xl">{authorData.first_name[0]}</h1>
      </div>
    );
  }
}

export default Logo;
