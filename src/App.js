import { BrowserRouter, Routes, Route } from "react-router-dom"
import {Toaster} from 'react-hot-toast'
import {AuthProvider} from './Context/Auth'
import './App.css'
import Home from "./Pages/Home";
import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";
import Menu from "./Componants/Nav/Menu";


function App() {
  return (
    <BrowserRouter>
    <Menu/>
    <Toaster/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
