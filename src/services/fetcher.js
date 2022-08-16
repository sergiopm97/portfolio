import axios from "axios";

async function fetcher(url) {
  return await axios.get(url).then((response) => {
    return response.data.data;
  });
}

export default fetcher;
