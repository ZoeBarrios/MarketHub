import { BotonIcono } from "../components/BotonIcono";
import { FUNCTION_BTN } from "../utils/constants";
import "../../public/css/ProductPage.css";
import { useParams } from "wouter";
import { useQuery } from "react-query";
import { getPublication } from "../services/publication";
import Loader from "../components/Loader";
import Comments from "../components/Comments";
import { createFavorite } from "../services/favorites";
import { useContext } from "react";
import AuthContext from "../context/authContext";
import CarritoContext from "../context/carritoContext";

export const ProductPage = () => {
  const { id } = useParams();
  const { state } = useContext(AuthContext);
  const { addToCarrito } = useContext(CarritoContext);
  const { data: product, isLoading: productLoading } = useQuery(
    ["product", id],
    () => getPublication(id)
  );

  const handleBack = () => {
    window.history.back();
  };

  const handleAddToCarrito = () => {
    addToCarrito(product);
  };

  const handleFavorite = async () => {
    try {
      const res = await createFavorite({
        publicationId: Number(id),
        userId: state.user.id,
      });
      alert("Favorite Added");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      {productLoading ? (
        <Loader />
      ) : (
        <main>
          <section className="productPage-hearder">
            <BotonIcono
              functionBtn={FUNCTION_BTN.VOLVER}
              OnClick={handleBack}
            />
            <BotonIcono
              functionBtn={FUNCTION_BTN.FAVORITO}
              OnClick={handleFavorite}
            />
          </section>
          <section className="productPage-product">
            <div className="productPage-product-1stSection">
              <img src={product.imageUrl} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="productPage-product-description">
                {product.description}
              </p>
            </div>
            <section className="comentarySection">
              <h3 className="ReviewTitle">Reseña</h3>
              <Comments id={id} />
            </section>
            <section className="productPage-product-price">
              <label htmlFor={product.name}>{product.price}</label>
              <button onClick={handleAddToCarrito}>Add to Card</button>
            </section>
          </section>
        </main>
      )}
    </>
  );
};
