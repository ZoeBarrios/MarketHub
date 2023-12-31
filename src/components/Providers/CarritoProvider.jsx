import { useState } from "react";
import CarritoContext from "../../context/carritoContext";
import { toast } from "react-toastify";
export default function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);
  const addToCarrito = (publication) => {
    if (
      carrito.find((item) => item.publicationId === publication.publicationId)
    )
      return toast("You already have this publication in your cart", {
        autoClose: 1500,
        type: "warning",
      });

    setCarrito([...carrito, publication]);
    toast("Publication added to cart", {
      autoClose: 1500,
      type: "success",
    });
  };
  const removeFromCarrito = (publication) => {
    setCarrito(
      carrito.filter((item) => item.publicationId !== publication.publicationId)
    );
  };
  const resetCarrito = () => {
    setCarrito([]);
  };
  return (
    <CarritoContext.Provider
      value={{ carrito, addToCarrito, removeFromCarrito, resetCarrito }}
    >
      {children}
    </CarritoContext.Provider>
  );
}
