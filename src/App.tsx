import React from "react";
import Form from "./Form";
import Message from "./Message";

interface State {
  title: string | null,
  receiver: string | null,
  msg: string | null,
}

class App extends React.Component<State> {
  state = {
    title: "",
    receiver: "",
    msg: "",
  }

  //lifecycle-metoden som reagerar på callbackfunktionen getNewForm i Form.js:
  saveForm = (myTitle: string, myReceiver: string, myMsg: string) => {
    this.setState ({
      title: myTitle,
      receiver: myReceiver,
      msg: myMsg,
    })
  }

  render() {
    return(
      <>
        <h1>Message Machine</h1>
        <div id="contentWrapper">
          <Form 
            title={this.state.title} 
            // getNewTitle={this.saveNewTitle}

            receiver={this.state.receiver}
            // getNewName={this.saveNewName}

            msg={this.state.msg}
            // getNewMsg={this.saveNewMsg}

            //FRÅGA: är det såhär det går till?
            //getNewForm är callback till getNewForm i Form.js? 
            //1) kallar på getNewForm i App.js som körs
            // kallar på saveForm i App.js som körs
            getNewForm={this.saveForm}
          />

          <Message 
            title={this.state.title} 
            receiver={this.state.receiver}
            msg ={this.state.msg}
          />

        </div>
      </>
    )
  }

}

export default App;