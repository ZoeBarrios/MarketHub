import { BotonIcono } from "../components/BotonIcono";
import { FUNCTION_BTN } from "../utils/constants";
import "../../public/css/ProductPage.css";
import { useParams } from "wouter";
import { useQuery } from "react-query";
import { getPublication } from "../services/publication";
import Loader from "../components/Loader";
import Comments from "../components/Comments";
import { createFavorite } from "../services/favorites";
import { useContext, useState } from "react";
import AuthContext from "../context/authContext";
import CarritoContext from "../context/carritoContext";
import { getUser } from "../services/users";
import { toast } from "react-toastify";
import Modal from "../components/Modal";
import FormUpdatePublication from "../components/FormUpdatePublication";
import useModal from "../hooks/useModal";

export const ProductPage = () => {
  const { id } = useParams();
  const { state } = useContext(AuthContext);
  const { isOpen, openModal, closeModal } = useModal();
  const { addToCarrito } = useContext(CarritoContext);
  const [seller, setSeller] = useState({});
  const { data: product, isLoading: productLoading } = useQuery(
    ["product", id],
    () => getPublication(id),
    {
      onSuccess: (data) => {
        getUser(data.userId).then((res) => setSeller(res));
      },
    }
  );

  const handleBack = () => {
    window.history.back();
  };

  const handleButton = () => {
    if (state?.user?.id == product.userId) {
      openModal();
      return;
    } else {
      addToCarrito(product);
      toast("Product added to cart", {
        autoClose: 1500,
        type: "success",
      });
    }
  };

  const handleFavorite = async () => {
    if (!state.user) {
      toast("You must be logged in to add a favorite", {
        autoClose: 1500,
        type: "warning",
      });
      return;
    }
    if (product.isPaused) {
      toast("You can't add a favorite to a paused publication", {
        autoClose: 1500,
        type: "warning",
      });
      return;
    }
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
              <h3>
                {product.name}{" "}
                <span>{product.isPaused ? "Paused Publication" : null}</span>
              </h3>

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

              <button onClick={handleButton}>
                {state?.user?.id === product.userId
                  ? "Editar"
                  : "Agregar al carrito"}
              </button>
              {isOpen ? (
                <Modal>
                  <button onClick={closeModal} className="close-modal-button">
                    X
                  </button>
                  <FormUpdatePublication publication={product} />
                </Modal>
              ) : null}
            </section>
          </section>
        </main>
      )}
    </>
  );
};
