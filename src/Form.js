import React from "react";

class Form extends React.Component {

    state = {
        inputTitle: this.props.inputTitle,
    }

    //för varje input/textarea-fält:
    onChange = (evt) => {
        console.log("Upptäckte en ändring");

        //skriver över state med nya statet:
        this.setState( {inputTitle: evt.target.value} );
    }

    //för formuläret:
    onSubmit = (evt) => {
        evt.preventDefault();

        // console.log("klick sendBtn");

        //skickar tillbaka nya statet till App.js:
        this.props.getNewTitle(this.state.inputTitle);


    }


    render() {
        return(
            <form id="formMsg" onSubmit={this.onSubmit}>
                <input id="inputTitle" type="text" placeholder="Title" value={this.state.inputTitle} onChange={this.onChange}/> 
                <input id="inputName" type="text" placeholder="Name" />
                <textarea id="textAreaMsg" type="text" placeholder="Write your message here..."></textarea>
                <button id="submitBtn" className="btn" type="submit">Send</button>
            </form>
        ) 
    }

}

export default Form;