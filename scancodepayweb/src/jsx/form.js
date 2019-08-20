import React, {Component} from 'react';
import logo from '../logo.svg';
import Input from '../input.js';
import '../CSS/form.css'


class Form extends Component {

    render() {
       return (
           <div className={"com_form"}>
               <h1>defe</h1>
               <form>
                   <Input/><Input/>
               </form>
           </div>
       );
    }

}

export default Form;