import { Gif } from "../types/customgifTypes";

type Props = {
  data: Gif;
};

const CardGif = ({ data }: Props) => {
  return (
    <div key={data.id} className="card">
      <p>{data.title}</p>
      <img src={data.img.url} alt={data.title} width={300} />
    </div>
  );
};

export default CardGif;
