import React from 'react';
import Message from './Message';

export default function MessageList(props) {
  const mappedMessages = props.messages.map(message => {
    return (
      <Message
        key={message.message}
        message={message}
        user={props.user}
        delete={props.delete}
        update={props.update}
      />
    );
  });
  return <div>{mappedMessages}</div>;
}
