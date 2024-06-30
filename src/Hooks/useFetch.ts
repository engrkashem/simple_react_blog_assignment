import { useEffect, useState } from "react";
import { TApiResponse } from "../Types";

const useFetch = (url: string) => {
  const [data, setData] = useState<TApiResponse | null>(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((resData: TApiResponse) => setData(resData));
  }, [url]);

  return [data];
};

export default useFetch;
