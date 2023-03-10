import { useState } from "react";

const Input = ({onSendMessage}) => {
    const [text, setText] = useState("");
    const readMessage = (e) => {
        setText(e.target.value);
    };
    const sendMessage = (e) => {
        if (e.type === "click" || e.key === "Enter") {
            e.preventDefault();
            setText('');
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