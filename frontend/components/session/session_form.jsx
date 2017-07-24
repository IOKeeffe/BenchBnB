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
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render() {
    return (
      <div>
        <h1>{this.props.formType}</h1>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>

          <input type="text"></input>
        </form>
      </div>
    )
  }
}
export default SessionForm;
