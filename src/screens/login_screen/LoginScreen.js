import React, {Component} from 'react';

import './styles.css'
import { login } from '../../api/api'

class LoginScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    on_click = (json) => {
        if (json['success']) {
            this.props.set_user(json['data']['user']);

            } else{
            alert(json['msg'])
        }
    };
    input_change = (input, type) => {
        switch (type) {
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
                <p className={'title'}>LoginScreen</p>

                <div className='form'>
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
                            tabIndex={0}
                            onClick={() => {
                                login(this.state.username, this.state.password, this.on_click)
                            }}>
                            <p>Login</p>
                        </div>
                </div>
            </div>
        )
    }
}



export default LoginScreen;
