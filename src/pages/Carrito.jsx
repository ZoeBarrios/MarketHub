import { useContext, useState } from "react";
import CarritoContext from "../context/carritoContext";
import "/public/css/cart.css";
import PublicationCart from "../components/PublicationCart";
import { DISCOUNTS_CODES } from "../utils/constants";
import AuthContext from "../context/authContext";

export default function Carrito() {
  const { carrito } = useContext(CarritoContext);
  const [isDiscountApplied, setIsDiscountApplied] = useState(false);
  const { state } = useContext(AuthContext);
  var total = carrito.reduce(
    (total, item) => total + item.price * item.stock,
    0
  );
  const [argTax, setArgTax] = useState(total * 0.21);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (event.target.value === DISCOUNTS_CODES.CECCHIELMEJOR) {
        setArgTax(0);
        alert("Discount applied");
        setIsDiscountApplied(true);
      } else {
        alert("Invalid discount code");
      }
    }
  };

  const handleBuy = () => {
    if (state.isAuthenticated) {
      alert("Purchase completed");
    } else {
      alert("You must be logged in to buy");
    }
  };
  return (
    <div className="cart-container">
      <div className="cart">
        <h1>My cart</h1>
        <div className="cart-items">
          {carrito.map((item) => (
            <PublicationCart publication={item} key={item.publicationId} />
          ))}
        </div>
        {carrito.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
          </div>
        ) : (
          <>
            <div className="cart-total">
              <p>Argentinian tax: {argTax}</p>
              <p>Subtotal: {total}</p>
              <h3>Total: {total + argTax}</h3>
            </div>
            <div className="cart-buttons">
              <div className="input-discount">
                <label>
                  <h3>Discount code</h3>
                </label>
                <input onKeyDown={handleKeyDown} readOnly={isDiscountApplied} />
              </div>
              <button onClick={handleBuy}>Buy now</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
