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
        <main className="productPage-wrapper">
          <section className="productPage-wrapper-header">
            <div className="container-buttons">
              <BotonIcono
                functionBtn={FUNCTION_BTN.VOLVER}
                OnClick={handleBack}
              />
              <BotonIcono
                functionBtn={FUNCTION_BTN.FAVORITO}
                OnClick={handleFavorite}
              />
            </div>
          </section>
          <section className="productPage-wrapper-product">
            <div className="productPage-wrapper-product-img">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <aside className="productPage-wrapper-product-data">
              <h2>
                {product.name}{" "}
                <span>{product.isPaused ? "(Paused Publication)" : null}</span>
              </h2>
              <div className="product-data-nameProduct-description">
                <span>Description</span>
                <p>{product.description}</p>
              </div>

              <label htmlFor="reseña" className="product-data-reviews-label">
                Reviews
              </label>
              <Comments id={id} />

              <section className="productPage-product-price">
                <label htmlFor={product.name}>{product.price}</label>
                <a
                  href={`https://wa.me/${seller?.phoneNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="whatsappLink"
                >
                  <i
                    className="fa-brands fa-whatsapp fa-xl"
                    style={{ color: "#ffffff" }}
                  ></i>
                </a>

                <button
                  className="product-data-priceZone-addToCare"
                  onClick={handleButton}
                >
                  {state?.user?.id === product.userId ? "Edit" : "Add to cart"}
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
            </aside>
          </section>
        </main>
      )}
    </>
  );
};

{
  /* <main className="productPage-wrapper">
                <section className="productPage-wrapper-header">
                    <a href="/"><img src="/img/logo.jpeg" alt="" className="imgLogo" /></a>
                    <div className="header-inputGroup">
                        <input type="text" className="header-inputGroup-search" placeholder="Search..." />
                        <BotonIcono functionBtn={FUNCTION_BTN.CARRITO} />
                        <BotonIcono functionBtn={FUNCTION_BTN.FAVORITO} />
                    </div>
                </section>
                <section className="productPage-wrapper-product">
                    <div className="productPage-wrapper-product-img">
                        <img src="/img/test2.png" alt="fotoProducto" />
                    </div>
                    <aside className="productPage-wrapper-product-data">
                        <div className="product-data-nameProduct">
                            <h3 className="product-data-nameProduct-name">{dataTemp.name}</h3>
                            <div className="product-data-nameProduct-description">
                                <span>DESCRIPCION</span>
                                <p>{dataTemp.description}</p>
                            </div>
                        </div>
                        <div className="product-data-reviews">
                            
                            <ul className="product-data-reviews-lista">
                                {
                                    dataTemp.Comentaries.map(Comentary => (
                                        <li key={useId} className="">
                                            <label htmlFor="">{Comentary.reseña}</label>
                                            <label htmlFor="">{Comentary.puntuación}⭐</label>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="product-data-priceZone">
                            <div>
                            <label htmlFor="price" className="product-data-priceZone-price">$ {dataTemp.price}</label>
                            <div>
                                <p>Stock: {dataTemp.stock}</p>
                            </div>

                            </div>
                            <button className="product-data-priceZone-addToCare">ADD TO CART</button>
                        </div>
                    </aside>
                </section>
            </main> */
}
