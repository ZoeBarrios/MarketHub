import { useQuery } from "react-query";
import { getFavoritesByUser } from "../services/favorites";

import CardPublication from "./CardPublication";

export default function WishList({ id }) {
  const { isLoading: loadingFavorites, data: favorites } = useQuery(
    ["favoriteUser", id],
    () => getFavoritesByUser(Number(id))
  );

  return (
    <div className="list-of-wish">
      <h2>Wish List</h2>
      {loadingFavorites ? (
        <p>Loading...</p>
      ) : (
        favorites.map((publication) => (
          <CardPublication
            publication={publication}
            id={id}
            key={publication.publicationId}
          />
        ))
      )}
    </div>
  );
}
