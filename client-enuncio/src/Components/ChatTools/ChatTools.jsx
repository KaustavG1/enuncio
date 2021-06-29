/* eslint-disable react/self-closing-comp */
import React from 'react';
import './ChatTools.css';

function ChatTools() {
  return (
    <div className="chat-tools">
      <i className="fas fa-paperclip attach"></i>
      <form className="messsage-form">
        <input type="text" placeholder="Type a message" className="message-input"></input>
      </form>
      <i className="far fa-paper-plane send"></i>
    </div>
  );
}

export default ChatTools;
