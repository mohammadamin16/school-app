import React from 'react';

import './styles.css'
//import Component
import Table from '../../component/table/index';

function DashboardScreen(props) {
    return(
        <div className='dashboard_screen' >
            <p className='title' >
                Welcome {props.user.name}
            </p>

            <Table/>




        </div>
    )
}



export default DashboardScreen;
