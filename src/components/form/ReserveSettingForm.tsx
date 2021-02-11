import React from "react";
import ReactDom from "react-dom";
import CreateForm from "../../parts/CreateForm"


interface formData {
    id: number;
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
                    id: 1,
                    formtype: 'text',
                    name: 'hogeyamada',
                    formvalue: undefined,
                    disabled: undefined,
                    selected: null
                },
                { 
                    id: 2,
                    formtype: 'text', 
                    name: 'iiyama',
                    formvalue: undefined,
                    disabled: undefined,
                    selected: null
                },
                { 
                    id: 3,
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
        listdata.map((entry:formData,index) =>{
            result.push(
                <input key={entry.id} name={entry.name} type={entry.formtype} value={entry.formvalue} />
                // <CreateForm 
                // id={entry.id}
                // formtype={entry.formtype}
                // name={entry.name} 
                // formvalue={entry.formvalue} 
                // disabled={entry.disabled} 
                // selected={entry.selected} />
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