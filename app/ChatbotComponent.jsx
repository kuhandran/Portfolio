import React, { useState } from "react";
import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';

import pkg from 'react-chatbot-kit';
const { Chatbot } = pkg;

import data from 'react-util-kit';
const { ConditionallyRender } = data;

import './ChatbotComponent.css';

export const ChatbotComponent = () => {
  const [showChatbot, toggleChatbot] = useState(false);

  return (
    <div className="app-chatbot-container" >
      <ConditionallyRender
        ifTrue={showChatbot}
        show={
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        }
      />
      <button
        className="app-chatbot-button"
        onClick={() => toggleChatbot((prev) => !prev)}
      >
        {/* <ButtonIcon className="app-chatbot-button-icon" /> */}
      </button>
    </div>
  );
};

