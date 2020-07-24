import React, {Component} from 'react';

import './App.css';

import {BrowserRouter, Route, Redirect} from 'react-router-dom';

import LoginScreen from './screens/login_screen'
import HomeScreen from './screens/home_screen'
import SignupScreen from './screens/signup_screen'
import DashboardScreen from './screens/dashboard_screen'
import AddDayScreen from "./screens/add_day_screen";

export default class App extends Component {
	 constructor(props){
                super(props);
                this.state = {
                        user:JSON.parse(localStorage.getItem('user')),
                };

        }

	login = (user) => {
		localStorage.setItem('user', JSON.stringify(user));
		this.setState({
            user:user,
		});
	};
	logout = () => {
		localStorage.removeItem('user');
		this.setState({user:null})
	};

	render() {
		return (
			<>
				<BrowserRouter>
					<Route exact path='/login' >
						{this.state.user ?
							<Redirect push to={'/dashboard'}/>
							:
							<LoginScreen set_user={this.login} />}
                    </Route>

					<Route exact path='/signup' component={SignupScreen}/>
					<Route exact path='/dashboard' >
						{!this.state.user ?
							<Redirect push to={'/login'}/>
							:
					<Route exact path='/dashboard' render=	{() => (
						<DashboardScreen
							user={this.state.user}
							logout={this.logout}
						/>
					)}/>
						}
                    </Route>
					<Route exact path='/add_day' component={AddDayScreen}/>


					<Route exact path='/' component={HomeScreen}/>


				</BrowserRouter>
			</>
		);
	}
}
