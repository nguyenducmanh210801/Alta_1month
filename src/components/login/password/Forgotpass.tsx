import Alta from '../../assets/img/Alta.png';
import classes from '../password/Forgotpass.module.css';
import Frame from '../../assets/img/Frame.png';
import { Link, Navigate , useNavigate  } from "react-router-dom";

const Forgotpass =() => {
    return (
        <div className={classes.main}>
            <div className={classes.logoalta}>
                <img src={Alta}/>
            </div>

            <div className={classes.TextOne}>
                <p> Đặt lại mật khẩu </p>
            </div>

            <div className={classes.TextTwo}>
                <p> Vui lòng nhập email để đặt lại mật khẩu của bạn*</p>
            </div>

            <div className={classes.InputText}>
                <input type='text' ></input>
            </div>

            <div className={classes.Huy}>
              <Link to='/home'><button type='button' >Huỷ</button></Link>
                {/* <button type='button' >Huỷ</button> */}
            </div>

            <div className={classes.TiepTuc}>
              <Link to='/Finalpass'><button type='button' >Tiếp tục</button></Link>
                {/* <button type='button' >Tiếp tục</button> */}
            </div>

            <div className={classes.left}>
                <div className={classes.LogoRightImg}>
                    <img src={Frame} />
                </div>
                    
                        
            </div>
                
            
        </div>
        
    )
}
export default Forgotpass; 