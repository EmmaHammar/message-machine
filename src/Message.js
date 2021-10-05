import React from "react";

class Message extends React.Component {
    render() {
        return(
            <div id="formResult">

                <h2>{this.props.title}</h2>
                <h3>{this.props.receiver}</h3>
                <p>{this.props.msg}</p>

            </div>
        )
    }
}

export default Message;