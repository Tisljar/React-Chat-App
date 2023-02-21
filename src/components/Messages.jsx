const Messages = ({ currentChatter, messages }) => {
    const renderMessage = (message) => {
        const { member, text } = message;
        const messageFromMe = member.id === currentChatter.id;
        const className = messageFromMe
            ? "messages-message current-chatter"
            : "messages-message other-chatter";
        return (
            <li className={className}>
                {/* <span className="Avatar" style={{ backgroundColor: member.clientData.color }} /> */}
                <div className="chat-box">
                    <div className="username">{member.clientData.username}</div>
                    <div className="message-content">{text}</div>
                </div>
            </li>
        );
    };
    return (
        <>
            <ul className="messages-list">
                {messages.map((message) => renderMessage(message))}
            </ul>
        </>
    );
};

export default Messages;
