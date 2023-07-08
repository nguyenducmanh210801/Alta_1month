import React from 'react'
import classes from '../CSChiTiet/CSChiTiet.module.css'
import MenuBar from '../../Pages/MenuBar/MenuBar'
import TopMenuBar from '../../Pages/TopBar/TopMenubar'
import { Link } from 'react-router-dom';
import Vector from '../../assets/img/V.png'
import Back  from '../../assets/img/Back.png'
const CSChiTiet:React.FC = ()=> {
  return (
    <div className={classes.Details}>
              <div className={classes.Detailsheader}>
                  <MenuBar></MenuBar>
                  <TopMenuBar></TopMenuBar>
              </div>
              <div className={classes.A}>
                 <h1>Cấp số  
                    <img src={Vector}></img>  
                      <a className={classes.TB} href="/capsochinh"> Danh sách cấp số</a>  
                    <img src={Vector}></img> 
                      <a href='/capsochitiet'> Chi tiết </a>
                  </h1>
                 <h2>Quản lý cấp số</h2>
              </div>
      <div className={classes.DetailEqui}>
                <div className={classes.DetailText}>
                    <label>Thông tin cấp số</label>
                </div>
          <div className={classes.DetailEquiR}>
            <div className={classes.TextDetail}>
              <p className={classes.Text}>Họ tên:</p>
              <p className={classes.DetailText}>Nguyễn Thị Dung</p>
            </div>
            
            <div className={classes.TextDetail}>
              <p className={classes.Text}>Tên dịch vụ:</p>
              <p className={classes.DetailText}>Khám tim mạch</p>
            </div>

            <div className={classes.TextDetail}>
              <p className={classes.Text}>Số thứ tự:</p>
              <p className={classes.DetailText}>2001201</p>
            </div>

            <div className={classes.TextDetail}>
              <p className={classes.Text}>Thời gian cấp:</p>
              <p className={classes.DetailText}>14:35 - 07/11/2021</p>
            </div>

            <div className={classes.TextDetail}>
              <p className={classes.Text}>Hạn sử dụng:</p>
              <p className={classes.DetailText}>18:00 - 07/11/2021</p>
            </div>




          </div>
          <div className={classes.DetailEquiL}>
            <div className={classes.TextDetails}>
              <p className={classes.Text}>Nguồn cấp:</p>
              <p className={classes.DetailText}>Kiosk</p>
            </div>

            <div className={classes.TextDetails}>
              <p className={classes.Text}>Trạng thái:</p>
              <p className={classes.Green}></p>
              <p style={{ paddingLeft: '20px' }} className={classes.DetailText}>Đang chờ</p>
            </div>
                

            <div className={classes.TextDetails}>
              <p className={classes.Text}>Số điện thoại:</p>
              <p className={classes.DetailText}>0948523623</p>
            </div>

            <div className={classes.TextDetails}>
              <p className={classes.Text}>Địa chỉ Email:</p>
              <p className={classes.DetailText}>nguyendung@gmail.com</p>
            </div>

          </div>

                <div className={classes.Return}>
                    <Link to='/InSo'>
                        <img src={Back}></img>Quay lại
                    </Link>
                </div>
     </div>
    </div>
  );
};
export default CSChiTiet;