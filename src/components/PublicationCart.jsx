import { useContext } from "react";
import CarritoContext from "../context/carritoContext";

export default function PublicationCart({ publication }) {
  const { removeFromCarrito } = useContext(CarritoContext);
  return (
    <div className="cart-item" key={publication.publicationId}>
      <img src={publication.imageUrl} alt={publication.name} />
      <div className="cart-item-info">
        <h3>{publication.name}</h3>
        <p>Price: {publication.price}</p>
        <p>Quantity: {publication.stock}</p>

        <p>Total: {publication.price * publication.stock}</p>
        <button onClick={() => removeFromCarrito(publication)}>
          Remove from cart
        </button>
      </div>
    </div>
  );
}
