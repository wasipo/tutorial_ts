import React from "react";
import ReactDom from "react-dom";
import CreateForm from "../../parts/CreateForm"
import j from "jQuery";


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
                        id: 3,
                        formtype: 'text',
                        name: 'a_hogeyamada',
                        formvalue: undefined,
                        disabled: undefined,
                        selected: null
                    },
                    { 
                        id: 4,
                        formtype: 'text', 
                        name: 'b_iiyama',
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
            result.push(<div></div>);
            entry.wrap.map((entry1:formData,nestIndex)=>{
                result.push(
                    <input key={entry1.id} name={entry1.name} type={entry1.formtype} value={entry1.formvalue} />
                );
            })
            
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