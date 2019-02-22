import React, { Component } from 'react';
import axios from 'axios';

export default class DetailMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: {}
    };
  }

  componentDidMount() {
    axios.get(`/api/message/${this.props.match.params.id}`).then(res => {
      this.setState({
        message: res.data
      });
    });
  }
  render() {
    const { message } = this.state;
    return (
      <div>
        <button onClick={() => this.props.history.goBack()}>Back</button>
        <h2>Username: {message.name}</h2>
        <h3>Password: {message.password}</h3>
      </div>
    );
  }
}
