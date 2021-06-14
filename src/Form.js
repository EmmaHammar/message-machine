import React from "react";

class Form extends React.Component {

    state = {
        inputTitle: this.props.inputTitle,
        inputName: this.props.inputName,
        textAreaMsg: this.props.textAreaMsg,
    }

    //för varje input/textarea-fält:
    onChange = (evt) => {
        console.log("Upptäckte en ändring");

        //skriver över state med nya statet:
        this.setState( {
            [evt.target.name]: evt.target.value
        } );
    }
   
    //för formuläret:
    onSubmit = (evt) => {
        evt.preventDefault();

        // console.log("evt.target: ", evt.target);
        // console.log("this.props: ", this.props);
        // console.log("this.state: ", this.state);
        
        //skickar tillbaka nya statet till App.js:
        this.props.getNewTitle(this.state.inputTitle);
        this.props.getNewName(this.state.inputName);
        this.props.getNewMsg(this.state.textAreaMsg);
    }


    render() {
        return(
            <form id="formMsg" onSubmit={this.onSubmit}>
                <input id="inputTitle" type="text" name="inputTitle" placeholder="Title" value={this.state.inputTitle} onChange={this.onChange}/> 
                <input id="inputName" type="text" name="inputName" placeholder="Name" value={this.state.inputName} onChange={this.onChange}/>
                <textarea id="textAreaMsg" type="text" name="textAreaMsg" placeholder="Write your message here..." value={this.state.textAreaMsg} onChange={this.onChange}></textarea>
                <button id="submitBtn" className="btn" type="submit">Send</button>
            </form>
        ) 
    }

}

export default Form;