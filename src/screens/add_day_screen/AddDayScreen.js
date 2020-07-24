import React from 'react';

import './styles.css'
import Table from "../../component/table";
import {Link} from "react-router-dom";
//import Component

function AddDayScreen(props) {
    return(
        <div className='add_day_screen' >
            <p className='title' >
                Add Day Screen <span className='label'>Today</span>
            </p>

            <div className='add_day_form'>
                <Table
                    items={props.location.state.items}
                />

                <div className='btn add_btn'>
                    Submit
                </div>
                <Link to='/dashboard' className='btn back_btn'>
                    Back
                </Link>

            </div>

        </div>
    )
}


export default AddDayScreen;
