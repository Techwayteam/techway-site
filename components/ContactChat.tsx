import React, { useState, useEffect, useRef } from 'react';
import { X, Send, AlertTriangle } from 'lucide-react';

type MessageBubbleProps = {
  message: string;
  sender: 'bot' | 'user';
};

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, sender }) => (
  <div className={`flex ${sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
    <div 
      className={`relative p-3 ${
        sender === 'user' 
          ? 'bg-blue-600 bg-opacity-70 backdrop-blur-md text-white' 
          : 'bg-gray-800 bg-opacity-70 backdrop-blur-md text-blue-100'
      } rounded-2xl shadow-lg max-w-[75%]`}
      >
      <div className="px-2">
        {message}
      </div>
      <div 
        className={`absolute w-4 h-4 ${
          sender === 'user' 
            ? 'right-0 -bottom-2 bg-blue-600 bg-opacity-70' 
            : 'left-0 -bottom-2 bg-gray-800 bg-opacity-70'
        }`}
        style={{
          clipPath: sender === 'user' 
            ? 'polygon(0 0, 100% 0, 100% 100%)' 
            : 'polygon(0 0, 100% 0, 0 100%)'
        }}
      />
    </div>
  </div>
);

const ContactChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: 'bot' | 'user' }[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  const questions = [
    "Olá! Que bom te ver por aqui. Qual é o seu nome?",
    "Prazer em conhecer você! Qual é o seu e-mail?",
    "Ótimo! E qual é o seu número de telefone?",
    "Entendi. E em que área você trabalha atualmente?",
    "Legal! Como a TECHWAY pode te ajudar hoje?",
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    workArea: '',
    need: ''
  });

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      simulateBotMessage(questions[0]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const simulateBotMessage = (message: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { text: message, sender: 'bot' }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSendMessage = () => {
    if (userInput.trim() === '') return;

    setMessages(prev => [...prev, { text: userInput, sender: 'user' }]);
    setFormData(prev => {
      const newData = { ...prev };
      switch (currentQuestion) {
        case 0: newData.name = userInput; break;
        case 1: newData.email = userInput; break;
        case 2: newData.phone = userInput; break;
        case 3: newData.workArea = userInput; break;
        case 4: newData.need = userInput; break;
      }
      return newData;
    });

    setUserInput('');

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      simulateBotMessage(questions[currentQuestion + 1]);
    } else {
      simulateBotMessage("Obrigado pelas informações! Um de nossos especialistas entrará em contato em breve. Deseja continuar a conversa no WhatsApp?");
    }
  };

  const handleWhatsApp = () => {
    const message = `Olá! Meu nome é ${formData.name}. Gostaria de saber mais sobre como a TECHWAY pode me ajudar com ${formData.need}.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5521991673541?text=${encodedMessage}`, '_blank');
  };

  const handleSubmit = () => {
    // Aqui você pode implementar a lógica para salvar o lead
    console.log('Lead capturado:', formData);
    // Exemplo: enviar para uma API, salvar em localStorage, etc.
  };

  

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
      >
        Fale Conosco
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-white bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-900 bg-opacity-50 backdrop-blur-lg w-full max-w-2xl h-3/4 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        <div className="p-4 border-b border-white flex justify-between items-center bg-gray-800 bg-opacity-50 backdrop-blur-md">
          <h2 className="text-2xl font-bold text-white">BORA CONVERSAR?</h2>
          <button 
            onClick={() => setIsExiting(true)} 
            className="text-gray-400 hover:text-red-500 transition-colors duration-300"
          >
            <X size={24} />
          </button>
        </div>
        <div 
          ref={chatRef} 
          className="
            flex-1 
            overflow-y-auto 
            p-6 
            space-y-4 
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:bg-transparent 
            [&::-webkit-scrollbar-thumb]:bg-gray-600/50 
            hover:[&::-webkit-scrollbar-thumb]:bg-gray-800/50 
            [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-thumb]:mr-5
          "
        >
          {messages.map((message, index) => (
            <MessageBubble key={index} message={message.text} sender={message.sender} />
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-800 bg-opacity-70 backdrop-blur-md text-blue-100 p-3 rounded-lg">
                Digitando...
              </div>
            </div>
          )}
        </div>
        <div className="p-4 border-t border-white bg-gray-800 bg-opacity-50 backdrop-blur-md">
          <div className="flex space-x-2">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Digite sua mensagem..."
              className="flex-1 p-2 rounded-lg bg-gray-600 bg-opacity-70 backdrop-blur-sm text-blue-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              onClick={handleSendMessage}
              className="bg-blue-600 bg-opacity-80 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-opacity-100 transition-colors duration-300"
            >
              <Send size={24} />
            </button>
          </div>
          {currentQuestion >= questions.length && (
            <div className="mt-4 flex justify-between">
              <button onClick={handleSubmit} className="bg-green-500 bg-opacity-80 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-opacity-100 transition-colors duration-300">
                Enviar
              </button>
              <button onClick={handleWhatsApp} className="bg-green-500 bg-opacity-80 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-opacity-100 transition-colors duration-300">
                Continuar no WhatsApp
              </button>
            </div>
          )}
        </div>
      </div>
      
            {isExiting && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-60">
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-blue-500 max-w-md w-full">
            <div className="flex items-center mb-4 text-yellow-500">
              <AlertTriangle size={24} className="mr-2" />
              <h3 className="text-xl font-bold">Atenção</h3>
            </div>
            <p className="text-gray-300 mb-4">Tem certeza que deseja sair? Suas informações não serão salvas.</p>
            <div className="flex justify-end space-x-4">
              <button 
                onClick={() => setIsExiting(false)}
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors duration-300"
              >
                Cancelar
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-300"
              >
                Sair
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactChat;
