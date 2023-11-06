import { useMutation } from "react-query";
import { deleteFavorite } from "../services/favorites";

export default function CardPublication({ publication, id }) {
  const { mutate } = useMutation((pi) => deleteFavorite(id, pi), {
    onSuccess: () => {
      mutate("favoriteUser");
    },
  });
  const handleRemove = (publicationId) => {
    mutate(publicationId);
  };
  return (
    <li key={publication.publicationId} className="card-container">
      <img
        src={publication.imageUrl}
        alt={publication.name}
        className="img-publication"
      />
      <p>{publication.name}</p>
      <p>Precio: {publication.price}</p>
      {id ? (
        <button
          onClick={() => handleRemove(publication.publicationId)}
          className="remove-button"
        >
          Remove
        </button>
      ) : null}
    </li>
  );
}
