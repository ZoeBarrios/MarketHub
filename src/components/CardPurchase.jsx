import { useQuery } from "react-query";
import { getUser } from "../services/users";
import Loader from "./Loader";

export default function CardPurchase({ purchase }) {
  const { data, isLoading } = useQuery(["user", purchase.userId], () =>
    getUser(purchase.userId)
  );

  const date = new Date(purchase.purchaseDate).toLocaleDateString();
  return (
    <li key={purchase.purchaseId} className="card-container">
      {purchase.publications.map((publication) => (
        <div key={publication.publicationId} className="purchase-publication">
          <img
            src={publication.imageUrl}
            alt={publication.name}
            className="img-publication"
          />
          <p>{publication.name}</p>
        </div>
      ))}
      <p>Sale date: {date}</p>
      {isLoading ? <Loader /> : <p>Buyer: {data?.userName}</p>}
    </li>
  );
}
