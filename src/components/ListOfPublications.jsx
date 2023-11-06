import { useContext } from "react";
import PublicationContext from "../context/publicationsContex";
import { useQuery } from "react-query";
import { fetchPublication, getPublications } from "../services/publication";
import Card from "./Card";

export default function ListOfPublications() {
  const {
    publicationsToShow,
    changePublicationsToShow,
    page,
    nextPage,
    prevPage,
    pageSize,
    type,
    id,
    search,
  } = useContext(PublicationContext);

  const {
    isLoading: loadingPublication,
    data: publications,
    error: publicationError,
  } = useQuery(["publications", page], () => getPublications(page, pageSize), {
    onSuccess: (data) => {
      changePublicationsToShow(data);
    },
  });

  const handleNextPage = () => {
    if (publications.length < pageSize) return;
    nextPage();
    fetchPublication(type, page, pageSize, id, search).then((data) => {
      changePublicationsToShow(data);
    });
  };

  const handlePrevPage = () => {
    if (page === 1) return;
    prevPage();
    fetchPublication(type, page, pageSize, id, search).then((data) => {
      changePublicationsToShow(data);
    });
  };

  return (
    <>
      <div className="cont_productos">
        {loadingPublication ? (
          <h1>Loading...</h1>
        ) : (
          publicationsToShow.map((publication) => (
            <Card key={publication.publicationId} publication={publication} />
          ))
        )}
      </div>
      <div className="buttons-container">
        <button
          className="fa-solid fa-chevron-left"
          onClick={handlePrevPage}
        ></button>
        <button
          className="fa-solid fa-chevron-right"
          onClick={handleNextPage}
        ></button>
      </div>
    </>
  );
}
