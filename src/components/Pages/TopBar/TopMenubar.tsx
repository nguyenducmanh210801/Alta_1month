import React from 'react'
import classes from '../TopBar/TopMenubar.module.css'
import Ring from '../../assets/img/ring.png'
import Avatar from '../../assets/img/avatar.png'
import { Link } from 'react-router-dom';
const TopBar = () => {
  return (
    <div className={classes.TopBarMenu}>
      <div className={classes.Boximgleft}>
        <div className={classes.ImageRing}>
              <img src={Ring} ></img>
            </div>
          <div className={classes.ImageAvatar}>
            {/* dẫn tới trang infor */}
            <Link to='/Infor'> <img src={Avatar}></img></Link>
          </div>
      </div>     
      <div className={classes.BoxContentsRight}>
            <label className={classes.Hello}> Xin Chào</label>
            
            <p className={classes.Name}>Lê Huỳnh Ái Vân</p>
      </div>
    </div>
  );
};
export default TopBar;