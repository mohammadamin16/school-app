import React, {useState} from 'react';

import './styles.css'
import Table from "../../component/table";
import {Link} from "react-router-dom";
import { withRouter } from "react-router";
import {add_day, edit_day, get_date} from "../../api/api";
import Comments from "../../component/comments";

import {faEdit, faArrowAltCircleLeft, faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function AddDayScreen(props) {
    let init_values = [{}, {}, {}];
    for (let i=0; i < props.location.state.items.length; i++){
        init_values[i] = []
    }

    const [values , setValues] = useState(init_values);
    const readonly = Boolean(props.readonly)
    let btn;
    if (props.location.state.create && props.user.type !== 'T'){
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
                    <FontAwesomeIcon icon={faPaperPlane} />
                </div>)
    }else if(props.user.type !== 'T'){
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
                <FontAwesomeIcon icon={faEdit} />
            </div>
        );
    }else{
        btn=(<div />)
    }
    const [date, setDate] = useState(props.location.state.date)

    if(props.location.state.date === undefined){
        console.log('undefined')
        get_date((data) => {setDate(data)})
    }
    return(
        <div className='add_day_screen' >
            <p className='title' >
                Add Day Screen <span className='label'>{date}</span>
            </p>

                <Table
                    items={props.location.state.items}
                    create={props.location.state.create}
                    setValues={setValues}
                    readonly={readonly}
                />
            {btn}
                <div
                    className='btn back_btn'
                    onClick={() => {
                        props.history.goBack()
                    }}
                >

                    <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                </div>

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
