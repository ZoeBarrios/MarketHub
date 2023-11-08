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
          <p>{publication.name}</p>
          <p>Sale date: {date}</p>
          {isLoading ? <Loader /> : <p>Buyer: {data?.userName}</p>}
          {addComment && (
            <button onClick={openModal} className="btn-add-comment">
              Add comment
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
              />
            </Modal>
          )}
        </ul>
      ))}
    </li>
  );
}
