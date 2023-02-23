import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import HomePage from "./pages/HomePage";
import randomAvatar from "./services/randomAvatar";
import randomName from "./services/randomName";

class App extends Component {
    state = {
        messages: [],
        member: {
            username: randomName(),
            avatar: randomAvatar(),
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
            this.setState({ member });
        });
        const room = this.drone.subscribe("observable-room");
        room.on("data", (data, member) => {
            const messages = this.state.messages;
            messages.push({ text: data, member: member });
            this.setState({ messages: messages });
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
            message,
        });
    };
    changeMember = (member) => {
        this.setState({ member: member });
    };
    // contextData = {
    //     onSendMessage: this.onSendMessage,
    //     messages: this.state.messages,
    //     member: this.state.member,
    // };
    render() {
        return (
            <div className="container">
                <Routes>
                    <Route path="/" element={<HomePage changeMember={this.changeMember} /> }/>
                        
                    <Route path="/chatbox" element={<ChatPage
                            currentChatter={this.state.member}
                            messages={this.state.messages}
                            onSendMessage={this.onSendMessage}
                        />} />      
                </Routes>
            </div>
        );
    }
}

export default App;
