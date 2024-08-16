import { useEffect, useState } from "react";
import { dataFetch } from "../api/APIGif";
import { Gif } from "../types/customgifTypes";

const useFetchGif = (value: string) => {
  const [data, setData] = useState<Gif[] | string>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // setLoading(true);
    const execute = async () => {
      const data = await dataFetch(value);
      setData(data);
      setLoading(false);
    };
    execute();
  }, [value]);

  return {
    data,
    isLoading: loading,
  };
};

export { useFetchGif };
