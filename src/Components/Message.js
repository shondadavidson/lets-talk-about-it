import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      message: ''
    };
  }

  handleMessage(val) {
    this.setState({
      message: val
    });
  }

  setEdit() {
    this.setState({
      editing: true
    });
  }

  update(id) {
    const { message } = this.state;
    this.props.update(id, message);
    this.setState({
      editing: false,
      message: ''
    });
  }

  render() {
    const { message, user } = this.props;
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          border: '1px solid black',
          padding: '20px',
          boxShadow: '5px 5px 10px rgba(0,0,0,0.5)',
          marginBottom: '10px'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            flexDirection: 'column'
          }}
        >
          {user.name === message.name ? (
            <Link to={`/message/${message.id}`}>
              <p>
                <strong>{message.name}</strong>
              </p>
            </Link>
          ) : (
            <p>
              <strong>{message.name}</strong>
            </p>
          )}
          {this.state.editing ? (
            <input
              type="text"
              value={this.state.message}
              onChange={e => this.handleMessage(e.target.value)}
            />
          ) : (
            <p>{message.message}</p>
          )}
        </div>

        {user.name === message.name ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              flexDirection: 'column'
            }}
          >
            <button onClick={() => this.props.delete(message.id)}>
              Delete
            </button>
            {this.state.editing ? (
              <button onClick={() => this.update(message.id)}>
                Save Changes
              </button>
            ) : (
              <button onClick={() => this.setEdit()}>Edit</button>
            )}
          </div>
        ) : null}
      </div>
    );
  }
}
