import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className = "login-signup">
    <Link to="/login">Login</Link>
    &nbsp;or&nbsp;
    <Link to="/signup">Sign Up</Link>
  </nav>
);

const personalGreeting = (currentUser, logOut) => (
  <div className="personal-greeting">
    <h2>Hi, {currentUser.username}</h2>
    <button className="header-button" onClick={logOut}>Log Out</button>
  </div>
);

const Greeting = ({currentUser, logOut}) => (
   currentUser ? personalGreeting(currentUser, logOut) : sessionLinks()
);

export default Greeting;
