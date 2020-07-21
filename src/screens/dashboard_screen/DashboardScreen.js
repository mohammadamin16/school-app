import React, {Component} from 'react';

import './styles.css'

class DashboardScreen extends Component{

    render() {
        return(
            <div className='home_screen'>
                <p className='title'>Welcome {this.props.user.name}</p>
                <p onClick={() => {
                    this.props.logout()

                }}>Logout</p>

            </div>
        )
    }
}



export default DashboardScreen;
