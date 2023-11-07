import { useQuery } from "react-query";
import { getPurchaseByUser } from "../services/purchases";
import CardPurchase from "./CardPurchase";
import { createComment } from "../services/comment";

export default function ListMyPurchases({ id }) {
  const { isLoading, data } = useQuery(["purchaseUser", id], () =>
    getPurchaseByUser(Number(id))
  );

  return (
    <div className="list-my-purchases">
      <h2>My purchases</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : data.length < 1 ? (
        <p>You don't have anything here</p>
      ) : (
        <div>
          {data.map((purchase) => (
            <CardPurchase purchase={purchase} key={purchase.publicationId} />
          ))}
        </div>
      )}
    </div>
  );
}
