import { useState } from "react";

const Input = ({onSendMessage}) => {
    const [text, setText] = useState("");
    const readMessage = (e) => {
        setText(e.target.value);
    };
    const sendMessage = (e) => {
        if (e.type == "click" || e.key == "Enter") {
            onSendMessage(text);
            setText({text: ""});
        }
        else return;
    };
    return (
        <>
            <div className="Input">
                <input
                    onChange={readMessage}
                    onKeyUp={sendMessage}
                    value={text}
                    type="text"
                    autoFocus
                    placeholder="Enter your message here"
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </>
    );
};

export default Input;