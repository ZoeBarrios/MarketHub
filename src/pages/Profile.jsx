import { useContext, useState } from "react";
import AuthContext from "../context/authContext";
import "/public/css/profile.css";
import ListsProfile from "../components/ListsProfile";

import HeaderProfile from "../components/HeaderProfile";
import CreatePublication from "../components/CreatePublication";

function Profile() {
  const { state } = useContext(AuthContext);
  const { id, email, name, userName } = state.user;

  return (
    <div className="profile-page">
      <HeaderProfile userName={userName} email={email} id={id} />
      <ListsProfile id={id} />
      <CreatePublication id={id} />
    </div>
  );
}

export default Profile;
