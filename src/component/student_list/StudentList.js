import React from 'react';
import './styles.css'
import {Link} from "react-router-dom";
import Student from "../student";

export default function StudentList(props) {

    return (
        <div className='student_list'>
            {props.students.map((student) => (
                <Student
                    item={student}
                />
            ))}
        </div>
    )
}