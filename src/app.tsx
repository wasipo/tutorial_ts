import React from 'react'
import ReactDOM from "react-dom";
// import {Item} from './item';
// import $ from 'jquery';


class App extends React.Component {

    render(){
        return (
            <h1>Welcome!</h1>
            );
    }
}

const elem = document.getElementById('output');
ReactDOM.render(<App/>, elem);