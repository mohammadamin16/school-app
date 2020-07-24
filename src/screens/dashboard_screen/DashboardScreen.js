import React, {useEffect, useState} from 'react';

import './styles.css'
//import Component
import List from '../../component/list/index';
import {Link} from "react-router-dom";
import {get_days} from "../../api/api";

function DashboardScreen(props) {
    const [data, setData] = useState([]);
    useEffect(() => {
        get_days(props.user.username, (data) => {
            console.log(data['data']);
            setData(data['data']);
        });
    }, []);
    return(
        <div className='dashboard_screen' >
            <p className='title' >
                DashBoard<span className='label'>{props.user.username}</span>
            </p>

            <List
                data={data}
            />

            <Link to='/add_day' className='btn add_btn'>
                Add
            </Link>


        </div>
    )
}



export default DashboardScreen;
