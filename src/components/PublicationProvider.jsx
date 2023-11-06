import { useState } from "react";
import PublicationContext from "../context/publicationsContex";
import { PUBLICATIONS } from "../utils/constants";

function PublicationProvider({ children }) {
  const [publicationsToShow, setPublicationsToShow] = useState([]);
  const [page, setPage] = useState(1);
  const [type, setType] = useState(PUBLICATIONS.ALL);
  const [id, setId] = useState(null);
  const [search, setSearch] = useState("");

  const changePublicationsToShow = (publications) => {
    setPublicationsToShow(publications);
  };
  const nextPage = () => {
    setPage(page + 1);
  };
  const prevPage = () => {
    if (page === 1) return;
    setPage(page - 1);
  };
  const changeType = (type) => {
    setType(type);
  };
  return (
    <PublicationContext.Provider
      value={{
        publicationsToShow,
        changePublicationsToShow,
        page,
        nextPage,
        prevPage,
        pageSize: 2,
        type,
        setType,
        id,
        setId,
        search,
        setSearch,
      }}
    >
      {children}
    </PublicationContext.Provider>
  );
}

export default PublicationProvider;
