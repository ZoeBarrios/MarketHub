import { useContext } from "react";
import PublicationContext from "../context/publicationsContex";
import { getPublicationsByName } from "../services/publication";

export default function Input() {
  const { changePublicationsToShow } = useContext(PublicationContext);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const search = e.target.value;
      getPublicationsByName(search, 1, 20).then((data) => {
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
