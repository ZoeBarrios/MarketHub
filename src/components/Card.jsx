import { useContext } from "react";
import CarritoContext from "../context/carritoContext";
import { Link } from "wouter";
import AuthContext from "../context/authContext";

export default function Card({ publication }) {
  const { state } = useContext(AuthContext);
  const { addToCarrito } = useContext(CarritoContext);
  const handleAddPublication = () => {
    publication.stock = 1;
    addToCarrito(publication);
  };

  return (
    <div className="card" key={publication.publicationId}>
      <div className="cont_imagen">
        <Link to={`publication/${publication.publicationId}`}>
          <img src={publication.imageUrl} alt="" />
        </Link>
      </div>
      <div className="des">
        <h3>{publication.name}</h3>
        <div className="precio">
          <h3>${publication.price}.00</h3>
          {state?.user?.id == publication.userId ? (
            <Link to={`publication/${publication.publicationId}`}>
              <i className="fa-solid fa-edit"></i>
            </Link>
          ) : (
            <a href="#" onClick={handleAddPublication}>
              <i className="fa-solid fa-cart-shopping car_card"></i> Add to Card
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
