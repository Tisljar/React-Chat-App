import { Component } from "react";
import ChatPage from "./pages/ChatPage";
import randomColor from "./services/randomColor";
import randomName from "./services/randomName";

class App extends Component {
    constructor() {
        super();
        this.drone = new window.Scaledrone("XR4pZ8C082pBHncb", {
            data: this.state.member,
        });
        this.drone.on("open", (error) => {
            if (error) {
                return console.error(error);
            }
            const member = { ...this.state.member };
            member.id = this.drone.clientId;
            this.state.member = member;
        });
        const room = this.drone.subscribe("observable-chatroom");
        room.on("data", (data, member) => {
            const messages = this.state.messages;
            messages.push({ member, text: data });
            this.state.messages = messages;
        });
    }
    state = {
        messages: [],
        member: {
            username: randomName(),
            color: randomColor(),
        },
    };
    MsgCounter = 1;
    onSendMessage = (message) => {
        const messages = this.state.messages;
        this.MsgCounter += 1;
        messages.push({
            text: message,
            member: this.state.member,
            msgId: this.MsgCounter,
        });
        this.setState({ messages: messages });
        this.drone.publish({
            room: "observable-chatroom",
            message,
        });
    };
    contextData = {
        onSendMessage: this.onSendMessage,
        messages: this.state.messages,
        member: this.state.member,
    };
    render() {
        return (
            <div className="container">
                <div className="app-header">
                    <h1>Chat App</h1>
                </div>
                <ChatPage
                    currentChatter={this.state.member}
                    messages={this.state.messages}
                    onSendMessage={this.onSendMessage}
                />
            </div>
        );
    }
}

export default App;
