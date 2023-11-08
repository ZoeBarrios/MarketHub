import Header from "../components/Header";
import Categorias from "../components/Categorias";
import Footer from "../components/Footer";
import ListOfPublications from "../components/ListOfPublications";

function Home() {
  return (
    <div>
      <Header></Header>

      <div className="fondo1">
        <div className="cont_fondo1">
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
        </div>
      </div>

      <div className="titulo_cate">
        <h1>Categorys</h1>
      </div>

      <Categorias></Categorias>


<div className="fondo_ofertas">

<div className="cont_ofertas">

<div className="card_ofertas" id="oferta1">
<div className="des_oferta">
<h3>Weekend Discount</h3>
<h2>Game Consoles</h2>
<p>Best Choice of The Year...</p>
<p>from <span className="negro">$249.99</span></p>
</div>
</div>
<div className="card_ofertas" id="oferta2">
<div className="des_oferta">
<h3>Weekend Discount</h3>
<h2>Home Speaker</h2>
<p>Your music.Make it vibrant</p>
<p>from <span className="negro">$559.99</span></p>
</div>
</div>
<div className="card_ofertas" id="oferta3">
<div className="des_oferta">
<h3>Weekend Discount</h3>
<h2>Accessories</h2>
<p>Only for this week...</p>
<p>from <span className="negro">$129.99</span></p>
</div>
</div>



</div>


</div>










      <div className="fondo2">
        <div className="titulo_fondo2">
          <h1>PRODUCTS</h1>
        </div>
        <ListOfPublications />
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Home;
