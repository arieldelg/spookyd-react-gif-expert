import { Gif } from "../types/customgifTypes";
import { GIFData } from "../types/gifTypes";

const dataFetch = async (categories: string): Promise<Gif[] | string> => {
  try {
    const response = await fetch(
      `http://api.giphy.com/v1/gifs/search?api_key=ze44HOfqi2SoUp1ZdaEvi98RlI3rDOhY&q=${categories}&limit=10`
    );
    const { data }: GIFData = await response.json();

    const newData = data.map((element) => {
      return {
        id: element.id,
        title: element.title,
        img: element.images.downsized_medium,
      };
    });
    return newData;
  } catch (error) {
    console.log(error);
    throw new Error(`Error en el llamado dataFectch: ${error}`);
  }
};

export { dataFetch };
