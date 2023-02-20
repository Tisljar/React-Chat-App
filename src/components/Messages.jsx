const Messages = ({messages, currentChatter}) => {
    const renderMessage = (message) => {
        const {member,text,msgId} = message;
        const messageFromMe = member.id === currentChatter;
        const className = messageFromMe ? "messages-message currentChatter" : "messages-message";
        return (
            <li key={msgId} className={className}>
                <span className="Avatar"/>
                <div className="chat-box">
                    <div className="username">
                        {member.username}
                    </div>
                    <div className="message-content">
                        {text}
                    </div>
                </div>
            </li>
        )
    }
    return <>
    <ul className="messages-list">
        {messages.map((message) => (renderMessage(message)))}
    </ul>
    </>;
};

export default Messages;