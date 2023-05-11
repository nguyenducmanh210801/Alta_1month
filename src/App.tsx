import './App.module.css';
import Home from './components/login/Home'
import Forgotpass from './components/login/password/Forgotpass'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Finalpass from './components/login/password/Finalpass';
import MainPages from './components/mainpages/MainPages';
function App() {
 
  return (
    <div>
    <BrowserRouter>
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/forgotpass" element={<Forgotpass />} />
      <Route path="/finalpass" element={<Finalpass />} />
      <Route path="/mainpages" element={<MainPages/>} />
      </Routes>
    </BrowserRouter>
    </div>
     
  );
}

export default App;
