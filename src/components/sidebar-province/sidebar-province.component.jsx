import React , { useState} from "react";
import { useLocation , useNavigate } from "react-router-dom";

import PROVICNE_DATA from '../../assets/data/province.data';

import './sidebar-province.style.scss';

const SidebarProvince = () => {
    const [province , setProvince] = useState('')
    const navigate = useNavigate();
    const location = useLocation().search;

    const handleChange = e => {
        e.preventDefault();
        setProvince(e.target.value);
        let url = new URLSearchParams(location);
        url.set('provinceName' , e.target.value);

        let newUrl = url.toString();

        navigate(process.env.PUBLIC_URL + '/travel?'+newUrl);
    }

    return(
        <div className="sidebar-widget">
            <div className="sidebar-search">
                <h4 className="sidebar-title">เลือกตามจังหวัด</h4>
                <div className="sidebar-province-list">
                    <select onChange={handleChange} name="province" value={province} >
                        <option value="">ทั้งหมด</option>
                        {
                            PROVICNE_DATA.map(({id , name_th , name_en}) => (
                                <option value={name_en} key={id}>{name_th}</option>
                            ))
                        }
                    </select>
                </div>
            </div>

        </div>
    )
}

export default SidebarProvince;