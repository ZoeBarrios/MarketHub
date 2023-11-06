import { Link } from "wouter";
import Input from "./Input";
import Logo from "../imgs/logo.jpeg";
import { useContext } from "react";
import PublicationContext from "../context/publicationsContex";
import { PUBLICATION_ACTIONS } from "../utils/constants";

export default function Header() {
  const { dispatch } = useContext(PublicationContext);
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
            <img src={Logo} alt="" />
          </div>
          <nav>
            <Input class="input1"></Input>
            <Link href="/profile">Profile</Link>
            <Link href="/productPage">{/*TEMPORAL*/}Product Page</Link>
            <Link className="btn_naranja" href="/auth">
              <i className="fa-solid fa-user"></i>Login
            </Link>
            <a href="#">
              <i className="fa-solid fa-cart-shopping letra_verde"></i>
            </a>
          </nav>
          <a onClick={menutras} className="menu_ham">
            <i className="fa-solid fa-bars"></i>
          </a>
        </div>
      </header>
    </div>
  );
}
