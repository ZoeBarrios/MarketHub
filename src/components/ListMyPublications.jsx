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

  return (
    <div className="list-publications">
      <h2>My Publications</h2>
      <List
        isLoading={loadingPublication}
        data={publications}
        listType={LIST.PUBLICATIONS}
      />
    </div>
  );
}
