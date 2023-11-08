import { useQuery } from "react-query";
import { getFavoritesByUser } from "../services/favorites";

import CardPublication from "./CardPublication";
import Loader from "./Loader";

export default function WishList({ id }) {
  const { isLoading: loadingFavorites, data: favorites } = useQuery(
    ["favoriteUser", id],
    () => getFavoritesByUser(Number(id))
  );

  return (
    <ul className="list-of-wish">
      <h2>Wish List</h2>
      {loadingFavorites ? (
        <Loader />
      ) : favorites.length < 1 ? (
        <p>You don't have any publication in your WishList</p>
      ) : (
        favorites.map((publication) => (
          <CardPublication
            publication={publication}
            id={id}
            key={publication.publicationId}
          />
        ))
      )}
    </ul>
  );
}
