import { useQuery } from "react-query";
import { getPurchasesBySeller } from "../services/purchases";
import List from "./List";
import { LIST } from "../utils/constants";

export default function ListPurchases({ id }) {
  const { isLoading: loadingPurchases, data: purchases } = useQuery(
    ["purchaseSeller", id],
    () => getPurchasesBySeller(Number(id))
  );
  return (
    <div className="list-purchases">
      <h2>My Sales</h2>
      <List
        data={purchases}
        isLoading={loadingPurchases}
        listType={LIST.PURCHASES}
      />
    </div>
  );
}
