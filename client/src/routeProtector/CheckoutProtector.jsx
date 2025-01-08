import { useContext, useEffect, useState } from "react";
import { Context } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const CheckoutProtector = ({ children }) => {
  const { state } = useContext(Context);
  const navigate = useNavigate();
  const [showPage, setshowPage] = useState(false);

  useEffect(() => {
    if (state.token && state.cart.length > 0) {
      setshowPage(true);
      return;
    } else {
      setshowPage(false);
      navigate("/cart");
    }
  }, [state]);

  if (showPage) return <>{children}</>;
};

export default CheckoutProtector;
