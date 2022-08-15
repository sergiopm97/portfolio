import Logo from "./Logo";
import fetcher from "../services/fetcher";
import { getData } from "../services/getData";
import { config } from "../../config";

function Header() {
  const authorEndpoint = config.apiEndpoints.author;
  const authorData = getData(authorEndpoint, fetcher);

  if (authorData) {
    return (
      <header className="w-full h-24 flex items-center justify-center">
        <div className="max-w-screen-2xl w-11/12 h-4/5 flex items-center justify-between">
          <Logo authorData={authorData} />
        </div>
      </header>
    );
  }
}

export default Header;
