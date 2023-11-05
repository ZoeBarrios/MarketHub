import React from "react";
import Header from "../components/Header";
import Input from "../components/Input";
import Categorias from "../components/Categorias";
import Productos from "../components/Productos";
import Footer from "../components/Footer";
import { getPublications } from "../services/publication";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";




function Home() {
 const {
    isLoading: loadingPublication,
    data: publications,
    error: publicationError,
  } = useQuery("publications", () => getPublications(1, 20));

  console.log(publications)


  let renderizado = publications.map((e) => {
    return (
      <div className="card" key={e.id}>
        <div className="cont_imagen">
          <img src={e.imageUrl} alt="" />
        </div>
        <div className="des">
          <h3>{e.name}</h3>
          <div className="precio">
            <h3>${e.price}.00</h3>
            <a href=""><i className="fa-solid fa-cart-shopping car_card"></i> Add to Card</a>
          </div>
        </div>
      </div>)
  })


 
  return (
    <div>
      <Header></Header>














      <div className="fondo1">
        <div className="cont_fondo1">
          <h4>In <span className="letra_verde" >MarketHub</span></h4>
          <h1>YOU CAN UPLOAD <br /><span className="letra_verde" >WHATEVER YOU WANT</span> </h1>
          <p>We have prepared special discounts for you on electronic <br />
            products. Dont miss these opportunities...</p>
        </div>
      </div>





<div className="titulo_cate">
  <h1>Categorys</h1>
</div>

     

<Categorias></Categorias>


<div className="fondo2">
        <div className="titulo_fondo2">
          <h1>PRODUCTS</h1>
        </div>
        <div className="cont_productos">
          {
            renderizado
          }
        </div>
      </div>




<Footer></Footer>
    </div>
  );
}

export default Home;
