import { useState } from "react";
import UsersContext from "../services/UserContext";

const Input = ({onSendMessage}) => {
    const [text, setText] = useState("");
    const readMessage = (e) => {
        setText(e.target.value);
    };
    const sendMessage = (e) => {
        if (e.type === "click" || e.key === "Enter") {
            setText({text: ""});
            onSendMessage(text);
        }
        else return;
    };
    return (
            <div className="input-area">
                <input
                    onChange={readMessage}
                    onKeyUp={sendMessage}
                    value={text}
                    type="text"
                    autoFocus
                    className="msg-input"
                />
                <button className="btn-send" onClick={sendMessage}>Send</button>
            </div>
    );
};

export default Input;