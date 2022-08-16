import useSWR from "swr";

function getData(endpoint, fetcher) {
  const { data } = useSWR(endpoint, fetcher);
  return data;
}

export { getData };
