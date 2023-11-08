import { useContext, useState } from "react";
import AuthContext from "../context/authContext";
import "/public/css/profile.css";
import ListsProfile from "../components/ListMyPublications";

import HeaderProfile from "../components/HeaderProfile";
import CreatePublication from "../components/CreatePublication";
import WishList from "../components/WishList";
import ListMyPublications from "../components/ListMyPublications";
import ListPurchases from "../components/ListPurchases";
import ListMyPurchases from "../components/ListMyPurchases";
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
