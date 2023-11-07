import { useQuery } from "react-query";
import { getUser } from "../services/users";
import Loader from "./Loader";
import Modal from "./Modal";
import useModal from "../hooks/useModal";
import FormCreateComment from "./FormCreateComment";

export default function CardPurchase({ purchase }) {
  const { isOpen, openModal, closeModal } = useModal();
  const { data, isLoading } = useQuery(["user", purchase.userId], () =>
    getUser(purchase.userId)
  );

  const date = new Date(purchase.purchaseDate).toLocaleDateString();
  return (
    <li className="card-container">
      {purchase.publications.map((publication) => (
        <div
          key={publication.publicationId + purchase.purchaseDate}
          className="purchase-publication"
        >
          <img
            src={publication.imageUrl}
            alt={publication.name}
            className="img-publication"
          />
          <p>{publication.name}</p>
          <p>Sale date: {date}</p>
          {isLoading ? <Loader /> : <p>Buyer: {data?.userName}</p>}
          <button onClick={openModal}>Add comment</button>
          {isOpen ? (
            <Modal>
              <button onClick={closeModal}>X</button>
              <FormCreateComment
                publicationId={publication.publicationId}
                userId={purchase.userId}
              />
            </Modal>
          ) : null}
        </div>
      ))}
    </li>
  );
}
