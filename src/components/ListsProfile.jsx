import { useQuery } from "react-query";
import { getPublicationsByUserId } from "../services/publication";
import { getPurchasesBySeller } from "../services/purchases";
import { LIST } from "../utils/constants";
import List from "./List";

export default function ListsProfile({ id }) {
  const {
    isLoading: loadingPublication,
    data: publications,
    error: publicationError,
  } = useQuery(["publicationUser", id], () =>
    getPublicationsByUserId(Number(id))
  );

  const { isLoading: loadingPurchases, data: purchases } = useQuery(
    ["purchaseUser", id],
    () => getPurchasesBySeller(Number(id))
  );
  return (
    <section className="list-info-section">
      <div className="list-publications">
        <h2>Publicaciones Realizadas</h2>
        <List
          isLoading={loadingPublication}
          data={publications}
          error={publicationError}
          listType={LIST.PUBLICATIONS}
        />
      </div>
      <div className="list-purchases">
        <h2>Ventas realizadas</h2>
        <List
          data={purchases}
          isLoading={loadingPurchases}
          listType={LIST.PURCHASES}
        />
      </div>
    </section>
  );
}
