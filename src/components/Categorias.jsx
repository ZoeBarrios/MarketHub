import React from "react";
import { useQuery } from "react-query";
import { getCategories } from "../services/category";

export default function Categorias({ handleCategoryChance }) {
  const {
    isLoading: loadingCategories,
    data: categories,
    error: categoriesError,
  } = useQuery("categories", () => getCategories());

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
