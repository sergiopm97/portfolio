import fetcher from "../services/fetcher";
import { getData } from "../services/getData";
import { RiCloseCircleLine } from "react-icons/ri";
import { config } from "../../config";

function Menu(props) {
  const navigationEndpoint = config.apiEndpoints.navigation;
  const navigationData = getData(navigationEndpoint, fetcher);

  if (navigationData) {
    return (
      <div className="w-screen h-screen flex items-center justify-center fixed top-0 font-spaceMono bg-light-slate">
        <RiCloseCircleLine
          className="w-10 h-10 absolute top-0 right-0 mt-7 mr-7 cursor-pointer fill-std-navy"
          onClick={() => props.setMenu(false)}
        />
        <nav>
          <ul className="flex gap-12 flex-col">
            {navigationData.map((navigationItem) => {
              return (
                <li
                  className="group flex items-center gap-8 pb-3 border-b-2 border-b-transparent cursor-pointer text-3xl hover:border-b-std-navy transition-all"
                  key={navigationItem.id}
                >
                  <span className="w-14 h-14 flex items-center justify-center rounded-full bg-std-navy text-std-green">
                    {navigationItem.id}
                  </span>
                  <h1 className="text-std-navy">{navigationItem.name}</h1>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Menu;
