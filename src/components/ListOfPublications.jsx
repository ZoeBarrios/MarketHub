import { useContext } from "react";
import PublicationContext from "../context/publicationsContex";
import { useQuery } from "react-query";
import { getPublications } from "../services/publication";
import Card from "./Card";

export default function ListOfPublications() {
  const { publicationsToShow, changePublicationsToShow } =
    useContext(PublicationContext);
  const {
    isLoading: loadingPublication,
    data: publications,
    error: publicationError,
  } = useQuery("publications", () => getPublications(1, 20), {
    onSuccess: (data) => {
      changePublicationsToShow(data);
    },
  });

  return (
    <div className="cont_productos">
      {loadingPublication ? (
        <h1>Loading...</h1>
      ) : (
        publicationsToShow.map((publication) => (
          <Card
            key={publication.publicationId}
            publication={publication}
          ></Card>
        ))
      )}
    </div>
  );
}
