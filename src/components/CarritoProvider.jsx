import { useState } from "react";
import CarritoContext from "../context/carritoContext";
export default function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);
  const addToCarrito = (publication) => {
    if (
      carrito.find((item) => item.publicationId === publication.publicationId)
    )
      return alert("Ya esta en el carrito");
    setCarrito([...carrito, publication]);
  };
  const removeFromCarrito = (publication) => {
    setCarrito(
      carrito.filter((item) => item.publicationId !== publication.publicationId)
    );
  };
  return (
    <CarritoContext.Provider
      value={{ carrito, addToCarrito, removeFromCarrito }}
    >
      {children}
    </CarritoContext.Provider>
  );
}
