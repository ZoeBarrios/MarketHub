import { useContext, useState } from "react";
import AuthContext from "../context/authContext";
import "/public/css/profile.css";
import HeaderProfile from "../components/Profile/HeaderProfile";
import CreatePublication from "../components/Profile/CreatePublication";
import WishList from "../components/Profile/WishList";
import ListMyPublications from "../components/Profile/ListMyPublications";
import ListPurchases from "../components/Profile/ListPurchases";
import ListMyPurchases from "../components/Profile/ListMyPurchases";
import { LIST_TO_SHOW } from "../utils/constants";

function Profile() {
  const { state } = useContext(AuthContext);
  const { id, email, userName } = state.user;
  const [listToShow, setListToShow] = useState(LIST_TO_SHOW.WISHLIST);

  const handleListToShow = (list) => {
    setListToShow(list);
  };

  const listToRender = () => {
    switch (listToShow) {
      case LIST_TO_SHOW.WISHLIST:
        return <WishList id={id} />;
      case LIST_TO_SHOW.PUBLICATIONS:
        return <ListMyPublications id={id} />;
      case LIST_TO_SHOW.PURCHASES:
        return <ListMyPurchases id={id} />;
      case LIST_TO_SHOW.MY_SALES:
        return <ListPurchases id={id} />;
      default:
        return <WishList id={id} />;
    }
  };

  return (
    <div className="profile-page">
      <HeaderProfile
        userName={userName}
        email={email}
        id={id}
        handleListToShow={handleListToShow}
      />
      <section className="action-section">
        <section className="list-info-section">{listToRender()}</section>
        <CreatePublication id={id} />
      </section>
    </div>
  );
}

export default Profile;
