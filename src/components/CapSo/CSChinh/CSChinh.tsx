import React from 'react'
import { useState } from "react";
import MenuBar from '../../Pages/MenuBar/MenuBar'
import TopMenuBar from '../../Pages/TopBar/TopMenubar'
import classes from '../CSChinh/CSChinh.module.css'
import Add from '../../assets/img/AddTB.png'
import Vector from '../../assets/img/V.png'
import { Input } from 'antd';
import { Link } from 'react-router-dom';
import { Pagination } from 'antd';
import { DatePicker, } from 'antd';
import { CaretRightFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const CSChinh: React.FC =() => {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionChange = (event: { target: { value: any; }; }) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        navigate(selectedValue); 
      };

    const [choose1, setValue1] = useState('designation1');
    const handlechoose1Change = (e: any) => 
    {
        setValue1(e.target.value);
    };

    const [choose2, setValue2] = useState('designation2');
    const handleSelect2Change = (e: any) => 
    {
        setValue2(e.target.value);
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
        <div className={classes.Equi}>
            <div className={classes.Equiheader}>
                 <MenuBar></MenuBar>
                <TopMenuBar></TopMenuBar>
            </div>
           
            <div className={classes.BoxHeader}>
                <h1>Cấp số <img src={Vector}></img> 
                    <a href='/capsochinh'> Danh sách cấp số</a> 
                </h1>
                <h2>Quản lí cấp số</h2>
            </div>

           
            <div className={classes.Combobox}>
               
                <label>Tên dịch vụ</label>
                <select 
                    value={choose1} 
                    onChange={handlechoose1Change}>
                    <option value="1">Tất cả</option>
                    <option value="2">Khám sản - Phụ khoa</option>
                    <option value="3">Khám răng hàm mặt</option>
                    <option value="4">Khám tai mũi họng</option>
                </select>

            </div>

            
            <div className={classes.Combobox2}>
                <label>Tình trạng</label>
                <select 
                    value={selectedOption} 
                    onChange={handleOptionChange}>
                    <option value="/capsochinh">Tất cả</option>
                    <option value="/capsodangcho">Đang chờ</option>
                    <option value="/capsodasudung">Đã sử dụng</option>
                    <option value="/capsoboqua">Bỏ qua</option>
                </select>

            </div>

            <div className={classes.Combobox3}>
                <label>Nguồn cấp</label>
                <select 
                    value={choose2} 
                    onChange={handleSelect2Change}>
                    <option value="9">Tất cả</option>
                    <option value="10">Kiosk</option>
                    <option value="11">Hệ thống</option>
                    
                </select>

            </div>
            {/* lịch */}
            <div className={classes.DateBegin}>
                <p>Chọn thời gian</p>
                <DatePicker  
                    onChange={onChange} 
                    style={{top: -659, 
                            left: 795, 
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
                    style={{top: -702, 
                            left: 1000, 
                            height: 44 
                        }}
                    ></DatePicker> 
            </div>

            {/* thanh tim kiem */}
            <div className={classes.MenuSearch}>
                <label>Từ khoá</label>
                <Search 
                    placeholder="Nhập từ khoá" 
                    allowClear onSearch={onSearch}>
                    </Search>
            </div>

            {/* bảng số liệu */}
                <div className={classes.ListThietBi}>
                    <table style={{ width: '1359px' }} >
                        <thead  >
                            <tr   >
                                {/* tựa đề bảng */}
                                <th style={{ fontSize: '18px',paddingLeft:'20px' }} >STT</th>
                                <th style={{ width: '190px',fontSize: '18px',paddingLeft:'20px'  }} >Tên khách hàng</th>
                                <th style={{ fontSize: '18px',paddingLeft:'20px'  }} >Tên dịch vụ</th>
                                <th style={{ width: '188px', fontSize: '18px',paddingLeft:'20px'  }} >
                                    Thời gian cấp 
                                </th>
                                <th style={{ width: '154px', fontSize: '18px',paddingLeft:'20px'  }} >
                                    Hạn sử dụng
                                </th>
                                <th style={{ fontSize: '18px',paddingLeft:'20px'  }}>Trạng thái</th>
                                <th style={{ textAlign: 'center'  }} >Nguồn cấp</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ background: 'white' }} >
                                <td style={{ textAlign:'center', width: '8%' }} >2010001</td>

                                <td>Lê Huỳnh Ái Vân</td>

                                <td>Khám tim mạch</td>
                                
                                <td className={classes.conditionA}>
                                    {/* <span className={classes.ConnectFail}></span> */}
                                    <label className={classes.BoxFail}>
                                        14:35 - 07/11/2021
                                    </label>
                                </td>
                                <td>
                                    <div className={classes.conditionB}>
                                        {/* <span className={classes.ConnectFalse}></span> */}
                                        <label className={classes.BoxFalse}>
                                            14:35 - 12/11/2021
                                        </label>
                                    </div>
                                </td>
                                <td>
                                    <div className={classes.Connect}>
                                        <span className={classes.Green}></span>
                                        <label className={classes.available}>
                                            Đang chờ
                                        </label>
                                    </div>
                                                                                                          
                                </td>
                                <td  className={classes.link}>
                                   
                                    <p className={classes.Text3}>
                                        Kiosk
                                    </p>
                                </td>

                                <td className={classes.Update}>
                                    <Link to="/CapSoChiTiet">Chi tiết</Link>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ textAlign:'center', width: '8%' }}  >2010002</td>

                                <td>Huỳnh Ái Vân</td>

                                <td style={{ width: '15%' }}  >Khám sản - Phụ Khoa</td>

                                <td className={classes.conditionA}>

                                    {/* <span className={classes.ConnectRight}></span> */}
                                    <p className={classes.BoxRight}>
                                        14:35 - 07/11/2021
                                    </p>
                                </td>
                                <td>
                                    <div className={classes.conditionB}>
                                        {/* <span className={classes.ConnectRight}></span> */}
                                        <label style={{ marginLeft: '2%' }}   className={classes.BoxRight}>
                                            14:35 - 12/11/2021
                                        </label>
                                    </div>
                                </td>
                                <td>
                                    <div className={classes.Connect}>
                                        <span className={classes.Gray}></span>
                                        <label className={classes.available}>
                                            Đã sử dụng
                                        </label>
                                    </div>
                                    {/* <p className={classes.Text2}>
                                        Khám tim mạch, Khám mắt.........
                                    </p> */}
                                    {/* <div className={classes.More}>
                                        <Link to="/ChiTietTB">Xem thêm</Link>
                                    </div> */}
                                </td>
                                <td className={classes.link}>
                                    {/* <Link  to="/ChiTietTB">Chi tiết</Link> */}
                                    <p className={classes.Text3}>
                                        Kiosk
                                    </p>
                                </td>

                                <td className={classes.Update}>
                                <Link to="/CapSoChiTiet">Chi tiết</Link>
                                </td>
                            </tr>
                            <tr style={{ background: 'white' }} >
                                <td style={{ textAlign:'center', width: '8%' }}  >2010003</td>

                                <td>Lê Ái Vân</td>

                                <td>Khám răng hàm mặt</td>

                                <td className={classes.conditionA}>
                                    <p className={classes.BoxRight}>
                                        14:35 - 07/11/2021
                                    </p>
                                </td>
                                <td>
                                <div className={classes.conditionB}>
                                        <label style={{ marginLeft: '2%' }}   className={classes.BoxRight}>
                                            14:35 - 12/11/2021
                                        </label>
                                    </div>
                                </td>
                                <td>
                                    <div className={classes.Connect}>
                                            <span className={classes.Green}></span>
                                            <label className={classes.available}>
                                                Đang chờ
                                            </label>
                                    </div>
                                    
                                </td>
                                <td className={classes.link}>
                                    <p  style={{ width: '70px', marginLeft: '-25px' }}  className={classes.Text3}>
                                        Hệ Thống
                                    </p>
                                </td>

                                <td className={classes.Update}>
                                <Link to="/CapSoChiTiet">Chi tiết</Link>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ textAlign:'center', width: '8%' }}  >2010004</td>

                                <td>Nguyễn Ái Vân</td>

                                <td>Khám tai mũi họng</td>
                                <td className={classes.conditionA}>
                                    {/* <span className={classes.ConnectFail}></span> */}

                                    <label className={classes.BoxFail}>
                                        14:35 - 07/11/2021
                                    </label>
                                </td>
                                <td>
                                    <div className={classes.conditionB}>
                                        {/* <span className={classes.ConnectFalse}></span> */}
                                        <label className={classes.BoxFalse}>
                                        14:35 - 12/11/2021
                                        </label>
                                    </div>
                                </td>
                                <td>
                                    <div className={classes.Connect}>
                                        <span className={classes.Green}></span>
                                        <label className={classes.available}>
                                            Đang chờ
                                        </label>
                                    </div>
                                    {/* <p className={classes.Text2}>
                                        Khám tim mạch, Khám mắt......
                                    </p> */}

                                    {/* <div className={classes.More}>
                                        <Link to="/ChiTietTB">Xem thêm</Link>
                                    </div> */}
                                </td>
                                <td className={classes.link}>
                                    {/* <Link   to="/ChiTietTB">Chi tiết</Link> */}
                                    <p style={{ width: '70px', marginLeft: '-25px' }}  className={classes.Text3}>
                                        Hệ Thống
                                    </p>
                                </td>

                                <td className={classes.Update}>
                                <Link to="/CapSoChiTiet">Chi tiết</Link>
                                </td>
                            </tr>
                            <tr style={{ background: 'white' }} >
                                <td style={{ textAlign:'center', width: '8%' }}  >2010005</td>

                                <td>Trần Thị Ái Vân</td>

                                <td>Khám hô hấp</td>

                                <td className={classes.conditionA}>
                                    {/* <span className={classes.ConnectFail}></span> */}

                                    <label className={classes.BoxFail}>
                                        14:35 - 07/11/2021
                                    </label>
                                </td>
                                <td>
                                    <div className={classes.conditionB}>
                                        {/* <span className={classes.ConnectFalse}></span> */}

                                        <label className={classes.BoxFalse}>
                                        14:35 - 12/11/2021
                                        </label>
                                    </div>
                                </td>
                                <td>
                                    <div className={classes.Connect}>
                                        <span className={classes.Green}></span>
                                        <label className={classes.available}>
                                            Đang chờ
                                        </label>
                                    </div>
                                    {/* <p className={classes.Text2}>
                                        Khám tim mạch, Khám mắt........
                                    </p> */}

                                    {/* <div className={classes.More}>
                                        <Link to="/ChiTietTB">Xem thêm</Link>
                                    </div> */}
                                </td>
                                <td className={classes.link}>
                                    {/* <Link   to="/ChiTietTB">Chi tiết</Link> */}
                                    <p className={classes.Text3}>
                                        Kiosk
                                    </p>
                                </td>

                                <td className={classes.Update}>
                                <Link to="/CapSoChiTiet">Chi tiết</Link>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ textAlign:'center', width: '8%' }}  >2010006</td>

                                <td>Lê Huỳnh Nghĩa</td>

                                <td>Khám tổng quát</td>
                                <td className={classes.conditionA}>
                                    {/* <span className={classes.ConnectFail}></span> */}

                                    <label className={classes.BoxFail}>
                                        14:35 - 07/11/2021
                                    </label>
                                </td>
                                <td>
                                    <div className={classes.conditionB}>
                                        {/* <span className={classes.ConnectFalse}></span> */}

                                        <label className={classes.BoxFalse}>
                                        14:35 - 12/11/2021
                                        </label>
                                    </div>
                                </td>
                                <td>
                                <div className={classes.Connect}>
                                        <span className={classes.Gray}></span>
                                        <label className={classes.available}>
                                            Đã sử dụng
                                        </label>
                                    </div>
                                    {/* <p className={classes.Text2}>
                                        Khám tim mạch, Khám mắt........
                                    </p> */}

                                    {/* <div className={classes.More}>
                                        <Link to="/ChiTietTB">Xem thêm</Link>
                                    </div> */}
                                </td>
                                <td className={classes.link}>
                                    {/* <Link  to="/ChiTietTB">Chi tiết</Link> */}
                                    <p style={{ width: '70px', marginLeft: '-25px' }}  className={classes.Text3}>
                                        Hệ Thống
                                    </p>
                                </td>

                                <td className={classes.Update}>
                                <Link to="/CapSoChiTiet">Chi tiết</Link>
                                </td>
                            </tr>
                            <tr style={{ background: 'white' }} >
                                <td style={{ textAlign:'center', width: '8%' }}  >2010007</td>

                                <td>Lê Huỳnh Đức</td>

                                <td>Khám tai mũi họng</td>

                                <td className={classes.conditionA}>
                                    {/* <span className={classes.ConnectFail}></span> */}
                                    <label className={classes.BoxFail}>
                                        14:35 - 07/11/2021
                                    </label>
                                </td>
                                <td>
                                    <div className={classes.conditionB}>
                                        {/* <span className={classes.ConnectFalse}></span> */}
                                        <label className={classes.BoxFalse}>
                                        14:35 - 12/11/2021
                                        </label>
                                    </div>
                                </td>
                                <td>
                                <div className={classes.Connect}>
                                        <span className={classes.Gray}></span>
                                        <label className={classes.available}>
                                            Đã sử dụng
                                        </label>
                                    </div>
                                    {/* <p className={classes.Text2}>
                                        Khám tim mạch, Khám mắt......
                                    </p> */}
                                    {/* <div className={classes.More}>
                                        <Link to="/ChiTietTB">Xem thêm</Link>
                                    </div> */}
                                </td>
                                <td className={classes.link}>
                                    {/* <Link   to="/ChiTietTB">Chi tiết</Link> */}
                                    <p className={classes.Text3}>
                                        Kiosk
                                    </p>
                                </td>
                                <td className={classes.Update}>
                                <Link to="/CapSoChiTiet">Chi tiết</Link>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ textAlign:'center', width: '8%' }}  >2010008</td>

                                <td>Phạm Văn Mạnh</td>

                                <td>Khám tổng quát</td>

                                <td className={classes.conditionA}>
                                    {/* <span className={classes.ConnectFail}></span> */}
                                    <label className={classes.BoxFail}>
                                    14:35 - 07/11/2021
                                    </label>
                                </td>
                                <td>
                                    <div className={classes.conditionB}>
                                        {/* <span className={classes.ConnectFalse}></span> */}
                                        <label className={classes.BoxFalse}>
                                        14:35 - 12/11/2021
                                        </label>
                                    </div>
                                </td>
                                <td>
                                <div className={classes.Connect}>
                                        <span className={classes.red}></span>
                                        <label className={classes.available}>
                                            Đã sử dụng
                                        </label>
                                    </div>
                                    {/* <p className={classes.Text2}>
                                        Khám tim mạch, Khám mắt......
                                    </p> */}
                                    {/* <div className={classes.More}>
                                        <Link to="/ChiTietTB">Xem thêm</Link>
                                    </div> */}
                                </td>
                                <td className={classes.link}>
                                    {/* <Link   to="/ChiTietTB">Chi tiết</Link> */}
                                    <p style={{ width: '70px', marginLeft: '-25px' }}  className={classes.Text3}>
                                        Hệ Thống
                                    </p>
                                </td>
                                <td className={classes.Update}>
                                <Link to="/CapSoChiTiet">Chi tiết</Link>
                                </td>
                            </tr>
                            <tr style={{ background: 'white' }} >
                                <td style={{ textAlign:'center', width: '8%' }}  >2010009</td>

                                <td>Lê Thị Cẩm Tiên</td>

                                <td>Khám tai mũi họng</td>

                                <td className={classes.conditionA}>
                                    {/* <span className={classes.ConnectFail}></span> */}
                                    <label className={classes.BoxFail}>
                                    14:35 - 07/11/2021
                                    </label>
                                </td>
                                <td>
                                    <div className={classes.conditionB}>
                                        {/* <span className={classes.ConnectFalse}></span> */}
                                        <label className={classes.BoxFalse}>
                                        14:35 - 12/11/2021
                                        </label>
                                    </div>
                                </td>
                                <td>
                                <div className={classes.Connect}>
                                        <span className={classes.Gray}></span>
                                        <label className={classes.available}>
                                            Đã sử dụng
                                        </label>
                                    </div>
                                    {/* <p className={classes.Text2}>
                                        Khám tim mạch, Khám mắt......
                                    </p> */}
                                    {/* <div className={classes.More}>
                                        <Link to="/ChiTietTB">Xem thêm</Link>
                                    </div> */}
                                </td>
                                <td className={classes.link}>
                                    {/* <Link   to="/ChiTietTB">Chi tiết</Link> */}
                                    <p style={{ width: '70px', marginLeft: '-25px' }}  className={classes.Text3}>
                                        Hệ thống
                                    </p>
                                </td>
                                <td className={classes.Update}>
                                <Link to="/CapSoChiTiet">Chi tiết</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                        <div className={classes.ThemTB}>
                            <Link to='/CapSoMoi'><img src={Add} />
                                Cấp số mới
                            </Link>
                        </div>
                        <div className={classes.PhantrangThietBi}>
                            <Pagination defaultCurrent={1} 
                                total={50}></Pagination>
                        </div>
        </div>
    );
};
export default CSChinh;
