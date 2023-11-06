import { useContext } from "react";
import WishList from "./WishList";
import "/public/css/headerProfile.css";
import AuthContext from "../context/authContext";
import { useLocation } from "wouter";

export default function HeaderProfile({ userName, email, id }) {
  const { handleLogout } = useContext(AuthContext);
  const [location, setLocation] = useLocation();
  const logout = () => {
    handleLogout();
    setLocation("/");
  };
  return (
    <section className="container-header-profile">
      <WishList id={id} />
      <h1>{userName}</h1>

      <button onClick={logout} className="wish-list-button">
        Log out
      </button>
    </section>
  );
}
