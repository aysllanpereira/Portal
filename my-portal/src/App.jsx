import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MyFormLogin from "./Pages/Login/MyLogin.jsx";
import MyHome from "./Pages/Home/MyHome.jsx"; // Descomente e importe a Home
import Funcionarios from "./Components/Funcionarios/funcionarios.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyFormLogin />} />
        <Route path="/home" element={<MyHome />} />
        <Route path="/funcionarios" element={<Funcionarios />} />
      </Routes>
    </Router>
  );
}

export default App;

