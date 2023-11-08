import Header from "../components/Header";
import Categorias from "../components/Categorias";
import Footer from "../components/Footer";
import Icono1 from "../imgs/icono1.png";
import Icono2 from "../imgs/icono2.png";
import Icono3 from "../imgs/icono3.png";
import Icono4 from "../imgs/icono4.png";

import ListOfPublications from "../components/ListOfPublications";
import Ofertas from "../components/Ofertas";
import Servicios from "../components/Servicios";
function Home() {
  return (
    <div>
      <Header></Header>

      <div className="fondo1">
        <div data-aos="fade-down" className="cont_fondo1">
          <h4>
            In <span className="letra_verde">MarketHub</span>
          </h4>
          <h1>
            YOU CAN UPLOAD <br />
            <span className="letra_verde">WHATEVER YOU WANT</span>{" "}
          </h1>
          <p>
            We have prepared special discounts for you on electronic <br />
            products. Dont miss these opportunities...
          </p>

          <a className="shop" href="#prod">
            Shop Now <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>

      <Servicios></Servicios>

      <Ofertas></Ofertas>

      <div id="titu_cate" className="titulo_cate">
        <h1>You Can Search your product</h1>
      </div>

      {/*<div className="titulo_fondo2">
          <h1>PRODUCTS</h1>
  </div>*/}
      <div className="fondo2">
        <Categorias></Categorias>
        <ListOfPublications />
      </div>

      {/*

      <div className="titulo_tec">
        <h1>Find your best offer for a technological product</h1>
      </div>

      <div className="fondo_tec">
        <div className="cont_tec">
          <div className="col_tec" id="tec1">
            <h3>Weekend Discount</h3>
            <h1>
              Camera Quality 8K <br /> Ultra
            </h1>
            <h4>Dont miss the last opportunity...</h4>
            <a href="">
              Shop Now <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="col_tec" id="tec2">
            <h3>Weekend Discount</h3>
            <h1>
              New Device coming <br /> this fall
            </h1>
            <h4>Big screens in incredibly slim design...</h4>
            <a href="">
              Shop Now <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>*/}

      <Footer></Footer>
    </div>
  );
}

export default Home;
