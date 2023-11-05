import { useContext } from "react";
import AuthContext from "../context/authContext";
import {
  getPublications,
  getPublicationsByUserId,
} from "../services/publication";
import { useQuery } from "react-query";
import { getPurchasesBySeller } from "../services/purchases";
import { getFavoritesByUser } from "../services/favorites";
import "/public/css/profile.css";
import { login } from "../services/auth";
import List from "../components/List";
import { LIST } from "../utils/constants";

function Profile() {
  const { state } = useContext(AuthContext);
  const { id, email, name, userName } = state.user;
  const {
    isLoading: loadingPublication,
    data: publications,
    error: publicationError,
  } = useQuery(["publicationUser", id], () =>
    getPublicationsByUserId(Number(id))
  );

  const { isLoading: loadingPurchases, data: purchases } = useQuery(
    ["purchaseUser", id],
    () => getPurchasesBySeller(Number(id))
  );
  /*
  const { isLoading: loadingFavorites, data: favorites } = useQuery(
    ["favoriteUser", id],
    getFavoritesByUser(Number(id)).then((res) => res.json())
  );*/

  //TODO: WISH LIST

  return (
    <div className="profile-page">
      <h1>{userName}</h1>
      <section className="list-info-section">
        <div className="list-publications">
          <h2>Publicaciones Realizadas</h2>
          <List
            isLoading={loadingPublication}
            data={publications}
            error={publicationError}
            listType={LIST.PUBLICATIONS}
          />
        </div>
        <div className="list-purchases">
          <h2>Ventas realizadas</h2>
          <List
            data={purchases}
            isLoading={loadingPurchases}
            listType={LIST.PURCHASES}
          />
        </div>
      </section>
    </div>
  );
}

export default Profile;
