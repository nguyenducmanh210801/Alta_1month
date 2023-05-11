import Alta from '../../assets/img/Alta.png';
import classes from '../password/Forgotpass.module.css';
import Class from '../password/Finalpass.module.css';
import Frame from '../../assets/img/Frame.png';
import {Button, Input, Space} from 'antd';
import { Link, Navigate , useNavigate  } from "react-router-dom";

const Finalpass =() => {
    return (
        <div className={classes.main}>
            <div className={classes.logoalta}>
                <img src={Alta}/>
            </div>

            <div className={Class.TextOne}>
                <p> Đặt lại mật khẩu mới </p>
            </div>

            <div>
                <p className={Class.InputText}>Mật khẩu  </p>
                <Input.Password className={Class.nameinput} />
                
            </div>

            <div>
                <p className={Class.PassText}>Nhập lại mật khẩu</p>
                <Input.Password className={Class.passinput} />
            </div>

            <div >
                    <Link to='/mainpages'><button className={Class.BtnLogin} type="submit" >Đăng nhập</button></Link>
                </div>
            

            <div className={classes.left}>
                <div className={classes.LogoRightImg}>
                    <img src={Frame} />
                </div>
                    
                        
            </div>
                
            
        </div>
        
    )
}
export default Finalpass; 