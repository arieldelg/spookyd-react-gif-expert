import { useFetchGif } from "../hooks/useFetchGif";
import CardGif from "./CardGif";
import "./Gifgrid.css";

type Props = {
  categories: string;
};

const Gifgrid = ({ categories }: Props) => {
  const { data, isLoading } = useFetchGif(categories);

  return (
    <div>
      <h3>{categories}</h3>
      <div className="card-grid">
        {isLoading && <p>Cargando!!</p>}
        {typeof data !== "string" &&
          isLoading === false &&
          data.map((element) => <CardGif data={element} key={element.id} />)}
      </div>
    </div>
  );
};

export default Gifgrid;
