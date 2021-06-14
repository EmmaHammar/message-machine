import React from "react";
import Form from "./Form";
import Message from "./Message";

class App extends React.Component {
  state = {
    inputTitle: "",
  }

  //lifecycle-metoden som reagerar på callbackfunktionen getNewTitle i Form.js:
  saveNewTitle = (getTitle) => {
    // console.log("callback i App.js");

    //spara nya statet i App.js:
    this.setState( {inputTitle: getTitle} ) 
  }



  render() {
    return(
      <>
        <h1>Message Machine</h1>
        <div id="contentWrapper">
          <Form id="formContainer" inputTitle={this.state.inputTitle} getNewTitle={this.saveNewTitle}/>
          <Message showTitle={this.state.inputTitle} />
        </div>
      </>
    )
  }

}


export default App;


//state:     inputName: "Write receiver's name", 
    // textAreaMsg: "WriteYourMessage",