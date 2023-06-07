import { Link, Navigate , useNavigate  } from "react-router-dom";
import Input from "antd/es/input/Input";
import Alta from '../assets/img/Alta.png';
import AvatarBig from '../assets/img/AvatarBig.png'
import Camera from '../assets/img/Camera.png'
import classes from '../../components/mainpages/MainPages.module.css'
import MenuBar from "../Pages/MenuBar/MenuBar";
import TopBar from "../Pages/TopBar/TopMenubar";
const MainPages = () => {
  return (
    <div className={classes.Infor}>
        <div className={classes.MenuBar}>
          <MenuBar></MenuBar>
        </div>
        <div className={classes.TopBar}>
          <TopBar></TopBar>
        </div>
        <div className={classes.BoxContentsLeft}>
        <p> Thông tin cá nhân </p>
      </div>
        <div className={classes.TableInfor}>

          <div className={classes.AvatarBig}>
            <img src={AvatarBig}></img>
          </div>

          <div className={classes.InconCamera}>
            <img src={Camera}></img>
          </div>
          <div className={classes.MyName}>
            <p>Lê Huỳnh Ái Vân</p>
          </div>
          <div className={classes.BoxInforLeft}>
            <div className={classes.NameofUser}>
              <p>Tên người dùng:</p>
              <Input placeholder='Lê Huỳnh Ái Vân' />
            </div>
            <div className={classes.Numberphone}>
              <p>Số điện thoại:</p>
              <Input placeholder='123456789' />
            </div>
            <div className={classes.Emailofuser}>
              <p>Email:</p>
              <Input placeholder='abc@gmail.com' />
            </div>

          </div>
          <div className={classes.BoxInforRight}>
            <div className={classes.LoginName}>
              <p>Tên đăng nhập:</p>
              <Input placeholder='Ai van' />
            </div>
            <div className={classes.Password}>
              <p>Mật khẩu:</p>
              <Input placeholder='aivan123' />
            </div>
            <div className={classes.vaitro}>
              <p>Vai Trò:</p>
              <Input placeholder='người dùng' />
            </div>
          </div>
        </div>

    </div>
  )

}
export default MainPages;