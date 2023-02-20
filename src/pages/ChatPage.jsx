import { Component } from "react";
import Input from "../components/Input";
import Messages from "../components/Messages";

export default class ChatApp extends Component {
    state = {
        messages : [
            {
                text: "This is a test message!",
                member: {
                    color: "blue",
                    username: "Nizde"
                },
                msgId: 0
            }
        ],
        member: {
            username: "Nizde",
            color: "blue"
        }
    }
    onSendMessage = (message) => {
        const messages = this.state.messages;
        messages.push({
            text: message,
            member: this.state.member
        })
        this.setState({messages: messages})
    }
    render () {
        return (<>
            <div className="container">
                <Messages messages={this.state.messages} currentChatter={this.state.member}/>
                <Input onSendMessage={this.onSendMessage}/>
            </div>
        </>);
    }
}