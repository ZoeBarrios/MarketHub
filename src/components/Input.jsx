import { useContext } from "react";
import PublicationContext from "../context/publicationsContex";
import { getPublicationsByName } from "../services/publication";
import { PUBLICATIONS } from "../utils/constants";

export default function Input() {
  const { changePublicationsToShow, page, pageSize, setType, setSearch } =
    useContext(PublicationContext);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const search = e.target.value;
      setSearch(search);
      setType(PUBLICATIONS.BY_NAME);
      getPublicationsByName(search, page, pageSize).then((data) => {
        changePublicationsToShow(data);
      });
    }
  };

  return (
    <div>
      <div className="cont_buscador">
        <i className="fa-solid fa-magnifying-glass i_buscador"></i>
        <input type="text" placeholder="SEARCH..." onKeyDown={handleSearch} />
      </div>
    </div>
  );
}
