import WishList from "./WishList";
import "/public/css/headerProfile.css";

export default function HeaderProfile({ userName, email, id }) {
  return (
    <section className="container-header-profile">
      <WishList id={id} />
      <h1>{userName}</h1>

      <p>Email:{email}</p>
    </section>
  );
}
