
import avatars from "../services/avatarList";
import findAvatarImgSrc from "../services/findAvatarImgSrc";

const Messages = ({ currentChatter, messages,scroll }) => {
    // let prevMsgSame = false;
    let msgCounter = 0;
    
    const renderMessage = (message) => {
        msgCounter += 1;
        const { member, text } = message;
        const currentAvatarImgSrc = findAvatarImgSrc(avatars, currentChatter);
        const otherAvatarImgSrc = findAvatarImgSrc(avatars, member.clientData);
        const messageFromMe = member.id === currentChatter.id;
        const className = messageFromMe
            ? "messages-message current-chatter"
            : "messages-message other-chatter";
        const avatarClass = messageFromMe
            ? "chat-box current-chatter"
            : "chat-box standard-avatar";
        const userAvatarImgSrc = messageFromMe
            ? currentAvatarImgSrc
            : otherAvatarImgSrc
        return (
            <li className={className} key={msgCounter}>
                <div className={avatarClass}>
                    <div className="avatar-box">
                        <img src={userAvatarImgSrc} alt="" width="80px" height="80px"/>
                    </div>
                    <div className="msg-group">
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
                {messages.map((message) => (renderMessage(message)))}
            </ul>
        </>
    );
};

export default Messages;
