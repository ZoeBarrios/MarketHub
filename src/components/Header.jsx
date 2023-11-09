import { Link, useLocation } from "wouter";
import Input from "./Input";
import LOGO from "../imgs/LOGO3.png";
import { useContext } from "react";
import CarritoContext from "../context/carritoContext";
import AuthContext from "../context/authContext";

export default function Header() {
  const { state } = useContext(AuthContext);
  const { carrito } = useContext(CarritoContext);
  let menutras = () => {
    let nav = document.querySelector(".cont_header").querySelector("nav");
    nav.classList.toggle("mostrar");
  };
  const { handleLogout } = useContext(AuthContext);
  const [location, setLocation] = useLocation();

  const logout = () => {
    handleLogout();
    setLocation("/");
  };

  return (
    <div>
      <header>
        <div className="cont_header">
          <div className="logo">
            <img src={LOGO} alt="" />
          </div>
          <nav>
            <Input class="input1"></Input>
            {state.isAuthenticated ? (
              <>
                <Link to="/profile">Profile</Link>
                <i
                  className="fa-solid fa-arrow-right-from-bracket fa-flip-both fa-lg logout"
                  style={{ color: "orangered" }}
                  onClick={logout}
                ></i>
              </>
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
