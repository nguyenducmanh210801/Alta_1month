import './App.module.css';
import Home from './components/login/Home'
import Forgotpass from './components/login/password/Forgotpass'
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
 
  return (
    <div>
    <BrowserRouter>
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/forgotpass" element={<Forgotpass />} />
      </Routes>
    </BrowserRouter>
    </div>
     
  );
}

export default App;
