import { Component } from "react";
import Input from "../components/Input";
import Messages from "../components/Messages";
import HeaderChatBox from "../fragments/HeaderChatBox";

export default class ChatApp extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            member: props.member,
        };
        this.drone = new window.Scaledrone("XR4pZ8C082pBHncb", {
            data: this.state.member,
        });
        this.drone.on("open", (error) => {
            if (error) {
                return console.error(error);
            }
            const member = { ...this.state.member };
            member.id = this.drone.clientId;
            this.setState({ member });
        });
        const room = this.drone.subscribe("observable-room");
        room.on("data", (data, member) => {
            const messages = this.state.messages;
            messages.push({ text: data, member: member });
            this.setState({ messages: messages });
        });
    }
    componentDidMount= () => {
        
    }
    onSendMessage = (message) => {
        // const newMessages = this.state.messages;
        // newMessages.push({
        //     text: message,
        //     member: this.state.member,
        // });
        // this.setState({ messages: newMessages });
        this.drone.publish({
            room: "observable-room",
            message,
        });
    };
    render() {
        return (
            <>
                <div className="container">
                    <HeaderChatBox />
                    <Messages
                        messages={this.state.messages}
                        currentChatter={this.state.member}
                    />
                    <Input onSendMessage={this.onSendMessage} />
                </div>
            </>
        );
    }
}
