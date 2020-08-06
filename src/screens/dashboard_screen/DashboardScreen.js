import React, {useEffect, useState} from 'react';

import './styles.css'
//import Component
import List from '../../component/list/index';
import {Link} from "react-router-dom";
import {get_days} from "../../api/api";
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import {faCalendarPlus} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import words from "../../texts/words";

function DashboardScreen(props) {
    const [data, setData] = useState([]);
    useEffect(() => {
        get_days(props.user.username, (data) => {
            if (typeof data['data'] == 'undefined'){
                setData([]);
            }else{
                setData(data['data']);
            }
        });
    }, []);
    return(
        <div className='dashboard_screen' >
            <p className='title'>
                {words['dashboard_screen']}

            </p>

            <List
                user={props.user}
                // student_username={props.location.state.username}

                data={data}
            />

            <Link to={{
                pathname: "/add_day",
                state: { create:true, items:[{}, {}, {}] }
                }}
                  className='btn add_btn'>
                    <FontAwesomeIcon icon={faCalendarPlus} />

            </Link>
        </div>
    )
}



export default DashboardScreen;
