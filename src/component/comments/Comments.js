import React, {useEffect, useState} from 'react';
import './styles.css'
import {add_comment, get_comment} from "../../api/api";

export default function Comments(props) {
    const [comment, setComment] = useState({user:'', date:'', text:''})
    const [text, setText] = useState('')
    useEffect(() => {
        get_comment(props.day_pk, (data) => {
            console.log(data['success'])
            if (data['success']){
                console.log(data)
                setComment(data['data'])
            }
        })
    }, [])
    if (comment.text == '' && props.user.type == "S"){
        return (<p>No Comments yet</p>)
    }


    return(
        <div className='comments'>
            <div className='comment_row'>
                <div className='user_avatar'>{comment.user.username}</div>
                <input
                    placeholder='insert your comment'
                    className='comment_body input_comment'
                    defaultValue={comment.text}
                    onChange={(event) => {setText(event.target.value)}}
                />
                <div
                    className='user_avatar clickable'
                    onClick={() => {
                        add_comment(props.user.username, props.student_username, text, props.day_pk, (data) => {
                            console.log(data)
                            alert(data['msg'])
                        })
                    }}
                >Send</div>
            </div>
        </div>
    )
}