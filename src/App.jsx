import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { UserStorage } from "./context/UseContext";
import Mainroutes from "./Routes";
import "./styles/App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Mainroutes />
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </>
  );
}

export default App;
