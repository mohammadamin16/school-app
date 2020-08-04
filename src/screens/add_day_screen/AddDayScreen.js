import React, {useState} from 'react';

import './styles.css'
import Table from "../../component/table";
import {Link} from "react-router-dom";
import { withRouter } from "react-router";
import {add_day, edit_day} from "../../api/api";
import Comments from "../../component/comments";


function AddDayScreen(props) {
    let init_values = [{}, {}, {}];
    for (let i=0; i < props.location.state.items.length; i++){
        init_values[i] = []
    }

    const [values , setValues] = useState(init_values);
    const readonly = Boolean(props.readonly)
    let btn;
    if (props.location.state.create){
        btn = (
                <div className='btn add_btn'
                    onClick={() => {
                        add_day(props.user.username, values, (response) => {
                            console.log(response['msg'])
                            alert(response['msg'])
                            props.history.push('/dashboard')
                        })
                    }}
                >
                    Submit
                </div>)
    }else{
        btn = (
            <div className='btn add_btn'
                onClick={() => {
                    edit_day(props.user.username,props.location.state.day_pk , values, (response) => {
                        console.log(response['msg'])
                        alert(response['msg'])
                        props.history.push('/dashboard')
                    })
                }}
            >
                Edit
            </div>
        );
    }


    return(
        <div className='add_day_screen' >
            <p className='title' >
                Add Day Screen <span className='label'>Today</span>
            </p>

                <Table
                    items={props.location.state.items}
                    create={props.location.state.create}
                    setValues={setValues}
                    readonly={readonly}
                />

            {btn}

                <Link to='/dashboard' className='btn back_btn'>
                    Back
                </Link>

                <Comments
                    student_user={props.location.state.student_username}
                    comments={props.location.state.comments}
                    day_pk={props.location.state.day_pk}
                    user={props.user}
                />


        </div>
    )
}


export default withRouter(AddDayScreen);
