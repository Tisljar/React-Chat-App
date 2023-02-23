import avatars from "../services/avatarList";
import findAvatarImgSrc from "../services/findAvatarImgSrc";

const Messages = ({ currentChatter, messages }) => {
    
    const renderMessage = (message) => {
        const { member, text } = message;
        const currentAvatarImgSrc = findAvatarImgSrc(avatars, currentChatter);
        const otherAvatarImgSrc = findAvatarImgSrc(avatars, member.clientData);
        const messageFromMe = member.id === currentChatter.id;
        const className = messageFromMe
            ? "messages-message current-chatter"
            : "messages-message other-chatter";
        const userAvatarImgSrc = messageFromMe
            ? currentAvatarImgSrc
            : otherAvatarImgSrc
        return (
            <li className={className}>
                {/* <span className="Avatar" style={{ backgroundColor: member.clientData.color }} /> */}
                <div className="chat-box">
                    <div>
                    <div className="avatar-box">
                        <img src={userAvatarImgSrc} alt="" width="50px" height="50px"/>
                    </div>
                    <div className="username">{member.clientData.username}</div>
                    <div className="message-content">{text}</div>
                    </div>
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
