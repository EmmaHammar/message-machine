import React from "react";

class Message extends React.Component {
    render() {
        return(
            <div id="formResult">

                <h2>{this.props.showTitle}</h2>
                <h3>{this.props.showName}</h3>
                <p>{this.props.showMsg}</p>

            </div>
        )
    }
}

export default Message;