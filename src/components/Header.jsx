import { Link } from "wouter";
import Input from "./Input";

import LOGO from "../imgs/LOGO3.png";
import { useContext } from "react";
import PublicationContext from "../context/publicationsContex";
import { PUBLICATION_ACTIONS } from "../utils/constants";
import CarritoContext from "../context/carritoContext";
import AuthContext from "../context/authContext";

export default function Header() {
  const { dispatch } = useContext(PublicationContext);
  const { state } = useContext(AuthContext);
  const { carrito } = useContext(CarritoContext);
  let menutras = () => {
    let nav = document.querySelector(".cont_header").querySelector("nav");
    nav.classList.toggle("mostrar");
  };

  const handleReturn = () => {
    dispatch({
      type: PUBLICATION_ACTIONS.RESET,
    });
  };

  return (
    <div>
      <header>
        <div className="cont_header">
          <div className="logo" onClick={handleReturn}>
            <img src={LOGO} alt="" />
          </div>
          <nav>
            <Input class="input1"></Input>
            {state.isAuthenticated ? (
              <Link to="/profile">Profile</Link>
            ) : (
              <Link className="btn_naranja" to="/auth">
                <i className="fa-solid fa-user"></i>Login
              </Link>
            )}
            <div className="contenedor-carrito">
              <Link to="/carrito">
                <i className="fa-solid fa-cart-shopping letra_verde"></i>
                {carrito.length > 0 && (
                  <span className="carrito-numero">{carrito.length}</span>
                )}
              </Link>
            </div>
          </nav>
          <a onClick={menutras} className="menu_ham">
            <i className="fa-solid fa-bars"></i>
          </a>
        </div>
      </header>
    </div>
  );
}
