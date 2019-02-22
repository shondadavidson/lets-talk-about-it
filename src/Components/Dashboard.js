import React, { Component } from 'react';
import MessageList from './MessageList';
import axios from 'axios';
import { connect } from 'react-redux';
import { toggle } from '../ducks/reducer';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      input: ''
    };

    this.deleteMessage = this.deleteMessage.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
  }

  handleInput(val) {
    this.setState({
      input: val
    });
  }

  componentDidMount() {
    axios.get('/api/messages').then(res => {
      this.setState({
        messages: res.data
      });
    });
  }

  postMessage() {
    const { input } = this.state;
    axios.post('/api/message', { message: input }).then(res => {
      this.setState({
        messages: res.data,
        input: ''
      });
    });
  }

  deleteMessage(id) {
    axios.delete(`/api/message/${id}`).then(res => {
      this.setState({
        messages: res.data
      });
    });
  }

  updateMessage(id, message) {
    axios.put(`/api/message/${id}`, { message }).then(res => {
      this.setState({
        messages: res.data
      });
    });
  }

  render() {
    console.log(this.props);
    let backgroundColor = this.props.background ? 'rgb(0, 255, 76)' : '#fff';
    return (
      <div style={{ backgroundColor: backgroundColor }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <h2>Dashboard</h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <button
              style={{ marginBottom: '5px' }}
              onClick={() => this.props.logout()}
            >
              Logout
            </button>
            <button onClick={() => this.props.toggle()}>Toggle Settings</button>
          </div>
        </div>
        <MessageList
          messages={this.state.messages}
          user={this.props.user}
          delete={this.deleteMessage}
          update={this.updateMessage}
        />
        <div
          className="input-box"
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <textarea
            value={this.state.input}
            onChange={e => this.handleInput(e.target.value)}
            placeholder="Type message here ..."
            style={{
              width: '100%',
              padding: '5px',
              display: 'flex',
              justifyContent: 'center'
            }}
          />
          <button
            style={{ padding: '10px' }}
            onClick={() => this.postMessage()}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ background }) {
  return {
    background
  };
}

export default connect(
  mapStateToProps,
  { toggle }
)(Dashboard);
