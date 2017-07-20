import React from 'react';

const SessionForm = ({currentUser, logOut}) => (
   currentUser ? personalGreeting(currentUser, logOut) : sessionLinks()
);

export default SessionForm;
