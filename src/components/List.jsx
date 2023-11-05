import { LIST } from "../utils/constants";
import CardPublication from "./CardPublication";
import CardPurchase from "./CardPurchase";
import Loader from "./Loader";
import "/public/css/list.css";

export default function List({ isLoading, data, error, listType }) {
  return (
    <ul>
      {isLoading ? (
        <Loader />
      ) : listType === LIST.PURCHASES ? (
        data.map((purchase) => (
          <CardPurchase key={purchase.id} purchase={purchase} />
        ))
      ) : (
        data.map((publication) => (
          <CardPublication key={publication.id} publication={publication} />
        ))
      )}
    </ul>
  );
}
