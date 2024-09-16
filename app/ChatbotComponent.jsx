import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';

import pkg from 'react-chatbot-kit';
const { Chatbot } = pkg;

export const ChatbotComponent = () => {
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

