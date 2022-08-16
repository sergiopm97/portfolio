import fetcher from "../services/fetcher";
import { getData } from "../services/getData";
import { config } from "../../config";

function Navigation() {
  const navigationEndpoint = config.apiEndpoints.navigation;
  const navigationData = getData(navigationEndpoint, fetcher);

  if (navigationData) {
    return (
      <nav className="hidden md:block">
        <ul className="flex gap-12">
          {navigationData.map((navigationItem) => {
            return (
              <li className="group flex items-center gap-1 cursor-pointer text-lg" key={navigationItem.id}>
                <span className="w-8 h-8 flex items-center justify-center rounded-full text-std-green group-hover:-translate-x-2 group-hover:bg-std-slate transition-all">
                  {navigationItem.id}
                  <span className="group-hover:hidden">.</span>
                </span>
                <h1 className="text-std-white group-hover:text-std-green">{navigationItem.name}</h1>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navigation;
