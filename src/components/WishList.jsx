import { QueryClient, useMutation, useQuery } from "react-query";
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
  const { mutate } = useMutation((pi) => deleteFavorite(id, pi), {
    onSuccess: () => {
      mutate("favoriteUser");
    },
  });

  const handleRemove = (publicationId) => {
    mutate(publicationId);
  };

  return (
    <div>
      {isOpen ? (
        <Modal>
          <div className="modal-content">
            <button onClick={closeModal}>X</button>
            <h2>Wish List</h2>
            {loadingFavorites ? (
              <p>Loading...</p>
            ) : (
              favorites.map((publication) => (
                <div key={publication.publicationId}>
                  <CardPublication publication={publication} />
                  <button
                    onClick={() => handleRemove(publication.publicationId)}
                  >
                    Remove
                  </button>
                </div>
              ))
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
