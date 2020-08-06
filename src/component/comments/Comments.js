import React, {useEffect, useState} from 'react';
import './styles.css'
import {add_comment, get_comment} from "../../api/api";
import words from "../../texts/words";

export default function Comments(props) {
    const [comment, setComment] = useState({user:'', date:'', text:''})
    const [text, setText] = useState('')
    useEffect(() => {
        get_comment(props.day_pk, (data) => {
            if (data['success']){
                setComment(data['data'])
            }
        })
    }, [])
    if (comment.text == '' && props.user.type == "S"){
        return (<p>{words['no_comments']}</p>)
    }
    let disable, send_btn;
    if (props.user.type == 'S'){
        disable=true;
        send_btn=(<div />);
    }else{
        disable=false
        send_btn=(
            <div
                className='user_avatar clickable send_btn'
                    onClick={() => {
                        add_comment(props.user.username, props.student_username, text, props.day_pk, (data) => {
                        console.log(data)
                        alert(data['msg'])
                    })
                }}
        >Send</div>
    );
    }

    return(
        <div className='comments'>
            <div className='comment_row'>
                <div className='user_avatar'>{comment.user.name}</div>
                <input
                    placeholder='insert your comment'
                    className='comment_body input_comment'
                    disabled={disable}
                    defaultValue={comment.text}
                    onChange={(event) => {setText(event.target.value)}}
                />
                {send_btn}

            </div>
        </div>
    )
}