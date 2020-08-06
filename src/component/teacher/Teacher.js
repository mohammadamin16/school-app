import React from 'react';
import './styles.css'
import {Link} from "react-router-dom";

export default function Teacher(props) {

    return (
        <div className='teacher'>
            <p>{props.teacher.name}</p>
        </div>
    )
}