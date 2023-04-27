import classes from './Home.module.css';
import { useState } from 'react';
import Alta from '../../components/assets/img/Alta.png';
import imgleft from '../../components/assets/img/imgleft.png';
import hethong from '../../components/assets/img/hethong.png';
import quanli from '../../components/assets/img/quanli.png';


export const Home = () => {
    
    //const [showPass, setShowPass] = useState(false);

    return (
        <div>
            <div className={classes.main}>
                <div className={classes.logoAlta}>
                    <img src={Alta} alt='logo' />
                </div>

                <div className={classes.container}>
                    <div className={classes.nameshow}>Tên đăng nhập *</div>
                        <input className={classes.nameinput} type="text" value={undefined} />
                </div>

                <div className={classes.passcontainer}>
                    <div className={classes.nameshow}>Mật khẩu *</div>
                        <div >
                            <input className={classes.passInput} />
                        </div>
                </div>



                <div className={classes.passMessageBefore}>
                    <a>
                      Quên mật khẩu?  
                    </a>
                </div>

                <div >
                    <button className={classes.Btnlogin}>Dang nhap</button>
                </div>


                <div className={classes.left}>
                    <div className={classes.LogoRightImg}>
                        <img src={imgleft} />
                    </div>
                    <div className={classes.TextRight}>
                        <img src={hethong} />
                        <img src={quanli} />
                    </div>
                        
                </div>
            </div>
                
        </div>


      

    )
}