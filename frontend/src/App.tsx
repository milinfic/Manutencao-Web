import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Cadastrar from "./pages/cadastrar";
import Login from "./pages/login";



function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastrar" element={<Cadastrar />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;