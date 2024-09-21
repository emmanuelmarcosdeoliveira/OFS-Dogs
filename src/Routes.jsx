import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/Helper/ProtectedRoute";
import LoginPasswordLost from "./components/LoginPasswordLost";
import LoginPasswordResest from "./components/LoginPasswordReset";
import User from "./components/User";
import Home from "./pages/Home";
import Login from "./pages/Login";
import LoginCreate from "./pages/LoginCreate";
const Mainroutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" end element={<Home />} />
        <Route path="login/*" element={<Login />} />
        <Route path="/login/criar" element={<LoginCreate />} />
        <Route path="/login/perdeu" element={<LoginPasswordLost />} />
        <Route path="resetar" element={<LoginPasswordResest />} />
        <Route
          path="/conta/*"
          element={
            <ProtectedRoute>
              <User />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default Mainroutes;
