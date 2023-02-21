import { Component } from "react";
import ChatPage from "./pages/ChatPage";
import randomColor from "./services/randomColor";
import randomName from "./services/randomName";

class App extends Component {
    state = {
        messages: [],
        member: {
            username: randomName(),
            color: randomColor(),
        },
    };
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
            this.setState({member});
        });
        const room = this.drone.subscribe("observable-room");
        room.on('data', (data, member) => {
            const messages = this.state.messages;
            messages.push({  text: data, member: member});
            this.setState({messages: messages});
        });
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
            message
        });
    };
    // contextData = {
    //     onSendMessage: this.onSendMessage,
    //     messages: this.state.messages,
    //     member: this.state.member,
    // };
    render() {
        return (
            <div className="container">
                <div className="app-header">
                    <h1>Chat App</h1>
                    <hr className="margin-hr"/>
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
