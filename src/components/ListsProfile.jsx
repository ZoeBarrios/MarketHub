import { useQuery } from "react-query";
import { getPublicationsByUserId } from "../services/publication";
import { getPurchasesBySeller } from "../services/purchases";
import { LIST } from "../utils/constants";
import List from "./List";

export default function ListsProfile({ id }) {
  const { isLoading: loadingPublication, data: publications } = useQuery(
    ["publicationUser", id],
    () => getPublicationsByUserId(Number(id))
  );

  const { isLoading: loadingPurchases, data: purchases } = useQuery(
    ["purchaseUser", id],
    () => getPurchasesBySeller(Number(id))
  );

  return (
    <section className="list-info-section">
      <div className="list-publications">
        <h2>My Publications</h2>
        <List
          isLoading={loadingPublication}
          data={publications}
          listType={LIST.PUBLICATIONS}
        />
      </div>
      <div className="list-purchases">
        <h2>My Purchases</h2>
        <List
          data={purchases}
          isLoading={loadingPurchases}
          listType={LIST.PURCHASES}
        />
      </div>
    </section>
  );
}
