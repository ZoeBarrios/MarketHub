import { useMutation, useQuery } from "react-query";
import { deleteFavorite, getFavoritesByUser } from "../services/favorites";
import Modal from "./Modal";
import useModal from "../hooks/useModal";
import CardPublication from "./CardPublication";

export default function WishList({ id }) {
  const { isOpen, openModal, closeModal } = useModal();
  const { isLoading: loadingFavorites, data: favorites } = useQuery(
    ["favoriteUser", id],
    () => getFavoritesByUser(Number(id))
  );

  return (
    <div>
      {isOpen ? (
        <Modal>
          <div className="modal-content">
            <button onClick={closeModal} className="close-modal-button">
              X
            </button>
            <h2>Wish List</h2>
            {loadingFavorites ? (
              <p>Loading...</p>
            ) : (
              <div className="list-of-wish">
                {favorites.map((publication) => (
                  <CardPublication
                    publication={publication}
                    id={id}
                    key={publication.publicationId}
                  />
                ))}
              </div>
            )}
          </div>
        </Modal>
      ) : null}
      <button onClick={openModal} className="wish-list-button">
        Wish List
      </button>
    </div>
  );
}
