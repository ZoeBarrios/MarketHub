import { useMutation } from "react-query";
import { deleteFavorite } from "../services/favorites";
import { Link } from "wouter";
import { queryClient } from "../App";

export default function CardPublication({ publication, id }) {
  const { mutate } = useMutation((pi) => deleteFavorite(id, pi), {
    onSuccess: () => {
      queryClient.invalidateQueries("favoriteUser");
    },
  });
  const handleRemove = (publicationId) => {
    mutate(publicationId);
  };
  return (
    <li key={publication.publicationId} className="card-container">
      <div className="container-img-card">
        <Link to={`publication/${publication.publicationId}`}>
          <img
            src={publication.imageUrl}
            alt={publication.name}
            className="img-publication"
          />
        </Link>
        <p>{publication.name}</p>
      </div>

      <p>Precio: ${publication.price}</p>
      {id ? (
        <button
          onClick={() => handleRemove(publication.publicationId)}
          className="remove-button btn-orange"
        >
          Remove
        </button>
      ) : null}
    </li>
  );
}

// <li key={publication.publicationId} className="card-container">
//       <div className="container-img-card">
//         <Link to={`publication/${publication.publicationId}`}>
//           <img
//             src={publication.imageUrl}
//             alt={publication.name}
//             className="img-publication"
//           />
//         </Link>
//         <p>{publication.name}</p>
//       </div>

//       <p>Precio: ${publication.price}</p>
//       {id ? (
//         <button
//           onClick={() => handleRemove(publication.publicationId)}
//           className="remove-button btn-orange"
//         >
//           Remove
//         </button>
//       ) : null}
//     </li>