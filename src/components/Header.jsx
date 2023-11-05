import React from "react";
import { Link } from "wouter";
import Routes from "../components/Routes";
import Input from "./Input";
import Logo from "../imgs/logo.jpeg";

export default function Header() {

let menutras = () => {
  let nav = document.querySelector(".cont_header").querySelector("nav");

nav.classList.toggle("eliminar")


}




  return (
    <div>
      <header>
        <div className="cont_header">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <nav  >
            <Input class="input1"></Input>
            <Link href="/profile">Profile</Link>
            <Link href="/productPage">{/*TEMPORAL*/}Product Page</Link>
            <Link className="btn_naranja" href="/auth"><i className="fa-solid fa-user"></i>Login</Link>
            <a href="#">
              <i className="fa-solid fa-cart-shopping letra_verde"></i>
            </a>
          </nav>
<a onClick={menutras}   className="menu_ham" ><i class="fa-solid fa-bars"></i></a>

        </div>
      </header>
    </div>
  );
}
