import React from "react";
import { Navigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import { UserContext } from "../../context/UseContext";
import styles from "./Login.module.css";

const Login = () => {
  const { login } = React.useContext(UserContext);
  if (login === true) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <LoginForm />
      </div>
    </section>
  );
};

export default Login;
