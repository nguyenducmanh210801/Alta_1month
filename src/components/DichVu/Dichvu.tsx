import React from 'react'
import { useState } from "react";
import MenuBar from '../Pages/MenuBar/MenuBar'
import TopMenuBar from '../Pages/TopBar/TopMenubar'
import classes from '../DichVu/Dichvu.module.css'
import Vector from '../assets/img/AddTB.png'
import V from '../assets/img/V.png'
import { Link } from 'react-router-dom';
import { Input,Space, DatePicker, DatePickerProps } from 'antd';
import { CaretRightOutlined,CaretRightFilled } from '@ant-design/icons';
import { Pagination } from 'antd';

const DichVu:React.FC =() => {

    const [choose,setValue ] = useState('designation');
    const handlecChange = (e: any) => 
    {
        setValue(e.target.value);
    };

    const { Search } = Input;
    function onSearch(value: string) 
    {
        console.log(value);
    }

    
    function onChange(date: any, dateString: any) 
    {
        console.log(date, dateString);
    }

    return (
        <div className={classes.DichVu}>
            <div className={classes.DichVuheader}>
                <MenuBar></MenuBar>
                <TopMenuBar></TopMenuBar>
            </div>
            
            <div className={classes.BoxHeader}>
                <h1>Dịch vụ  <img src={V}></img> 
                    <a href='/DV'> Danh sách dịch vụ</a> </h1>
                <h2>Quản lý dịch vụ</h2>
            </div>

            <div className={classes.Combobox}>
                <div className={classes.ComboboxHeader}>
                    <label>Trạng thái hoạt động</label>
                </div>
                <div className={classes.ComboboxStatus}>
                    <select 
                        value={choose} 
                        onChange={handlecChange}>
                        <option value="1">Tất cả</option>
                        <option value="2">Hoạt động</option>
                        <option value="3">Ngưng hoạt động</option>
                    </select>
                </div>
            </div>

            {}
            <div className={classes.DateBegin}>
                <p>Chọn thời gian</p>
                <DatePicker  
                    onChange={onChange} 
                    style={{top: 188, 
                            left: 550, 
                            height: 44
                        }}
                    ></DatePicker> 
            </div>
                <div className={classes.Arrow}>
                        <div className={classes.Icon}>
                            <CaretRightFilled></CaretRightFilled>
                        </div>
                </div>
            <div className={classes.DateEnd}>
                <DatePicker 
                    onChange={onChange} 
                    style={{top: 144, 
                            left: 750, 
                            height: 44 
                        }}
                    ></DatePicker> 
            </div>

            <div className={classes.MenuSearch}>
                    <div className={classes.Search}>
                        <label>Từ khoá</label>
                    </div>           
                <Search 
                    placeholder="Nhập từ khoá" 
                    allowClear onSearch={onSearch}>
                </Search>
            </div>

            <div className={classes.ListDichVu}>
                <table style={{ width: '1350px' }}  >
                    <thead>
                        <tr>
                            <th>Mã dịch vụ</th>
                            <th>Tên dịch vụ</th>
                            <th>Mô tả</th>
                            <th>Trạng thái hoạt động</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr style={{ background: 'white' }}  >
                            <td >KIO_01</td>
                            <td>Kiosk</td>
                            <td>Mô tả dịch vụ 1</td>
                            <td>
                                <div className={classes.Connect}>
                                    <span className={classes.ConnectFail}></span>
                                    <label className={classes.BoxFail}>
                                        Ngưng hoạt động
                                    </label>
                                </div>
                            </td>

                            <td className={classes.DetailsDichVu}>
                                <Link to="/dichvudetail">Chi tiết</Link>
                            </td>
                            <td className={classes.UpdateDichVu}>
                                <Link to="/dichvuUpdate">Cập nhật</Link>
                            </td>

                        </tr>
                        <tr>
                            <td>KIO_01</td>
                            <td>Kiosk</td>
                            <td>Hoạt động</td>

                            <td>
                                <div className={classes.Connect}>
                                    <span className={classes.Green}></span>
                                    <label className={classes.available}>
                                        Hoạt động
                                    </label>
                                </div>
                            </td>

                            <td className={classes.DetailsDichVu}>
                                <Link to="/dichvudetail">Chi tiết</Link>
                            </td>
                            <td className={classes.UpdateDichVu}>
                                <Link to="/dichvuUpdate">Cập nhật</Link>
                            </td>
                        </tr>
                        <tr style={{ background: 'white' }}  >
                            <td>KIO_01</td>
                            <td>Kiosk</td>
                            <td>Hoạt động</td>

                            <td>
                                <div className={classes.Connect}>
                                    <span className={classes.Green}></span>
                                    <label className={classes.available}>
                                        Hoạt động
                                    </label>
                                </div>
                            </td>

                            <td className={classes.DetailsDichVu}>
                                <Link to="/dichvudetail">Chi tiết</Link>
                            </td>
                            <td className={classes.UpdateDichVu}>
                                <Link to="/dichvuUpdate">Cập nhật</Link>
                            </td>
                        </tr>
                        <tr>
                        <td>KIO_01</td>
                            <td>Kiosk</td>
                            <td>Không Hoạt động</td>

                            <td>
                                <div className={classes.Connect}>
                                        <span className={classes.ConnectFail}></span>
                                        <label className={classes.BoxFail}>
                                            Ngưng hoạt động
                                        </label>
                                </div>
                            </td>

                            <td className={classes.DetailsDichVu}>
                                <Link to="/dichvudetail">Chi tiết</Link>
                            </td>
                            <td className={classes.UpdateDichVu}>
                                <Link to="/dichvuUpdate">Cập nhật</Link>
                            </td>
                        </tr>
                        <tr style={{ background: 'white' }}  >
                            <td>KIO_01</td>
                            <td>Kiosk</td>
                            <td>Hoạt động</td>

                            <td>
                                <div className={classes.Connect}>
                                    <span className={classes.Green}></span>
                                    <label className={classes.available}>
                                        Hoạt động
                                    </label>
                                </div>
                            </td>
                            
                            <td className={classes.DetailsDichVu}>
                                <Link to="/dichvudetail">Chi tiết</Link>
                            </td>
                            <td className={classes.UpdateDichVu}>
                                <Link to="/dichvuUpdate">Cập nhật</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>KIO_01</td>
                            <td>Kiosk</td>
                            <td>Hoạt động</td>

                            <td>
                                <div className={classes.Connect}>
                                    <span className={classes.Green}></span>
                                    <label className={classes.available}>
                                        Hoạt động
                                    </label>
                                </div>
                            </td>

                            <td className={classes.DetailsDichVu}>
                                <Link to="/dichvudetail">Chi tiết</Link>
                            </td>
                            <td className={classes.UpdateDichVu}>
                                <Link to="/dichvuUpdate">Cập nhật</Link>
                            </td>
                        </tr>
                        <tr style={{ background: 'white' }}  >
                            <td>KIO_01</td>
                            <td>Kiosk</td>
                            <td>Hoạt động</td>

                            <td>
                                <div className={classes.Connect}>
                                    <span className={classes.Green}></span>
                                    <label className={classes.available}>
                                        Hoạt động
                                    </label>
                                </div>
                            </td>

                            <td className={classes.DetailsDichVu}>
                                <Link to="/dichvudetail">Chi tiết</Link>
                            </td>
                            <td className={classes.UpdateDichVu}>
                                <Link to="/dichvuUpdate">Cập nhật</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>KIO_01</td>
                            <td>Kiosk</td>
                            <td>Không Hoạt động</td>

                            <td>
                                <div className={classes.Connect}>
                                        <span className={classes.ConnectFail}></span>
                                        <label className={classes.BoxFail}>
                                            Ngưng hoạt động
                                        </label>
                                </div>
                            </td>

                            <td className={classes.DetailsDichVu}>
                                <Link to="/dichvudetail">Chi tiết</Link>
                            </td>
                            <td className={classes.UpdateDichVu}>
                                <Link to="/dichvuUpdatet">Cập nhật</Link>
                            </td>
                        </tr >
                        <tr style={{ background: 'white' }}  >
                            <td>KIO_01</td>
                            <td>Kiosk</td>
                            <td>Hoạt động</td>

                            <td>
                                <div className={classes.Connect}>
                                    <span className={classes.Green}></span>
                                    <label className={classes.available}>
                                        Hoạt động
                                    </label>
                                </div>
                            </td>
                            
                            <td className={classes.DetailsDichVu}>
                                <Link to="/dichvudetail">Chi tiết</Link>
                            </td>
                            <td className={classes.UpdateDichVu}>
                                <Link to="/dichvuUpdate">Cập nhật</Link>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            <div className={classes.ThemDichVu}>
                <Link to='/themdichvu'>
                <img src={Vector}></img>Thêm dịch vụ</Link>
            </div>
            <div className={classes.PhanTrang}>
                <Pagination 
                        defaultCurrent={1} 
                        total={50} 
                ></Pagination>
            </div>
        </div>
    );
};
export default DichVu;

