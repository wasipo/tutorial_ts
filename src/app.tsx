import React from 'react'
import ReactDOM from "react-dom";
import Header from './components/header'
import AddData from './functions/addData'

class App extends React.Component<{},{ listdata: { name: string; age: number; }[]; }> {
    render(){
        return (
            <div>
                <Header />
                {/* <AddData /> */}
            </div>
        );
    }
}

const elem = document.getElementById('output');
ReactDOM.render(<App/>, elem);