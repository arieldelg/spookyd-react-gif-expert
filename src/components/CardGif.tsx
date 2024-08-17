import { Gif } from "../types/customgifTypes";

const CardGif = ({ id, img, title }: Gif) => {
  return (
    <div key={id} className="card">
      <p>{title}</p>
      <img src={img} alt={title} width={300} />
    </div>
  );
};

export default CardGif;
