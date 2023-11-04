import { useContext } from "react";
import AuthContext from "../context/authContext";
import { QueryClient } from "react-query";
import { getPublicationsByUserId } from "../services/publication";

function Profile() {
  /*const { isLoading, error, data } = QueryClient(
    "publicationsUser",
    getPublicationsByUserId(user.id)
  );*/

  return (
    <div>
      <h1>Nombre Persona</h1>
      <section>
        <div>
          <h2>Publicaciones Realizadas</h2>
        </div>
        <div>
          <h2>Ventas realizadas</h2>
        </div>
        <div>
          <h2>Lista de deseos</h2>
        </div>
      </section>
    </div>
  );
}

export default Profile;
