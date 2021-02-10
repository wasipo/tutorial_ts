import React from "react";
import ReactDom from "react-dom";
import CreateForm from "../../parts/CreateForm"


interface formData {
    key: number;
    formtype: string; 
    name: string|undefined;
    formvalue: string | number | readonly string[] | undefined; 
    disabled: string | undefined; 
    selected: string | null;
}



class SettingForm extends React.Component<{},{listdata: formData[];}> {

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            listdata: [
                { 
                    key: 1,
                    formtype: 'text',
                    name: 'hogeyamada',
                    formvalue: undefined,
                    disabled: undefined,
                    selected: null
                },
                { 
                    key: 2,
                    formtype: 'text', 
                    name: 'iiyama',
                    formvalue: undefined,
                    disabled: undefined,
                    selected: null
                },
                { 
                    key: 3,
                    formtype: 'text',
                    name: 'tanaka',
                    formvalue: undefined,
                    disabled: undefined,
                    selected: null
                }
            ]
        };
        this.renderForms.bind(this);
    }
    renderForms() {
        const {listdata} = this.state;
        let result:Array<JSX.Element | string | null > = [];
        listdata.map((entry:formData) =>{
            result.push(
                <CreateForm 
                key={entry.key}
                formtype={entry.formtype}
                name={entry.name} 
                formvalue={entry.formvalue} 
                disabled={entry.disabled} 
                selected={entry.selected} />
            );
        });

        return result;


    }
    
    render () {
        return (<div>
            {this.renderForms()}
        </div>)
    } 


}

export default SettingForm;