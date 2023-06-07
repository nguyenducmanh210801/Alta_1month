import React from 'react'
import { LoginOutlined, MoreOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Alta from '../../assets/img/Alta.png'
import DashBoard from '../../assets/img/dashboard.png'
import ThietBi from '../../assets/img/thietbi.png'
import DichVu from '../../assets/img/chat.png'
import CapSo from '../../assets/img/capso.png'
import BaoCao from '../../assets/img/baocao.png'
import CaiDat from '../../assets/img/setting.png'
import classes from '../../Pages/MenuBar/MenuBar.module.css'
const MenuBar=()=> {
  return (
    <div className={classes.MenuListBar}>

      <div className={classes.ALogo}>
        <img src={Alta}></img>
      </div>

      <div className={classes.MenuBar}>

        <div className={classes.ItemDashBoard}>
          <img src={DashBoard}></img>
          <Link to="/DashBoard"> DashBoard</Link>
        </div>

        <div className={classes.ItemThiebi}>
          <img src={ThietBi}></img>
          <Link to="/ThietBi"> Thiết Bị</Link>
        </div>

        <div className={classes.ItemDichvu}>
          <img src={DichVu}></img>
          <Link to="/ForgotPass"> Dịch vụ</Link>
        </div>

        <div className={classes.ItemCapso}>
          <Link to="/"> <img src={CapSo}></img><a>Cấp số</a></Link>
        </div>

        <div className={classes.ItemBaocao}>
          <Link to="/"><img src={BaoCao}></img><a>Báo cáo</a></Link> 
        </div>

        <div className={classes.ItemCaidat}>
        <Link to="/"> <img src={CaiDat}></img><a>Cài đặt thiết bị<MoreOutlined/></a> </Link>

        </div>
        
         
        <div className={classes.BtnLogout}>
          <Link to="/home">
          <button><LoginOutlined/>Đăng Xuất</button>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default MenuBar;