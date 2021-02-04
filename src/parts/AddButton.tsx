import React from 'React';
import Create from 'create-react-class';
import $ from 'jQuery';


export default class addButton extends React.Component {
    appendInput(): void {
        $("#a").append('<div><input type="text" /></div>')
    }

    deleteInput(): void {
        $("#a").find('div').remove();
    }

    render() {
        return (
        <div id="a">
            <button onClick={()=>this.appendInput()}>フォーム追加</button>
            <button onClick={()=>this.deleteInput()}>フォーム削除</button>
        </div>)
    }


}
