import { useQuery } from "react-query";
import { getPurchaseByUser } from "../../services/purchases";
import CardPurchase from "./CardPurchase";
import Loader from "../Loader";

export default function ListMyPurchases({ id }) {
  const { isLoading, data } = useQuery(["purchaseUser", id], () =>
    getPurchaseByUser(Number(id))
  );

  return (
    <ul className="list-my-purchases">
      <h2>My purchases</h2>
      {isLoading ? (
        <Loader />
      ) : data.length < 1 ? (
        <p>You don't have anything here</p>
      ) : (
        data.map((purchase) => (
          <CardPurchase
            purchase={purchase}
            key={purchase.publicationId + purchase.purchaseDate}
            addComment={true}
          />
        ))
      )}
    </ul>
  );
}
