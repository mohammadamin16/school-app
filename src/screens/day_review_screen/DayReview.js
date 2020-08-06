import React, {useEffect, useState} from 'react';

import './styles.css'
import {Link} from "react-router-dom";
import { withRouter } from "react-router";
import List from "../../component/list";
import {get_days} from "../../api/api";
import words from "../../texts/words";
import {faArrowAltCircleLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function DayReview(props) {
    const [days, setDays] = useState([]);
    console.log(props.location.state)
    useEffect(() => {
        get_days(props.location.state.student.username, (response) => {
            console.log(response);
            let days = response['data'];
            setDays(days)

        })
    }, []);


    return(
        <div className='add_day_screen' >
            <p className='title'>
                {words['day_review_screen']}
             <span className='label'>
                    {props.location.state.student.name}
                </span>
            </p>
                <List
                    student_username={props.location.state.student.username}
                    data={days}
                />
                <Link to='/student_view' className='btn back_btn'>
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                </Link>
        </div>
    )
}


export default withRouter(DayReview);
