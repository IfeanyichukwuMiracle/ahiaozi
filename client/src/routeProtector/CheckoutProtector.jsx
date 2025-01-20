import { useContext, useEffect, useState } from "react";
import { Context } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const CheckoutProtector = ({ children }) => {
  const { state } = useContext(Context);
  const navigate = useNavigate();
  const [showPage, setshowPage] = useState(false);

  useEffect(() => {
    if (state.cart.length <= 0) {
      setshowPage(false);
      navigate("/cart");
      return;
    }
    if (!state.token) {
      setshowPage(false);
      navigate("/auth/login");
      return;
    }
    setshowPage(true);
    return;
  }, [state]);

  if (showPage) return <>{children}</>;
};

export default CheckoutProtector;
