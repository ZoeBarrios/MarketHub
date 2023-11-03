import React from "react";
import { Link } from "wouter";
import Routes from "../components/Routes";
import Input from "./Input";
import Logo from "../imgs/logo.jpeg";

export default function Header() {
  return (
    <div>
      <header>
        <div className="cont_header">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>

          <nav>
            <Input class="input1"></Input>

            <Link href="/profile">Profile</Link>
            <Link href="/auth">Login</Link>
            <a href="#">
              <i className="fa-solid fa-cart-shopping"></i>
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
}
