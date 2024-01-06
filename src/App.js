import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Menu from "./Componants/Nav/Menu";

function App() {
  return (
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
