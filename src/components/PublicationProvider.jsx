import { useState } from "react";
import PublicationContext from "../context/publicationsContex";

function PublicationProvider({ children }) {
  const [publicationsToShow, setPublicationsToShow] = useState([]);
  const changePublicationsToShow = (publications) => {
    setPublicationsToShow(publications);
  };
  return (
    <PublicationContext.Provider
      value={{ publicationsToShow, changePublicationsToShow }}
    >
      {children}
    </PublicationContext.Provider>
  );
}

export default PublicationProvider;
