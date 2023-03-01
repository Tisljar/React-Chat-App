import { useEffect } from "react";
import { useRef } from "react";
import avatars from "../services/avatarList";
import findAvatarImgSrc from "../services/findAvatarImgSrc";

const Messages = ({ currentChatter, messages }) => {
    let msgCounter = 0;
    let idOfLastMsg = "";
    const messagesRef = useRef();
    const scrollToBottom = (messagesRef) => {
        messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
        console.log(messagesRef.current.scrollTop);
    };
    useEffect(() => {
        scrollToBottom(messagesRef);
        console.log("update");
    });
    const renderMessage = (message) => {
        msgCounter += 1;
        const { member, text } = message;
        const currentAvatarImgSrc = findAvatarImgSrc(avatars, currentChatter);
        const otherAvatarImgSrc = findAvatarImgSrc(avatars, member.clientData);
        const messageFromMe = member.id === currentChatter.id;
        const check = member.id === idOfLastMsg;
        idOfLastMsg = member.id;
        let messageContent = "message-content";
        if (check) {
            messageContent = "message-content message-same";
        }
        const className = messageFromMe
            ? "messages-message current-chatter"
            : "messages-message other-chatter";
        const avatarClass = messageFromMe
            ? "chat-box current-chatter"
            : "chat-box standard-avatar";
        const userAvatarImgSrc = messageFromMe
            ? currentAvatarImgSrc
            : otherAvatarImgSrc;
        return (
            <li className={className} key={msgCounter}>
                <div className={avatarClass}>
                    {!check && (
                        <div className="avatar-box">
                            <img
                                src={userAvatarImgSrc}
                                alt=""
                                width="80px"
                                height="76px"
                            />
                        </div>
                    )}
                    <div className="msg-group">
                        {!check && (
                            <div className="username">
                                {member.clientData.username}
                            </div>
                        )}
                        <div className={messageContent}>{text}</div>
                    </div>
                </div>
            </li>
        );
    };
    return (
        <>
            <div className="fullchat" ref={messagesRef}>
                <ul className="messages-list">
                    {messages.map((message) => renderMessage(message))}
                </ul>
            </div>
        </>
    );
};

export default Messages;
