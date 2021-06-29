/* eslint-disable react/self-closing-comp */
import React from 'react';
import ChatThread from './ChatThread';
import './ChatThreadList.css';

function ChatThreadList() {
  return (
    <div>
      <div className="search-bar">
        <i className="fas fa-search"></i>
      </div>
      <div className="chat-thread-list">
        <ChatThread />
        <ChatThread />
        <ChatThread />
        <ChatThread />
        <ChatThread />
        <ChatThread />
        <ChatThread />
        <ChatThread />
        <ChatThread />
        <ChatThread />
        <ChatThread />
      </div>
    </div>
  );
}

export default ChatThreadList;

// Note: API call to the backend is needed to get ChatThread data.
