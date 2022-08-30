import fetcher from "../services/fetcher";
import { getData } from "../services/getData";
import { motion } from "framer-motion";
import { config } from "../../config";

function Navigation() {
  const navigationEndpoint = config.apiEndpoints.navigation;
  const navigationData = getData(navigationEndpoint, fetcher);

  if (navigationData) {
    return (
      <motion.nav
        className="hidden md:block"
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <ul className="flex gap-12">
          {navigationData.map((navigationItem) => {
            return (
              <a href={navigationItem.url} key={navigationItem.id}>
                <li className="group flex cursor-pointer items-center gap-1 text-lg">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full text-std-green transition-all group-hover:-translate-x-2 group-hover:bg-std-slate">
                    {navigationItem.id}
                    <span className="group-hover:hidden">.</span>
                  </span>
                  <h1 className="text-std-white group-hover:text-std-green">
                    {navigationItem.name}
                  </h1>
                </li>
              </a>
            );
          })}
        </ul>
      </motion.nav>
    );
  }
}

export default Navigation;
