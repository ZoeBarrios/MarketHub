import { useContext } from "react";
import AuthContext from "../context/authContext";

function Home() {
  const { user } = useContext(AuthContext);
  console.log(user);
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

export default Home;
