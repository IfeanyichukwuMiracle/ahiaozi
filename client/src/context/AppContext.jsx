import { createContext, useEffect, useReducer } from "react";

// set locaclstorage items
!localStorage.getItem("cart") &&
  localStorage.setItem("cart", JSON.stringify([]));
!localStorage.getItem("wishlist") &&
  localStorage.setItem("wishlist", JSON.stringify([]));
!localStorage.getItem("token") && localStorage.setItem("token", "");
!localStorage.getItem("role") && localStorage.setItem("role", "customer");

const defaultState = {
  cart: JSON.parse(localStorage.getItem("cart")),
  token: localStorage.getItem("token"),
  role: localStorage.getItem("role"),
  wishlist: JSON.parse(localStorage.getItem("wishlist")),
};

const reducer = (state, action) => {
  if (action.type === "set_token") {
    return { ...state, token: action.payload };
  }
  if (action.type === "set_role") {
    return { ...state, role: action.payload };
  }
  if (action.type === "add_to_cart") {
    return { ...state, cart: [...state.cart, action.payload] };
  }
  if (action.type === "remove_item") {
    const newCart = state.cart.filter(
      (course) => course._id !== action.payload
    );
    return { ...state, cart: [...newCart] };
  }
  if (action.type === "logout") {
    return { ...state, token: "", role: "customer" };
  }
  throw new Error("invalid action!");
};

export const Context = createContext();
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
