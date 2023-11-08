import { useQuery } from "react-query";
import { getUser } from "../services/users";
import Loader from "./Loader";
import Modal from "./Modal";
import useModal from "../hooks/useModal";
import FormCreateComment from "./FormCreateComment";

export default function CardPurchase({ purchase, addComment = false }) {
  const { isOpen, openModal, closeModal } = useModal();
  const { data, isLoading } = useQuery(["user", purchase.userId], () =>
    getUser(purchase.userId)
  );

  const date = new Date(purchase.purchaseDate).toLocaleDateString();
  return (
    <li className="card-container purchase-card">
      {purchase.publications.map((publication) => (
        <ul key={publication.publicationId + purchase.purchaseDate}>
          <img
            src={publication.imageUrl}
            alt={publication.name}
            className="img-publication"
          />
          <p>
            {publication.name}
            <span style={{ display: "block" }}>{purchase.amount}</span>
          </p>

          <p>Sale date: {date}</p>
          {isLoading ? <Loader /> : <p>Buyer: {data?.userName}</p>}
          {addComment && (
            <button
              onClick={purchase.wasDelivered ? "" : openModal}
              className={purchase.wasDelivered ? "disabled" : "btn-add-comment"}
            >
              {purchase.wasDelivered ? "Review added" : "Add review"}
            </button>
          )}

          {isOpen && (
            <Modal>
              <button onClick={closeModal} className="close-modal-button">
                X
              </button>
              <FormCreateComment
                publicationId={publication.publicationId}
                userId={purchase.userId}
                closeModal={closeModal}
                purchaseId={purchase.purchaseId}
              />
            </Modal>
          )}
        </ul>
      ))}
    </li>
  );
}
