import React, {Component} from 'react';

import './styles.css'
import {get_teachers, signup} from '../../api/api'
import words from "../../texts/words";
import Student from "../../component/student";
import Teacher from "../../component/teacher";

class SignupScreen extends Component{
    state={
        name:'',
        username:'',
        password:'',
        teachers:[]
    };
    componentDidMount() {
        get_teachers((response) => {
            console.log(response['data'])
            this.setState({teachers:response['data']})
        })
    }

    on_click = (json) => {
        if (json['success']) {
            console.log(json['data']);
            alert(json['msg'])
        } else{
            alert(json['msg'])
        }
    };
    input_change = (input, type) => {
        switch (type) {
            case 'name':
                this.setState({name:input});
                break;
            case 'username':
                this.setState({username:input});
                break;
            case 'password':
                this.setState({password:input});
                break;
            default:
                break;
        }
    };
    render() {
        return(
            <div className={'login_screen'}>
                <p className={'title'}>{words['signup_screen']}</p>

                <div className='login_form'>
                    <input
                        className='input'
                            placeholder={words['full_name']}
                        onChange={(input) => {this.input_change(input.target.value, 'name')}}
                    />
                    <input
                        className='input'
                        placeholder={words['username']}
                        onChange={(input) => {this.input_change(input.target.value, 'username')}}
                    />
                    <input
                        className='input'
                        placeholder={words['password']}
                        type='password'
                        onChange={(input) => {this.input_change(input.target.value, 'password')}}
                    />


                    <div
                        className='submit_btn'
                        onClick={() => {
                            signup(this.state.name, this.state.username, this.state.password, this.on_click)
                        }}>
                        {words['signup']}
                    </div>

                </div>
            </div>
        )
    }
}



export default SignupScreen;
