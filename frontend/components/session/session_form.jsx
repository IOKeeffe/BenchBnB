import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.logIn(user);
  }

  render() {
    return (
      <form className="sign-up-form" onSubmit={this.handleSubmit}>
      </form>
    )
  }
}
export default SessionForm;
