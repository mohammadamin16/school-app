import React, {Component} from 'react';

import './App.css';

import {BrowserRouter, Route, Redirect} from 'react-router-dom';

import LoginScreen from './screens/login_screen'
import HomeScreen from './screens/home_screen'
import SignupScreen from './screens/signup_screen'
import DashboardScreen from './screens/dashboard_screen'
import AddDayScreen from "./screens/add_day_screen";
import Header from "./component/header";
import StudentViewScreen from "./screens/students_view_screen";
import DayReview from "./screens/day_review_screen/DayReview";

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
					<Header
						user={this.state.user}
						logout={this.logout}
					/>
					<Route exact path='/login' >
						{this.state.user ?
							<Redirect push to={'/'}/>
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
						/>
					)}/>
						}

                    </Route>

					<Route exact path='/student_view' >
						{!this.state.user ?
							<Redirect push to={'/login'}/>
							:
					<Route exact path='/student_view' render=	{() => (
						<StudentViewScreen
							user={this.state.user}
						/>
					)}/>
						}
                    </Route>

					<Route exact path='/add_day' render={() => (
						<AddDayScreen
							user={this.state.user}
						/>
					)}/>


					<Route exact path='/day_review' render={() => (
						<DayReview
							user={this.state.user}
						/>
					)}/>

					<Route exact path='/' render={() => {
						try {
							if (this.state.user.type === 'S'){
								return (<Redirect to={'/dashboard'} />)
							}else{
								return (<Redirect to={'/student_view'} />)
							}
						}catch (e){
								return (<Redirect to={'/login'} />)
						}
					}}/>


				</BrowserRouter>
			</>
		);
	}
}
