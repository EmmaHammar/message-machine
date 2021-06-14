import React from "react";

class Message extends React.Component {
    render() {
        return(
            <div id="formResult">
                <h2>{this.props.showTitle}</h2>

            </div>

        )
    }
}

export default Message;