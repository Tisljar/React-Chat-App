import { Component } from "react";
import React from "react";
import Input from "../components/Input";
import Messages from "../components/Messages";
import HeaderChatBox from "../fragments/HeaderChatBox";
import { Link } from "react-router-dom";

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
    EmptyMember = {
        avatar: "",
        username: "",
    };
    LoggedIn = true;
    authorizeUser = () => {
        this.LoggedIn = false;
    };
    componentDidMount = () => {
        if (this.state.member.avatar === this.EmptyMember.avatar) {
            this.authorizeUser();
        }
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
                {!this.LoggedIn && (
                    <div className="nav-prompt">
                        <h2>Ne možete slati poruke jer niste ulogirani!</h2>
                        <Link to={"/"} className="btn-nav">
                        Ulogiraj me!
                        </Link>
                    </div>
                )}
                <div className="container white">
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
