import React, {Component} from 'react';

import './App.css';

import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import Header from "./component/header";
import Footer from "./component/Footer";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: JSON.parse(localStorage.getItem('user')),
        };
    }

    login = (user) => {
        localStorage.setItem('user', JSON.stringify(user));
        this.setState({
            user: user,
        });
    };
    logout = () => {
        localStorage.removeItem('user');
        this.setState({user: null})
    };

    render() {
        return (
            <BrowserRouter>
                <Header />
                {/*<Route exact path='/login' >*/}
                {/*	{this.state.user ?*/}
                {/*		<Redirect push to={'/'}/>*/}
                {/*		:*/}
                {/*		<LoginScreen set_user={this.login} />}*/}
                {/*</Route>*/}

                <Footer />
            </BrowserRouter>

        );
    }
}
