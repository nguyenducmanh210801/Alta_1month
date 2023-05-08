import classes from './Home.module.css';
import { useState } from 'react';
import Alta from '../../components/assets/img/Alta.png';
import imgleft from '../../components/assets/img/imgleft.png';
import hethong from '../../components/assets/img/hethong.png';
import quanli from '../../components/assets/img/quanli.png';
import { Link, Navigate , useNavigate  } from "react-router-dom";

import {ref, child, get } from "firebase/database";
import {Button, Input, Space} from 'antd';
import {database} from '../../firebase'

interface User {
    username: string;
    password: string;
}

const dbRef = ref(database);
    
    get(child(dbRef, `user`)).then((snapshot) => {
        if (snapshot.exists()) {
          const data = (snapshot.val());
          console.log(data);
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });

const Home = () => {


    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const userRef = database.ref("user").orderByChild("userName").equalTo(userName);
            const snapshot = await userRef.once("value");
            const userData = snapshot.val();
            if (!userData) {
                setError("Sai mật khẩu hoặc sai tên đăng nhập");

                return;
            }
            const userId = Object.keys(userData)[0];
            const user = userData[userId] as User;
            if (user.password.toString() !== password) {
                setError("Sai mật khẩu");
                return;
            }
            navigate(`/forgotpass/${userId}`);

        } catch (error) {
            console.error(error);
            setError("error")
        }
    };
    const [showPassword, setShowPassword] = useState(false);

    const inputType = showPassword ? "text" : "password";


    
    
 
    return (
        <div>
            <div className={classes.main}>
                <div className={classes.logoAlta}>
                    <img src={Alta} alt='logo' />
                </div>

                <div className={classes.container}>
                    <label className={classes.nameshow}>Tên đăng nhập *
                    {error ?
                        <Input className={classes.nameinput} type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/>:
                        <Input className={classes.nameinput} type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/>}
                    </label>
                </div>

                <div className={classes.passcontainer}>
                    <div className={classes.nameshow}>Mật khẩu *</div>
                        <div>
                            <Input.Password className={classes.passInput} type={inputType} id="password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                </div>



                <div className={classes.passMessageBefore}>
                    <Link to ='/Forgotpass'>
                        <label className={classes.forgetpass}>
                            {error ? <div><p>{error}</p></div>:
                            <span>Quên mật khẩu ?</span>}
                        </label>
                    </Link>
                </div>

                <div >
                    <button className={classes.Btnlogin} type="submit" onClick={handleLogin}>Đăng nhập</button>
                </div>

                <div>
                    <Link  to="/Forgotpass">
                        <label className={classes.forgetpassnew}>
                            {error? <span>Quên mật khẩu?</span>: <span></span>}
                        </label>
                    </Link>
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
export default Home;