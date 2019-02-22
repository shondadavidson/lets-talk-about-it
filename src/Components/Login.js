import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      password: ''
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  login = () => {
    this.props.toggleAuth();
  };

  render() {
    const { name, password } = this.state;
    return (
      <div>
        <div
          className="login-box"
          style={{
            height: '90vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          }}
        >
          <h1>Login</h1>
          <input
            id="name"
            type="text"
            placeholder="Username"
            value={this.state.name}
            onChange={this.handleInput}
          />
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleInput}
          />
          <button
            style={{ width: '170px' }}
            onClick={() => this.props.login(name, password)}
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}
