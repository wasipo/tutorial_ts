import React from 'react'
import ReactDOM from "react-dom";
import Header from './components/header'
import AddData from './functions/addData'
import { BrowserRouter as Router, Route,Switch,MemoryRouter } from 'react-router-dom';
import ReserveSetting from './ReserveSetting';


class App extends React.Component<{},{ listdata: { name: string; age: number; }[]; }> {
    render(){
        return (
            <MemoryRouter>
            <div>
                <Header />
                <Route path='/ReserveSetting' component={ReserveSetting}/>
            </div>
            </MemoryRouter>
        );
    }
}

const elem = document.getElementById('output');
ReactDOM.render(<App/>, elem);