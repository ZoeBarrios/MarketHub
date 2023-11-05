import { useContext, useState } from "react";
import AuthContext from "../context/authContext";
import "/public/css/profile.css";
import ListsProfile from "../components/ListsProfile";
import FormNewPublication from "../components/FormNewPublication";
import WishList from "../components/WishList";

function Profile() {
  const { state } = useContext(AuthContext);
  const { id, email, name, userName } = state.user;
  const [showForm, setShowForm] = useState(false);

  //TODO: WISH LIST
  const handleClick = () => {
    setShowForm(!showForm);
  };
  return (
    <div className="profile-page">
      <WishList id={id} />
      <h1>{userName}</h1>
      <p>Username: {name}</p>
      <p>Email:{email}</p>
      <ListsProfile id={id} />
      {showForm ? <FormNewPublication UserId={id} /> : null}
      <button onClick={handleClick}>
        {showForm ? "cancel" : "Create new publication"}
      </button>
    </div>
  );
}

export default Profile;
