import React from 'react';
import './styles.css'
import {Link} from "react-router-dom";

export default function Student(props) {
    return (
        <Link
             to={{
                pathname: "/day_review",
                state: { username:props.item.username }
                }}
            className='student clickable'>
            <p>{props.item.name}</p>
        </Link>
    )
}