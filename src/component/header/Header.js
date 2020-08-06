import React, {useEffect} from 'react';
import './styles.css'
import {Link} from "react-router-dom";
import words from '../../texts/words'
import logo from '../../images/logo192.png'

export default function Header(props) {
    let auth;
    if (props.user == null){
        auth = (
            <div>
                <Link className='btn login_btn'
                    to={'/login'}>
                    {words['login']}
                </Link>
                <Link className='btn signup_btn'
                    to={'/signup'}>
                    {words['signup']}
                </Link>
            </div>
        )
    }else{
        auth=(

            <div className='header_row'>
                <Link className='btn logout_btn'
                    onClick={() => {props.logout()}}
                    to={'/login'}>
                    {words['logout']}
                </Link>
                <p className='white_padding'>{props.user.name}</p>
            </div>
        )
    }
    return (
        <div className='header'>
            {auth}
            <Link
                to='/'
                className='logo school'>
                {words['logo']}
                <img
                    className='icon'
                    src={logo}
                />
            </Link>
        </div>
    )
}