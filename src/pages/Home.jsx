import Header from "../components/Header";
import Categorias from "../components/Categorias";
import Footer from "../components/Footer";
import ListOfPublications from "../components/ListOfPublications";

function Home() {
<<<<<<< HEAD
  const [publicationsToShow, setPublicationsToShow] = useState([]);
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


 
=======
>>>>>>> 7ea62feae226be190a4326a958a886e34e97256b
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
<<<<<<< HEAD
        <div className="cont_productos">
          {
            renderizado
          }
        </div>
=======
        <ListOfPublications />
>>>>>>> 7ea62feae226be190a4326a958a886e34e97256b
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Home;
