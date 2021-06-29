/* eslint-disable react/self-closing-comp */
import React from 'react';
import './ChatThread.css';

function ChatThread() {
  return (
    <div className="thread">
      <span className="photo-and-info">
        <span className="photo">
          <i className="fas fa-user"></i>
        </span>
        <span className="info-container">
          <span className="name">
            John Doe
          </span>
          <span className="last-message">
            Test Message
          </span>
        </span>
      </span>
      <span className="time">
        Date
      </span>
    </div>
  );
}

export default ChatThread;
