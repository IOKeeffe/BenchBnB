import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  renderOtherForm() {
    debugger;
    let otherForm = this.props.formType === "login" ? "/signup" : "/login";
    return (
      <Link to={otherForm}>{this.props.otherFormName}</Link>
    );
  }

  render() {
    return (
      <div>
        <h1>{this.props.formName}</h1>
        <h2>Did you mean to {this.renderOtherForm()}?</h2>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <label>User name:
            <input type="text"
                   className="username"
                   value={this.state.username}
                   onChange={this.update('username')}
             />
          </label>
          <label>Password:
          <input type="password"
                 className="password"
                 value={this.state.password}
                 onChange={this.update('password')}
           />
          </label>
          <input type="submit" id="submit-button"></input>
        </form>
      </div>
    )
  }
}
export default SessionForm;
