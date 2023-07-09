import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import classes from '../TKThem/TKThem.module.css'
import Vector from '../../../assets/img/V.png'
import MenuBar from '../../../Pages/MenuBar/MenuBar'
import TopMenuBar from '../../../Pages/TopBar/TopMenubar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';

const TKThem: React.FC =() => {
    const [choose1, setValue1] = useState("designation");
    const handlechooseChange = (e: any) => 
    {
        setValue1(e.target.value);
    };

    const [choose2, setValue2] = useState("designation2");
    const handlechoose2Change = (e: any) => 
    {
        setValue2(e.target.value);
    };
     //phần hiển thị/ ẩn mật khẩu 
   const [showPass, setShowPass] = useState(false);
   const [showPass2, setShowPass2] = useState(false);
    
   const toggleShowPass = () => {
       setShowPass(!showPass);
   }
   const toggleShowPass2 = () => {
    setShowPass2(!showPass2);
}

   const inputTypePassword = showPass ? 'text' : 'password';
   const eyePass = showPass ? faEye : faEyeSlash;

   const inputTypePassword2 = showPass2 ? 'text' : 'password';
   const eyePass2 = showPass2 ? faEye : faEyeSlash;
    return (
        <div className={classes.EquiAdd}>

            <div className={classes.EquiAddheader}>
                <MenuBar></MenuBar>
                <TopMenuBar></TopMenuBar>
            </div>
            <div className={classes.Title}>
                 <h1>Cài đặt hệ thống  <img src={Vector}></img> 
                  <a className={classes.TB} href="/TK"> Quản lý tài khoản</a> <img src={Vector}></img> 
                    <a href='/TaiKhoanThem'> Thêm tài khoản </a> 
                 </h1>
                 <h2>Quản lý tài khoản</h2>
            </div>
           
            
            <div className={classes.TableInput}>
                <label>Thông tin tài khoản</label>

                <div className={classes.TableInputLeft}>
                    <div>
                        <span className={classes.TextBox}>Họ tên: </span>
                        <span className={classes.star}>*</span>
                        <input type='text' placeholder='Nhập Họ tên' />
                    </div>

                    <div>
                        <span className={classes.TextBox}>Số điện thoại: </span>
                        <span className={classes.star} >*</span>
                        <input type='text' placeholder='Nhập Số điện thoại' />
                    </div>

                    <div>
                        <span className={classes.TextBox}>Email: </span>
                        <span className={classes.star}>*</span>
                        <input type='text' placeholder='Nhập Email' />
                    </div>

                    <div className={classes.TableInputRight2}>
                        <div>
                            <span className={classes.TextBox}>Loại thiết bị: </span>
                            <span className={classes.star}>*</span>

                            <select
                                value={choose2} 
                                onChange={handlechoose2Change}>
                                <option value="default">Vai trò</option>
                                <option value="one">Kế toán</option>
                                <option value="two">Quản lý</option>
                                <option value="three">Admin</option>
                            </select>
                        </div>
                        <span className={classes.star}>*</span>
                    </div>
                    
                    <span className={classes.Text1}>Là trường thông tin bắt buộc</span>

                    

                </div>
                <div className={classes.TableInputRight}>
                    <div>
                        <span className={classes.TextBox}>Tên đăng nhập: </span>
                        <span className={classes.star}>*</span>
                        <input type='text' placeholder='Nhập tên đăng nhập' />
                    </div>

                    <div>
                        <span className={classes.TextBox}>Mật khẩu: </span>
                        <span className={classes.star}>*</span>
                        <input id='password' 
                        type={inputTypePassword2}
                        placeholder='Nhập tài khoản' />
                        
                        <div className={classes.eyes}>
                                <FontAwesomeIcon
                                icon={eyePass}
                                onClick={toggleShowPass}
                                />
                        </div>  

                    </div>

                    <div>
                        <span className={classes.TextBox}>Nhập lại mật Khẩu: </span>
                        <span className={classes.star}>*</span>
                        <input id='password'
                        type={inputTypePassword} placeholder='Nhập mật khẩu' />
                        <div className={classes.eyes2}>
                                <FontAwesomeIcon
                                icon={eyePass2}
                                onClick={toggleShowPass2}
                                />
                        </div>  
                    </div>

                    <div className={classes.TableInputRight2}>
                        <div>
                            <span className={classes.TextBox}>Tình trạng: </span>
                            <span className={classes.star}>*</span>

                            <select
                                value={choose2} 
                                onChange={handlechoose2Change}>
                                <option value="default">tất cả</option>
                                <option value="two">Hoạt động</option>
                                <option value="three">Ngưng hoạt động</option>
                            </select>
                        </div>
                        
                    </div>

                </div>
                
            </div>
            <div className={classes.ButtonHuy}>
            <Link to='/TK'>
            <button type='button' >Huỷ bỏ</button>
            </Link>
            </div>

            <div className={classes.ButtonEquiA}>
            <Link to='/TK'>
            <button type='button'>Thêm tài khoản</button>
            </Link>
            </div>

        </div>
    );
};
export default TKThem;
