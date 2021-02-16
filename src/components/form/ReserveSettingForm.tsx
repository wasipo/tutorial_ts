import React from "react";
import ReactDom from "react-dom";
import CreateForm from "../../parts/CreateForm"


type formData =  {
    id: number;
    formtype: string; 
    name: string|undefined;
    formvalue: string | number | readonly string[] | undefined; 
    disabled: string | undefined; 
    selected: string | null;
}

type formDataWrap = {
    wrap : formData[]
}


class SettingForm extends React.Component<{},{listdata: formDataWrap[];}> {

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            listdata: [
                {
                    wrap :[
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
                    }
                ],
            },
            {
                wrap :[
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
                    }
                ]
            }
            ],
        };
        this.renderForms.bind(this);
    }
    renderForms() {
        const {listdata} = this.state;
        let result:Array<JSX.Element | string | null > = [];
        listdata.map((entry:formDataWrap,index) =>{
            result.push(
                <input key={entry.wrap[index].id} name={entry.wrap[index].name} type={entry.wrap[index].formtype} value={entry.wrap[index].formvalue} />
            );
        });

        return result;


    }
    
    render () {

        return (<form>
            <div>
                {this.renderForms()} 
            </div>
        </form>)
    } 


}

export default SettingForm;