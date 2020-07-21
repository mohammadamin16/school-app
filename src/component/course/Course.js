import React, {Component} from 'react';
import './styles.css'
import { Link } from 'react-router-dom';


export default class Course extends Component{
    render(){
        console.log("URL:");
        console.log(this.props.poster);
        return(
            <div className='course'>
                <img
                    width={300}
                    height={300}
                    className='poster'
                    alt={'poster of course'}
                    src={'http://127.0.0.1:8000' + this.props.poster}/>

                <p className="course_title">{this.props.title}</p>

                <div className='btn_holder'>
                    <Link
                        to={'/'}
                        className='btn btn_left'>
                        {this.props.price} T
                    </Link>
                    <Link
                        to={'/detail'}
                        className='btn btn_right'>
                            Detail
                    </Link>
                </div>
            </div>
        )
    }
}