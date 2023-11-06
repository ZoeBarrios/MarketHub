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
