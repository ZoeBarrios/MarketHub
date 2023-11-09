import { useContext } from "react";
import CarritoContext from "../context/carritoContext";

export default function PublicationCart({ publication }) {
  const { removeFromCarrito } = useContext(CarritoContext);
  return (
    <div className="cart-item" key={publication.publicationId}>
      <div className="img_carrito">
        <img src={publication.imageUrl} alt={publication.name} />
      </div>

      <div className="cart-item-info">
        <h3>{publication.name}</h3>
        <p>Price: {Number(publication.price).toLocaleString()}</p>
        <p>Quantity: {publication.stock}</p>

        <p>Total: {publication.price * publication.stock}</p>
        <button onClick={() => removeFromCarrito(publication)}>
          Remove from cart
        </button>
      </div>
    </div>
  );
}
