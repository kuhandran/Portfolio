
import pkg from 'react-chatbot-kit';
const { createChatBotMessage } = pkg;

import DogPicture from './DogPicture';


const botName = 'Kuhan';

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
  widgets: [
    {
      widgetName: 'dogPicture',
      widgetFunc: (props) => <DogPicture {...props} />,
    },
  ],
};

export default config;



