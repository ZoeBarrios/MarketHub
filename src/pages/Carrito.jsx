import { useContext, useState } from "react";
import CarritoContext from "../context/carritoContext";
import "/public/css/cart.css";
import PublicationCart from "../components/Carrito/PublicationCart";
import { DISCOUNTS_CODES } from "../utils/constants";
import AuthContext from "../context/authContext";
import { toast } from "react-toastify";
import { createPurchase } from "../services/purchases";
import { useLocation } from "wouter";

export default function Carrito() {
  const { carrito, resetCarrito } = useContext(CarritoContext);
  const [location, setLocation] = useLocation();
  const [isDiscountApplied, setIsDiscountApplied] = useState(false);
  const { state } = useContext(AuthContext);
  var total = carrito.reduce((total, item) => total + item.price, 0);

  const [argTax, setArgTax] = useState(parseFloat(total * 0.21).toFixed(1));

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (event.target.value === DISCOUNTS_CODES.CECCHIELMEJOR) {
        setArgTax(0);
        toast("Discount applied", { autoClose: 1500, type: "success" });
        setIsDiscountApplied(true);
      } else {
        toast("Invalid discount code", { autoClose: 1500, type: "error" });
      }
    }
  };
  const handleBack = () => {
    setLocation("/");
  };

  const handleBuy = () => {
    if (state.isAuthenticated) {
      createPurchase({
        amount: total + Number(argTax),
        userId: state.user.id,
        sellerId: carrito[0].userId,
        publicationsIds: carrito.map((item) => item.publicationId),
      })
        .then((res) => {
          toast("Purchase completed", { autoClose: 1500, type: "success" });
          resetCarrito();
          setLocation("/");
        })
        .catch((err) => toast(err, { autoClose: 1500, type: "error" }));
    } else {
      toast("You must be logged in to buy", { autoClose: 1500, type: "error" });
    }
  };
  return (
    <div className="cart-container">
      <div className="cart">
        <i
          className="fa-solid fa-backward fa-xl backCarrito"
          onClick={handleBack}
        ></i>
        <h1 className="titulo_carrito">
          My cart <i className="fa-solid fa-cart-shopping"></i>
        </h1>
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
              <p>Argentinian tax: ${parseFloat(argTax).toLocaleString()}</p>
              <p>Subtotal: ${Number(total).toLocaleString()}</p>
              <p style={{ fontWeight: "bold" }}>
                Total: ${(total + Number(argTax)).toLocaleString()}
              </p>
            </div>
            <div className="cart-buttons">
              <div className="input-discount">
                <label htmlFor="discount">
                  <h3>Discount code</h3>
                </label>
                <input
                  onKeyDown={handleKeyDown}
                  readOnly={isDiscountApplied}
                  name="discount"
                />
              </div>
              <button onClick={handleBuy}>Buy now</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
