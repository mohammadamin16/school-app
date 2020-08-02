import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

import './styles.css'

import StudentList from "../../component/student_list";
import {get_students} from "../../api/api";

function StudentViewScreen(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        get_students(props.user.username, (data) =>  {
            if (typeof data['data'] == 'undefined'){
                setData([]);
            }else{
                setData(data['data']);
            }
        })
    }, []);

    return(
        <div className='dashboard_screen' >
            <p className='title'>
                StudentViewScreen
            </p>

            <StudentList
                students={data}
            />

        </div>
    )
}



export default StudentViewScreen;
