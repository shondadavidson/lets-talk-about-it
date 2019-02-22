import React, { Component } from 'react';
import Login from './Components/Login';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import DetailMessage from './Components/DetailMessage';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: {}
    };

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    this.isLoggedIn();
  }

  isLoggedIn() {
    axios.get('/api/isLoggedIn').then(res => {
      this.setState({
        user: res.data
      });
    });
  }

  login(name, password) {
    axios.post('/api/login', { name, password }).then(res => {
      this.setState({
        user: res.data
      });
    });
  }

  logout() {
    axios.post('/api/logout').then(() => {
      this.setState({
        user: {}
      });
    });
  }

  render() {
    if (!this.state.user.id) {
      return <Login login={this.login} />;
    }
    return (
      <div className="App">
        <h1 style={{ textAlign: 'center' }}>Lets Talk About It</h1>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Dashboard user={this.state.user} logout={this.logout} />
            )}
          />
          <Route path="/message/:id" component={DetailMessage} />
        </Switch>
      </div>
    );
  }
}

export default App;
