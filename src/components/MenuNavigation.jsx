import fetcher from "../services/fetcher";
import { getData } from "../services/getData";
import { config } from "../../config";

function MenuNavigation(props) {
  const navigationEndpoint = config.apiEndpoints.navigation;
  const navigationData = getData(navigationEndpoint, fetcher);

  return (
    <nav>
      <ul className="flex flex-col gap-10 sm:gap-12">
        {navigationData.map((navigationItem) => {
          return (
            <a
              onClick={() => props.setMenu(false)}
              href={navigationItem.url}
              key={navigationItem.id}
            >
              <li className="group flex cursor-pointer items-center gap-4 text-2xl sm:text-3xl">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-std-navy text-std-green sm:h-14 sm:w-14">
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
