import LoginComponent from "./../../components/loginC/loginC";
import { useContext, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { auth } = useContext(StoreContext);
  const navigate = useNavigate();
  const base_name = "/food-app-modified-for-backend/";

  useEffect(() => {
    if (auth) {
      navigate(base_name);
    }
  }, [auth, navigate, base_name]);

  return <>{!auth && <LoginComponent />}</>;

}

export default Login;