import React, {useEffect} from 'react';
import './styles.css'
import {Link} from "react-router-dom";
import words from '../../texts/words'
import logo from '../../images/logo.png'

export default function Header(props) {
    return(
        <div className='header'>
            <div className='row auth_part'>
                <p className='header_btn clickable'>Signup</p>
                <p className='header_btn clickable'>Login</p>
            </div>
            <div className='row logo_part'>
                <p className='logo_text clickable'>Daftarchak</p>
                <img className='logo clickable' src={logo} />
            </div>

        </div>
    )
}
