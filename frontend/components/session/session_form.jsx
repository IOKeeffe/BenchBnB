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

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div>
        <h1>{this.props.formType}</h1>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <label>User name:
            <input type="text"
                   className="username"
                   value={this.state.username}
                   onChange={this.update('username')}
             />
          </label>
          <label>Password:
          <input type="text"
                 className="password"
                 value={this.state.password}
                 onChange={this.update('password')}
           />
          </label>
          <input type="submit" id="submit-  button"></input>
        </form>
      </div>
    )
  }
}
export default SessionForm;
