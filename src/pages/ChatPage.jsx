import { Component } from "react";
import Input from "../components/Input";
import Messages from "../components/Messages";

export default class ChatApp extends Component {
    render() {
        const { currentChatter, messages } = this.props;
        const { onSendMessage } = this.props;
        return (
            <>
                <div className="container">
                    <Messages
                        messages={messages}
                        currentChatter={currentChatter}
                    />
                    <Input onSendMessage={onSendMessage} />
                </div>
            </>
        );
    }
}
