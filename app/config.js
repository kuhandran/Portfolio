import ChatBotKit from 'react-chatbot-kit';

const createChatBotMessage = ChatBotKit.createChatBotMessage;

const config = {
  initialMessages: [createChatBotMessage(`Hello world`)],
};

export default config;