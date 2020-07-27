import React, {useState} from 'react';

import './styles.css'
import Table from "../../component/table";
import {Link} from "react-router-dom";
import { withRouter } from "react-router";
import {add_day} from "../../api/api";


function AddDayScreen(props) {
    let init_values = [{}, {}, {}];
    for (let i=0; i < props.location.state.items.length; i++){
        init_values[i] = []
    }

    const [values , setValues] = useState(init_values);

    return(
        <div className='add_day_screen' >
            <p className='title' >
                Add Day Screen <span className='label'>Today</span>
            </p>
                <Table
                    items={props.location.state.items}
                    create={props.location.state.create}
                    setValues={setValues}
                />

                <div className='btn add_btn'
                    onClick={() => {
                        add_day(props.user.username, values, (response) => {
                            console.log(response['msg'])
                        })
                    }}
                >
                    Submit
                </div>

                <Link to='/dashboard' className='btn back_btn'>
                    Back
                </Link>
        </div>
    )
}


export default withRouter(AddDayScreen);
