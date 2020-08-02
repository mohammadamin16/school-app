import React, {useEffect, useState} from 'react';

import './styles.css'
import {Link} from "react-router-dom";
import { withRouter } from "react-router";
import List from "../../component/list";
import {get_days} from "../../api/api";


function DayReview(props) {
    const [days, setDays] = useState([]);
    console.log('DayReview: ' + props.location.state.username);

    useEffect(() => {
        get_days(props.location.state.username, (response) => {
            console.log(response);
            let days = response['data'];
            setDays(days)

        })
    }, []);


    return(
        <div className='add_day_screen' >
            <p className='title'>Day Review Screen</p>
                <List
                    student_username={props.location.state.username}
                    data={days}
                />
                <Link to='/student_view' className='btn back_btn'>
                    Back
                </Link>
        </div>
    )
}


export default withRouter(DayReview);
