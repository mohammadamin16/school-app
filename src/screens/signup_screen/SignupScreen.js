import React, {Component} from 'react';

import './styles.css'
import { signup } from '../../api/api'

class SignupScreen extends Component{
    state={
        name:'',
        username:'',
        password:'',
    };
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
                <p className={'title'}>SignupScreen</p>

                <div className='form'>
                    <input
                        className='input'
                        placeholder='full name'
                        onChange={(input) => {this.input_change(input.target.value, 'name')}}
                    />
                    <input
                        className='input'
                        placeholder='username'
                        onChange={(input) => {this.input_change(input.target.value, 'username')}}
                    />
                    <input
                        className='input'
                        placeholder='password'
                        type='password'
                        onChange={(input) => {this.input_change(input.target.value, 'password')}}
                    />

                    <div
                        className='submit_btn'
                        onClick={() => {
                            signup(this.state.name, this.state.username, this.state.password, this.on_click)
                        }}>
                        <p>SignUp</p>
                    </div>
                </div>
            </div>
        )
    }
}



export default SignupScreen;
