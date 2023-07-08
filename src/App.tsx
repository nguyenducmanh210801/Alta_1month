import './App.module.css';
import Home from './components/login/Home'
import Forgotpass from './components/login/password/Forgotpass'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Finalpass from './components/login/password/Finalpass';
import MainPages from './components/mainpages/MainPages';
import ThietBi from './components/ThietBi/ThietBi';
import ChiTietTB from './components/ThietBi/ChiTietTB/ChiTietTB';
import CapNhatTB from './components/ThietBi/CapNhatTB/CapNhatTB';
import DichVu from './components/DichVu/Dichvu';
import DichVuUpdate from './components/DichVu/DichVuUpdate/DichVuUpdate';
import DichVuDetail from './components/DichVu/DichVuDetail/DichVuDetail';
import ThemTB from './components/ThietBi/ThemTB/ThemTB';
import ThemDV from './components/DichVu/ThemDV/ThemDV';
import CSBoQua from './components/CapSo/CSChinh/CSBoQua/CSBoQua';
import CSChinh from './components/CapSo/CSChinh/CSChinh';
import CSDangCho from './components/CapSo/CSChinh/CSDangCho/CSDangCho';
import CSDaSD from './components/CapSo/CSChinh/CSDaSD/CSDaSD';
import CSChiTiet from './components/CapSo/CSChiTiet/CSChiTiet';



import ND from './components/CDTB/ND/ND';
import VT from './components/CDTB/VT/VT';
import TK from './components/CDTB/TK/TK';

function App() {
 
  return (
    <div>
    <BrowserRouter>
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/forgotpass" element={<Forgotpass />} />
      <Route path="/finalpass" element={<Finalpass />} />
      <Route path="/mainpages" element={<MainPages/>} />
      <Route path="/thietbi" element={<ThietBi />} />
      <Route path="/chitietthietbi" element={<ChiTietTB/>} />
      <Route path="/capnhattb" element={<CapNhatTB/>} />
      <Route path="/dichvu" element={<DichVu/>} />
      <Route path="/dichvuUpdate" element={<DichVuUpdate/>} />
      <Route path="/dichvudetail" element={<DichVuDetail/>} />
      <Route path="/themthietbi" element={<ThemTB/>}/>
      <Route path="/themdichvu" element={<ThemDV/>} />
      <Route path="/capsoboqua" element={<CSBoQua/>} />
      <Route path='/capsochinh' element={<CSChinh/>} />
      <Route path='/capsodangcho' element={<CSDangCho/>} />
      <Route path='/capsodasudung' element={<CSDaSD/>} />
      <Route path='/capsochitiet' element={<CSChiTiet/>} />



      <Route path='/ND' element={<ND/>} />
      <Route path='/VT' element={<VT/>} />
      <Route path='/TK' element={<TK/>} />

      </Routes>
    </BrowserRouter>
    </div>
     
  );
}

export default App;
