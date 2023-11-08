import { useQuery } from "react-query";
import { getCategories } from "../services/category";
import { useContext } from "react";
import PublicationContext from "../context/publicationsContex";
import { PUBLICATIONS, PUBLICATION_ACTIONS } from "../utils/constants";
import Loader from "./Loader";

export default function Categorias() {
  const { dispatch } = useContext(PublicationContext);
  const {
    isLoading: loadingCategories,
    data: categories,
    error: categoriesError,
  } = useQuery("categories", () => getCategories());
  const handleCategoryChance = (id) => {




    dispatch({ type: PUBLICATION_ACTIONS.SET_ID, payload: id });
    dispatch({
      type: PUBLICATION_ACTIONS.SET_TYPE,
      payload: PUBLICATIONS.BY_CATEGORY,
    });
  };
  return (
    <div>
      {loadingCategories ? (
        <Loader />
      ) : (
        <div id="fondo_cate" className="fondo_categorias">
          <div className="cont_categorias">
            <h1>Categorias</h1>
            {categories
              ? categories.map((category) => (
                  <a 
                    href="#titu_cate"
                    key={category.categoryId}
                    onClick={() => handleCategoryChance(category.categoryId)}
                    
                  >
                    {category.name}
                  </a>
                ))
              : null}
          </div>
        </div>
      )}
    </div>
  );
}
