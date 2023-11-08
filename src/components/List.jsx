import { LIST } from "../utils/constants";
import CardPublication from "./CardPublication";
import CardPurchase from "./CardPurchase";
import Loader from "./Loader";
import "/public/css/list.css";

export default function List({ isLoading, data, error, listType }) {
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : data.length < 1 ? (
        <p>You don't have anything here</p>
      ) : listType === LIST.PURCHASES ? (
        data.map((purchase) => (
          <CardPurchase key={purchase.purchaseId} purchase={purchase} />
        ))
      ) : (
        data.map((publication) => (
          <CardPublication
            key={publication.publicationId}
            publication={publication}
          />
        ))
      )}
    </>
  );
}
