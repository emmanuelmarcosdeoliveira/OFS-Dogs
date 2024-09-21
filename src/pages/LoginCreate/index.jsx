import React from "react";
import { USER_POST } from "../../Api/api";
import Button from "../../components/Forms/Button";
import Input from "../../components/Forms/Input";
import Error from "../../components/Helper/Error";
import { UserContext } from "../../context/UseContext";
import useFetch from "../../hooks/useFetch";
import useForm from "../../hooks/useForm";
import styles from "../Login/Login.module.css";
const LoginCreate = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();
  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <h1 className="title">Cadastre-se</h1>
        <form onSubmit={handleSubmit}>
          <Input label="Usuário" type="text" name="username" {...username} />
          <Input label="Email" type="email" name="username" {...email} />
          <Input label="Senha" type="password" name="username" {...password} />
          {loading ? (
            <Button disabled>Cadastrando...</Button>
          ) : (
            <Button>Cadastrar</Button>
          )}
          <Error error={error} />
        </form>
      </div>
    </section>
  );
};

export default LoginCreate;
