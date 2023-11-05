import React from "react";
import Header from "../components/Header";
import Input from "../components/Input";


function Home() {

  let Datos_cards = [
    { id: 1, name: "Nombre del producto", price: 123.00, iMageUrl: "https://klbtheme.com/blonwe/furniture/wp-content/uploads/sites/6/2023/07/1-10-300x300.png" },
    { id: 2, name: "Nombre del producto", price: 123.00, iMageUrl: "https://klbtheme.com/blonwe/furniture/wp-content/uploads/sites/6/2023/07/1-23-300x300.png" },
    { id: 3, name: "Nombre del producto", price: 123.00, iMageUrl: "https://klbtheme.com/blonwe/furniture/wp-content/uploads/sites/6/2023/07/1-18-300x300.png" },
    { id: 4, name: "Nombre del producto", price: 123.00, iMageUrl: "https://klbtheme.com/blonwe/furniture/wp-content/uploads/sites/6/2023/07/1-11-300x300.png" },
    { id: 5, name: "Nombre del producto", price: 123.00, iMageUrl: "https://klbtheme.com/blonwe/furniture/wp-content/uploads/sites/6/2023/07/1-9-300x300.png" },
    { id: 6, name: "Nombre del producto", price: 123.00, iMageUrl: "https://klbtheme.com/blonwe/furniture/wp-content/uploads/sites/6/2023/07/1-10-300x300.png" },
    { id: 7, name: "Nombre del producto", price: 123.00, iMageUrl: "https://klbtheme.com/blonwe/furniture/wp-content/uploads/sites/6/2023/07/1-23-300x300.png" },
    { id: 8, name: "Nombre del producto", price: 123.00, iMageUrl: "https://klbtheme.com/blonwe/furniture/wp-content/uploads/sites/6/2023/07/1-18-300x300.png" },
    { id: 9, name: "Nombre del producto", price: 123.00, iMageUrl: "https://klbtheme.com/blonwe/furniture/wp-content/uploads/sites/6/2023/07/1-11-300x300.png" },
    { id: 10, name: "Nombre del producto", price: 123.00, iMageUrl: "https://klbtheme.com/blonwe/furniture/wp-content/uploads/sites/6/2023/07/1-9-300x300.png" },
  ]


  let renderizado = Datos_cards.map((e) => {
    return (
      <div className="card" key={e.id}>
        <div className="cont_imagen">
          <img src={e.iMageUrl} alt="" />
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

      <div className="fondo_categorias">



<div className="cont_categorias">
<a href="">Belleza y Cuidado Personas</a>
<a href="">Coleccionables</a>
<a href="">Deportes y Fitness</a>
<a href="">Electrodomesticos</a>
<a href="">Electrica</a>
<a href="">Hogar y Jardin</a>
<a href="">Juguetes y Niños</a>
<a href="">Libros, Musica y Peliculas</a>
<a href="">Moda</a>
<a href="">Belleza y Cuidado Personal</a>
</div>


</div>














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
    </div>
  );
}

export default Home;
