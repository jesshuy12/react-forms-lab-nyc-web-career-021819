import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",  // original username state
      password: ""  // original password state
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  login = (event) => {
    event.preventDefault()
    if (this.state.username && this.state.password) {
      this.props.handleLogin(event)
    }
  }

  render() {
    return (
      <form onSubmit={this.login}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
