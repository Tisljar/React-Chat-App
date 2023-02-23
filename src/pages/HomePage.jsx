import avatars from "../services/avatarList";
import Avatar from "../components/Avatar";
import useMemberState from "../services/useMemberState";


const HomePage = ({ changeMember }) => {
    const [member, setUsername, setAvatar] = useMemberState();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleAvatarChange = (event) => {
        setAvatar(event.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        changeMember(member);
    };
    return (
        <div className="member-form">
            <form onSubmit={handleSubmit}>
                <label>
                    Enter your username:
                    <input
                    onChange={handleUsernameChange}
                        type="text"
                        value={member.username}
                        required
                        maxLength={10}
                    />
                </label>
                <label>Select your avatar:</label>
                
                    {avatars.map((avatar) => (
                        <Avatar avatar={avatar.name} imgSrc={avatar.imgSrc} key={avatar.name} checked={avatar.default}/>
                    ))}
                <input type="submit" />
            </form>
        </div>
    );
};

export default HomePage;


{/* <select
                    onChange={handleAvatarChange}
                    name="Avatar"
                    value={member.avatar}
                    id="Avatar"
                    required
                ></select> */}