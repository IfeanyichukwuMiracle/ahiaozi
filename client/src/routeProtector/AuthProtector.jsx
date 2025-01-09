import { useContext, useEffect, useState } from "react";
import { Context } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const AuthProtector = ({ children }) => {
  const [showPage, setShowPage] = useState(false);
  const { state } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (state.token) {
      setShowPage(false);
      navigate(-1);
      return;
    } else {
      setShowPage(true);
    }
  }, [state]);

  if (showPage) return <>{children}</>;
};

export default AuthProtector;
