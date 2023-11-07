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
import { getUser } from "../services/users";
import { toast } from "react-toastify";

export const ProductPage = () => {
  const { id } = useParams();
  const { state } = useContext(AuthContext);
  const { addToCarrito } = useContext(CarritoContext);
  const { data: product, isLoading: productLoading } = useQuery(
    ["product", id],
    () => getPublication(id)
  );
  const { data: seller, isLoading: sellerLoading } = useQuery(
    ["seller", product?.userId],
    () => getUser(product?.userId)
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
      toast("Favorite added successfully", {
        autoClose: 1500,
        type: "success",
      });
    } catch (err) {
      toast("You already have this favorite", {
        autoClose: 1500,
        type: "warning",
      });
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
              <a
                href={`https://wa.me/${seller?.phoneNumber}`}
                target="_blank"
                rel="noreferrer"
                className="whatsappLink"
              >
                Contactar por WhatsApp
              </a>

              <button onClick={handleAddToCarrito}>Add to Card</button>
            </section>
          </section>
        </main>
      )}
    </>
  );
};
