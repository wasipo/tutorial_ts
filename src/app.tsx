import React from 'react'
import ReactDOM from "react-dom";


class App extends React.Component<{},{ listdata: { name: string; age: number; }[]; }> {

    constructor(props: {} | Readonly<{}> ) {
        super(props);
        this.state = {
            listdata: [
                { name: 'haaa',age: 14},
                { name: 'haawa',age: 18}
            ]
        };
        this.renderRows = this.renderRows.bind(this)
        this.addDatas = this.addDatas.bind(this)

    }
    addDatas() {

        const newEntry = {name: 'kenta', age: 65}
        const listdata = [
            ...this.state.listdata,
            newEntry
        ]
        this.setState({listdata});
    }

    renderRows() {
        const {listdata} = this.state;
        let result:any[] = [];
        listdata.map(entry =>{
            result.push(
                <div>
                    <div><span>{entry.name}</span><span>{entry.age}</span></div>
                </div>
            );
        });
        return result;
    }
    render(){
        return (
            <div>
                <div>
                    {this.renderRows()}
                </div>
                <button onClick={this.addDatas}>データ追加</button>
            </div>
        );
    }
}

const elem = document.getElementById('output');
ReactDOM.render(<App/>, elem);