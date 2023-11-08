import { useContext } from "react";
import PublicationContext from "../context/publicationsContex";
import { fetchPublication } from "../services/publication";
import Card from "./Card";
import { useEffect } from "react";
import { PUBLICATIONS, PUBLICATION_ACTIONS } from "../utils/constants";
import Categorias from "./Categorias";

export default function ListOfPublications() {
  const { state, dispatch } = useContext(PublicationContext);
  const { page, pageSize, type, id, search, publicationsToShow } = state;

  useEffect(() => {
    fetchPublication(type, page, pageSize, id, search).then((data) => {
      dispatch({ type: PUBLICATION_ACTIONS.SET_PUBLICATIONS, payload: data });
      if (PUBLICATIONS.BY_CATEGORY === type) {
        dispatch({ type: PUBLICATION_ACTIONS.SET_ID, payload: id });
      }
      if (PUBLICATIONS.BY_NAME === type) {
        dispatch({ type: PUBLICATION_ACTIONS.SET_SEARCH, payload: search });
      }
    });
  }, [page, pageSize, type, id, search, dispatch]);

  const handleNextPage = () => {
    if (publicationsToShow.length < pageSize) return;
    dispatch({ type: PUBLICATION_ACTIONS.NEXT_PAGE });
  };

  const handlePrevPage = () => {
    if (page === 1) return;
    dispatch({ type: PUBLICATION_ACTIONS.PREV_PAGE });
  };

  const canGoBack = page > 1;
  const canGoForward = publicationsToShow.length >= pageSize;

  return (
    <>
      <div className="cont_productos">
       
        {publicationsToShow.length === 0 ? (
          <h1 className="producto_no_encontrado"   >There are no publications to show</h1>
        ) : (
          publicationsToShow.map((publication) => (
            <Card key={publication.publicationId} publication={publication} />
          ))
        )}
      </div>
      <div className="buttons-container">
        <button
          className={`fa-solid fa-chevron-left ${canGoBack ? "" : "disabled"}`}
          onClick={canGoBack ? handlePrevPage : null}
        ></button>
        <button
          className={`fa-solid fa-chevron-right ${
            canGoForward ? "" : "disabled"
          }`}
          onClick={canGoForward ? handleNextPage : null}
        ></button>
      </div>
    </>
  );
}
