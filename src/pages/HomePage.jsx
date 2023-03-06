import avatars from "../services/avatarList";
import Avatar from "../components/Avatar";
import useMemberState from "../services/useMemberState";
import { useNavigate } from "react-router-dom";

const HomePage = ({ changeMember }) => {
    const [member, setUsername, setAvatar] = useMemberState();
    const navigate = useNavigate();
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    const handleAvatarChange = (event) => {
        setAvatar(event.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        changeMember(member);
        navigate('/chatbox');
    };
    return (
        <div className="member-form">
            <h1>Welcome To Chat-App</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter your username:
                    <input
                        onChange={handleUsernameChange}
                        type="text"
                        value={member.username}
                        required
                        maxLength={10}
                        className="username-input"
                    />
                </label>
                
                <label>Select your avatar:</label>
                <div className="avatar-form-group">
                {avatars.map((avatar) => (
                    <Avatar
                        avatar={avatar.name}
                        imgSrc={avatar.imgSrc}
                        key={avatar.name}
                        checked={avatar.default}
                        handleAvatarChange={handleAvatarChange}
                    />
                ))}
                </div>
                <div className="btn-container">
                <input type="submit" className="btn-submit"/>
                </div>
            </form>
        </div>
    );
};

export default HomePage;
