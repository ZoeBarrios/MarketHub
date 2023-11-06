import React from "react";
import Header from "../components/Header";
import Input from "../components/Input";
import Categorias from "../components/Categorias";
import Productos from "../components/Productos";
import Footer from "../components/Footer";
import {
  getPublications,
  getPublicationsByCategory,
} from "../services/publication";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Card from "../components/Card";
import { getCategories } from "../services/category";

function Home() {
  const [publicationsToShow, setPublicationsToShow] = useState([]);
  const {
    isLoading: loadingPublication,
    data: publications,
    error: publicationError,
  } = useQuery("publications", () => getPublications(1, 20), {
    onSuccess: (data) => {
      setPublicationsToShow(data);
    },
  });

  const handleCategoryChance = (id, page = 1, pageSize = 20) => {
    getPublicationsByCategory(id, page, pageSize).then((data) => {
      setPublicationsToShow(data);
    });
  };

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

      <Categorias handleCategoryChance={handleCategoryChance}></Categorias>
 
      <div className="fondo2">
        <div className="titulo_fondo2">
          <h1>PRODUCTS</h1>
        </div>
        <div className="cont_productos">
          {loadingPublication ? (
            <h1>Loading...</h1>
          ) : (
            publicationsToShow.map((publication) => (
              <Card
                key={publication.publicationId}
                publication={publication}
              ></Card>
            ))
          )}
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Home;
