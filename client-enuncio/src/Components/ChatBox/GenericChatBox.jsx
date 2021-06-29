import React from 'react';
import ChatTools from '../ChatTools/ChatTools';
import './GenericChatBox.css';

function GenericChatBox() {
  return (
    <span className="generic-chat-box">
      <div className="message-area">
        Generic Chat area
      </div>
      <div className="tool-area">
        <ChatTools />
      </div>
    </span>
  );
}

export default GenericChatBox;
