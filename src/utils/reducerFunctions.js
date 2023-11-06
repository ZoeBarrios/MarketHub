import { PUBLICATIONS, PUBLICATION_ACTIONS } from "./constants";

export const publicationReducer = (state, action) => {
  switch (action.type) {
    case PUBLICATION_ACTIONS.SET_PUBLICATIONS:
      return { ...state, publicationsToShow: action.payload };
    case PUBLICATION_ACTIONS.NEXT_PAGE:
      return { ...state, page: state.page + 1 };
    case PUBLICATION_ACTIONS.PREV_PAGE:
      return { ...state, page: state.page === 1 ? 1 : state.page - 1 };
    case PUBLICATION_ACTIONS.SET_TYPE:
      return { ...state, type: action.payload, page: 1 };
    case PUBLICATION_ACTIONS.SET_ID:
      return { ...state, id: action.payload };
    case PUBLICATION_ACTIONS.SET_SEARCH:
      return { ...state, search: action.payload };
    case PUBLICATION_ACTIONS.RESET:
      return {
        ...state,
        page: 1,
        type: PUBLICATIONS.ALL,
        id: "",
        search: "",
      };
    default:
      return state;
  }
};
