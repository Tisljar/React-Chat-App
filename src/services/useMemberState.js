import { useState } from "react";

const useMemberState = () => {
    const [member, setMember] = useState({ username: '', avatar: 'Avatar1' });
    const setUsername = (username) => {
      setMember({ ...member, username });
    };
  
    const setAvatar = (avatar) => {
      setMember({ ...member, avatar });
    };
  
    return [member, setUsername, setAvatar];
  }

  export default useMemberState;