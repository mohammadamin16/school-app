import React from 'react';
import './styles.css'
import {Link} from "react-router-dom";
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function List(props) {
    const data = props.data || [];
    let rows = [];
    for (let i=0; i < data.length; i++){
        rows.push(
            <tr className='row' key={props.data[i]['date']}>
                <td className='cell clickable cell-1'>
                    <Link
                        className=''
                        to={{
                            pathname: "/add_day",
                            state: {
                                student_username:props.student_username,
                                items: props.data[i]['items'],
                                day_pk: props.data[i]['pk'],
                                date: props.data[i]['date'],
                                comments: props.data[i]['comments'],
                                readonly:true,
                            }
                        }}
                    >{props.data[i]['date']}</Link>
                </td>
                <td className='cell cell-2'>
                    <p id='total_time'>{props.data[i]['total_time'] + "'"}</p>
                </td>
            </tr>
        )
    }

    return (
        <table className='list'>
            <thead>
                <tr className='row' >
                    <th className='cell cell-1 header-cell'>
                        <FontAwesomeIcon icon={faCalendarAlt} />

                    </th>
                    <th className='cell cell-2 header-cell'>
                        <FontAwesomeIcon icon={faClock} />
                    </th>
                </tr>
            </thead>
            <tbody>
            {rows}
            </tbody>
        </table>
    )
}