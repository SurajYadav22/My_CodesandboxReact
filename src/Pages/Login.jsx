import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const { isAuth, handleLogin } = useContext(AuthContext);

  if (isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <h1>Login Page</h1>
      <input type="emial" placeholder="Email" />
      <br />
      <input type="password" placeholder="Password" />
      <br />
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Login;
