import fetcher from "../services/fetcher";
import { getData } from "../services/getData";
import { config } from "../../config";

function MenuNavigation() {
  const navigationEndpoint = config.apiEndpoints.navigation;
  const navigationData = getData(navigationEndpoint, fetcher);

  return (
    <nav>
      <ul className="flex gap-10 sm:gap-12 flex-col">
        {navigationData.map((navigationItem) => {
          return (
            <a href={navigationItem.url} key={navigationItem.id}>
              <li className="group flex items-center gap-4 cursor-pointer text-2xl sm:text-3xl">
                <span className="w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center rounded-full bg-std-navy text-std-green">
                  {navigationItem.id}
                </span>
                <h1 className="border-b-2 border-b-transparent text-std-navy hover:border-b-std-navy">
                  {navigationItem.name}
                </h1>
              </li>
            </a>
          );
        })}
      </ul>
    </nav>
  );
}

export default MenuNavigation;
