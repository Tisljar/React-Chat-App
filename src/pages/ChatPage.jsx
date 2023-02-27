import { Component } from "react";
import React from "react";
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
        this.messagesRef = React.createRef();
        this.drone = new window.Scaledrone("2Nio2A8E3xFoHGEC", {
            data: this.state.member,
        });
    }
    componentDidMount = () => {
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
    };
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
                <div  className="container white">
                    <HeaderChatBox />
                    
                        <Messages
                            messages={this.state.messages}
                            currentChatter={this.state.member}
                        />
                    </div>
                    <Input onSendMessage={this.onSendMessage} />
            </>
        );
    }
}
