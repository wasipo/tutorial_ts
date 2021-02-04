import React from 'react';
import ReactDom, { render } from 'react-dom';
import AddButton from './parts/AddButton';




export default class LayoutMaster extends React.Component {
    


    render() {
        return (
            <div>
                <AddButton />
            </div>);

    }
}








// const LayoutMaster: React.FC = () =>{
//     render(){

//         <div>hi</div>
//     };
// }