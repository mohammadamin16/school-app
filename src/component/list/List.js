import React from 'react';
import './styles.css'
import {Link} from "react-router-dom";

export default function List(props) {

    let rows = [];
    for (let i=0; i < props.data.length; i++){
        rows.push(
            <tr className='row' key={props.data[i]['date']}>
                <td className='cell light-hover col1 date-cell'>
                    <Link
                        to={{
                            pathname: "/add_day",
                            param1:'param!',
                            state: { items: props.data[i]['items'] }
                        }}
                        className='cell-input'
                    >
                        {props.data[i]['date']}
                    </Link>
                    </td>
                <td className='cell light-hover col1'>
                    <div
                        className='cell-input'
                        placeholder={'Desc. about study'}
                    >
                        {props.data[i]['total_time'] + "'"}
                    </div>
                </td>
            </tr>
        )
    }

    return (
        <table className='table'>
            <thead>
                <tr className='row' >
                    <th className='cell header'>Date</th>
                    <th className='cell header'>Time</th>
                </tr>
            </thead>
            <tbody>
            {rows}
            </tbody>
        </table>
    )
}