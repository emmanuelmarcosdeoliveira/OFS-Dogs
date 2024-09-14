import { Route, Routes } from "react-router-dom";
import LoginPasswordLost from "./components/LoginPasswordLost";
import LoginPasswordResest from "./components/LoginPasswordReset";
import Home from "./pages/Home";
import Login from "./pages/Login";
import LoginCreate from "./pages/LoginCreate";
const Mainroutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" end element={<Home />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/login/criar" element={<LoginCreate />} />
        <Route path="/login/perdeu" element={<LoginPasswordLost />} />
        <Route path="resetar" element={<LoginPasswordResest />} />
      </Routes>
    </>
  );
};

export default Mainroutes;
