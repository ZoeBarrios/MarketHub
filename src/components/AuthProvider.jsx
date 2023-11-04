import AuthContext from "../context/authContext";
import { AUTH } from "../utils/constants";
import { useReducer } from "react";

const tokenStorage = localStorage.getItem("token");
const userStorageUser = localStorage.getItem("user");
const userStorage =
  userStorageUser !== "undefined" && userStorageUser !== null
    ? JSON.parse(localStorage.getItem("user"))
    : null;

const initialState = {
  isAuthenticated: tokenStorage && userStorage ? true : false,
  token: tokenStorage ?? null,
  user: userStorage,
};

function authReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case AUTH.LOGIN: {
      const { token, user } = payload;
      return {
        ...state,
        isAuthenticated: true,
        token,
        user,
      };
    }
    case AUTH.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        user: null,
      };
    default:
      return state;
  }
}

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const handleLogin = (data) => {
    dispatch({ type: AUTH.LOGIN, payload: data });
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
  };

  const handleLogout = () => {
    dispatch({ type: AUTH.LOGOUT });
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ state, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
