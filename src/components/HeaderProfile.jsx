import { useContext } from "react";
import "/public/css/headerProfile.css";
import AuthContext from "../context/authContext";
import { useLocation } from "wouter";
import Hamburger from "./Hamburger";

export default function HeaderProfile({
  userName,

  handleListToShow,
}) {
  const { handleLogout } = useContext(AuthContext);
  const [location, setLocation] = useLocation();
  const logout = () => {
    handleLogout();
    setLocation("/");
  };
  return (
    <section className="container-header-profile">
      <Hamburger handleListToShow={handleListToShow} />

      <h1>{userName}</h1>

      <i
        className="fa-solid fa-arrow-right-from-bracket fa-xl log-out"
        onClick={logout}
      ></i>
    </section>
  );
}
