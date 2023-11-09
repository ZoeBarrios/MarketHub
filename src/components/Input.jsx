import { useContext } from "react";
import PublicationContext from "../context/publicationsContex";
import { PUBLICATION_ACTIONS, PUBLICATIONS } from "../utils/constants";

export default function Input() {
  const { dispatch } = useContext(PublicationContext);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const search = e.target.value;
      dispatch({
        type: PUBLICATION_ACTIONS.SET_TYPE,
        payload: PUBLICATIONS.BY_NAME,
      });
      dispatch({ type: PUBLICATION_ACTIONS.SET_SEARCH, payload: search });

     





      
      const tituCateElement = document.getElementById("titu_cate");
      if (tituCateElement) {
        tituCateElement.scrollIntoView({ behavior: "smooth" });
      }
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