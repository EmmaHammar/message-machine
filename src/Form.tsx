import React from "react";

interface Props {
    title: string,
    receiver: string,
    msg: string,
    getNewForm: (title: string,receiver: string, msg: string) => void;
}

class Form extends React.Component<Props> {

    state = {
        title: this.props.title,
        receiver: this.props.receiver,
        msg: this.props.msg,
    }

    //för varje input/textarea-fält:
    onChange = (evt: any) => {

        //skriver över state med nya statet:
        this.setState( {
            [evt.target.name]: evt.target.value
        } );
    }
   
    //för formuläret:
    onSubmit = (evt: any) => {
        evt.preventDefault();

        //skickar tillbaka nya statet till App.js:
        this.props.getNewForm(this.state.title, this.state.receiver, this.state.msg)
    }

    render() {
        return(
            <form id="formMsg" onSubmit={this.onSubmit}>
                <input id="inputTitle" type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.onChange}/> 
                <input id="inputName" type="text" name="receiver" placeholder="Name" value={this.state.receiver} onChange={this.onChange}/>
                <textarea id="textAreaMsg" name="msg" placeholder="Write your message here..." value={this.state.msg} onChange={this.onChange}></textarea>
                <button id="submitBtn" className="btn" type="submit">Send</button>
            </form>
        ) 
    }
}

export default Form;