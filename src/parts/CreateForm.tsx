import React from "react";
import ReactDom from "react-dom";

interface formData {
    formtype: string;
    name: string|undefined;
    formvalue: string | number | readonly string[] | undefined; 
    disabled: string|undefined; 
    selected: string|null; 
};

class FormFactory extends React.Component<formData> {

    constructor(props:formData) {
        super(props);
    }

    render () {
        return <input name={this.props.name} type={this.props.formtype} value={this.props.formvalue} />
    }

}

export default FormFactory;