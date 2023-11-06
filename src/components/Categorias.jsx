import { useQuery } from "react-query";
import { getCategories } from "../services/category";
import { getPublicationsByCategory } from "../services/publication";
import { useContext } from "react";
import PublicationContext from "../context/publicationsContex";
import { PUBLICATIONS } from "../utils/constants";

export default function Categorias() {
  const { changePublicationsToShow, page, pageSize, setId, setType } =
    useContext(PublicationContext);
  const {
    isLoading: loadingCategories,
    data: categories,
    error: categoriesError,
  } = useQuery("categories", () => getCategories());
  const handleCategoryChance = (id) => {
    setId(id);
    setType(PUBLICATIONS.BY_CATEGORY);
    getPublicationsByCategory(id, page, pageSize).then((data) => {
      changePublicationsToShow(data);
    });
  };
  return (
    <div>
      {loadingCategories ? (
        <h1>Loading...</h1>
      ) : (
        <div className="fondo_categorias">
          <div className="cont_categorias">
            {categories.map((category) => (
              <a
                href="#"
                key={category.categoryId}
                onClick={() => handleCategoryChance(category.categoryId)}
              >
                {category.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
