import { useReducer } from "react";
import PublicationContext from "../context/publicationsContex";
import { PUBLICATIONS } from "../utils/constants";
import { publicationReducer } from "../utils/reducerFunctions";

function PublicationProvider({ children }) {
  const initialState = {
    publicationsToShow: [],
    page: 1,
    type: PUBLICATIONS.ALL,
    id: null,
    search: "",
    pageSize: 6,
  };

  const [state, dispatch] = useReducer(publicationReducer, initialState);

  return (
    <PublicationContext.Provider value={{ state, dispatch }}>
      {children}
    </PublicationContext.Provider>
  );
}

export default PublicationProvider;
