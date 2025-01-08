import { useContext, useEffect, useState } from "react";
import { Context } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const DashboardProtector = ({ children }) => {
  const { state } = useContext(Context);
  const navigate = useNavigate();
  const [showPage, setshowPage] = useState(false);

  useEffect(() => {
    if (state.token && (state.role === "tutor" || state.role === "affiliate")) {
      setshowPage(true);
      return;
    } else {
      setshowPage(false);
      navigate("/auth/login");
    }
  }, [state]);

  if (showPage) return <>{children}</>;
};

export default DashboardProtector;
