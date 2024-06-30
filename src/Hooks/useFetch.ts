import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((resData) => setData(resData));
  }, [url]);

  return [data];
};

export default useFetch;
