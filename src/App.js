import React from "react";
import Form from "./Form";
import Message from "./Message";

class App extends React.Component {
  state = {
    inputTitle: "",
    inputName: "",
    textAreaMsg: "",
  }

  //lifecycle-metoden som reagerar på callbackfunktionen getNewTitle i Form.js:

  saveNewTitle = (getTitle) => {
    //spara nya statet i App.js:
    this.setState( {inputTitle: getTitle} ) 
  }

  saveNewName = (getName) => {
    //spara nya statet i App.js:
    this.setState( {inputName: getName} ) 
  }

  saveNewMsg = (getNewMsg) => {
    //spara nya statet i App.js:
    this.setState( {textAreaMsg: getNewMsg} ) 
  }

  saveForm = (title, receiver, msg) => {
    this.setState ( {} )
  }

  render() {
    return(
      <>
        <h1>Message Machine</h1>
        <div id="contentWrapper">
          <Form 
            inputTitle={this.state.inputTitle} 
            getNewTitle={this.saveNewTitle}

            inputName={this.state.inputName}
            getNewName={this.saveNewName}

            textAreaMsg={this.state.textAreaMsg}
            getNewMsg={this.saveNewMsg}
          />

          <Message 
            showTitle={this.state.inputTitle} 
            showName={this.state.inputName}
            showMsg ={this.state.textAreaMsg}
          />

        </div>
      </>
    )
  }

}


export default App;


//state:     inputName: "Write receiver's name", 
    // textAreaMsg: "WriteYourMessage",