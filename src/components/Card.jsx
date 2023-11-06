import { useContext } from "react";
import CarritoContext from "../context/carritoContext";

export default function Card({ publication }) {
  const { addToCarrito } = useContext(CarritoContext);
  const handleAddPublication = () => {
    publication.stock = 1;
    addToCarrito(publication);
  };
  return (
    <div className="card" key={publication.publicationId}>
      <div className="cont_imagen">
        <img src={publication.imageUrl} alt="" />
      </div>
      <div className="des">
        <h3>{publication.name}</h3>
        <div className="precio">
          <h3>${publication.price}.00</h3>
          <a href="#" onClick={handleAddPublication}>
            <i className="fa-solid fa-cart-shopping car_card"></i> Add to Card
          </a>
        </div>
      </div>
    </div>
  );
}
