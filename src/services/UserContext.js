import React from "react";

const UsersContext = React.createContext(
    {
        messages: () => {},
        member: () => {},
        onSendMessages: () => {},
    }
);

export default UsersContext;