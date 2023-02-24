import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import HomePage from "./pages/HomePage";
class App extends Component {
    state = {
        username: "",
        avatar: "",
    };
    changeMember = (member) => {
        this.setState({username: member.username,avatar: member.avatar} )
        
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
                    <Route
                        path="/"
                        element={<HomePage changeMember={this.changeMember} />}
                    />
                    <Route
                        path="/chatbox"
                        element={<ChatPage member={this.state} />}
                    />
                </Routes>
            </div>
        );
    }
}

export default App;
