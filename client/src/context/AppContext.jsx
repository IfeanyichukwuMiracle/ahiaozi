import { createContext, useEffect, useReducer } from "react";

// set locaclstorage items
!localStorage.getItem("cart") &&
  localStorage.setItem("cart", JSON.stringify([]));
!localStorage.getItem("token") && localStorage.setItem("token", "");
!localStorage.getItem("role") && localStorage.setItem("role", "customer");

const defaultState = {
  cart: JSON.parse(localStorage.getItem("cart")),
  token: localStorage.getItem("token"),
  role: localStorage.getItem("role"),
};

const reducer = (state, action) => {
  if (action.type === "") {
    return { ...state };
  }
  throw new Error("invalid action!");
};

const Context = createContext();
const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    localStorage.setItem("token", state.token);
    localStorage.setItem("role", state.role);
  }, [state]);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default AppContext;
