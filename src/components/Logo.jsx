import fetcher from "../services/fetcher";
import { getData } from "../services/getData";
import { motion } from "framer-motion";
import { config } from "../../config";

function Logo() {
  const authorEndpoint = config.apiEndpoints.author;
  const authorData = getData(authorEndpoint, fetcher);

  if (authorData) {
    return (
      <motion.div
        className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 border-std-green transition-colors hover:bg-std-green/[0.2]"
        onClick={() => window.scrollTo(0, 0)}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-xl text-std-green">{authorData.first_name[0]}</h1>
      </motion.div>
    );
  }
}

export default Logo;
