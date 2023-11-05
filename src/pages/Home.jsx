import React from "react";
import Header from "../components/Header";
import Input from "../components/Input";
import Categorias from "../components/Categorias";
import Productos from "../components/Productos";
import Footer from "../components/Footer";


function Home() {

 
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















<Productos></Productos>







<Footer></Footer>
    </div>
  );
}

export default Home;
