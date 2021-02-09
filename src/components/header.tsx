import React from "react";
import Nav from "./../parts/nav";
import ReserveSetting from './../ReserveSetting';
import Home from './../home';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';


export default class Header extends React.Component {

    render() {

        return (
            <Router>
                <header>
                    <Nav />
                    <Route exact path='/' component={Home}/>
                    <Route path='/ReserveSetting' component={ReserveSetting}/>
                </header>
            </Router>
        );


    }


}
