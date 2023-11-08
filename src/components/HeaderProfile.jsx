import { useContext } from "react";
import "/public/css/headerProfile.css";
import AuthContext from "../context/authContext";
import { useLocation } from "wouter";
import Hamburger from "./Hamburger";

export default function HeaderProfile({
  userName,

  handleListToShow,
}) {
  const [location, setLocation] = useLocation();
  const handleBack = () => {
    setLocation("/");
  };
  return (
    <section className="container-header-profile">
      <i className="fa-solid fa-backward fa-xl back" onClick={handleBack}></i>

      <h1>{userName}</h1>
      <Hamburger handleListToShow={handleListToShow} />
    </section>
  );
}
