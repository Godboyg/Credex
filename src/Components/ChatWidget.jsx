import { useState } from 'react';
import axios from 'axios';
import { GoogleGenAI } from "@google/genai";
import { p } from 'framer-motion/client';

const api = import.meta.env.VITE_API_KEY;

const ai = new GoogleGenAI({ apiKey: api });

const exampleQuestions = [
  "How do I sell my license?",
  "What is the payout process?",
  "Can I sell unused licenses?",
];

export default function ChatWidget() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [ Visible, setVisible] = useState(true);

  const handleSend = async (text) => {
    const userText = text || input;
    if (!userText.trim()) return;

    const userMessage = { role: 'user', content: userText };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: [{ parts: [{ text: userText }] }]
      });

      console.log(response.candidates[0].content.parts[0].text)
      const botText = response.candidates[0]?.content?.parts[0]?.text;
      if (botText) {
        setMessages(prev => [...prev, { role: 'model', content: botText }]);
      }
    } catch (err) {
      console.error('Gemini API error:', err);
    }

    setLoading(false);
  };

  return (
    <>
    {
      Visible ? (
        <button className='hover:cursor-pointer p-2 fixed bottom-10 right-10 shadow-lg shadow-cyan-500 rounded-xl' onClick={() => setVisible(false)}>Get Me!</button>
      ) : (
        <div className="fixed bottom-4 right-4 w-80 bg-white dark:bg-gray-900 shadow-xl rounded-lg border border-gray-200 dark:border-gray-700 p-4 z-50">
     <div className="flex item-center justify-between">
       <h3 className="text-lg font-semibold mb-2 text-gray-300">AI Chat Support</h3>
       <button className='text-gray-300 font-bold' onClick={() => setVisible(true)}>Close</button>
     </div>
      
      <div className="space-y-2 mb-4">
        {exampleQuestions.map((q, i) => (
          <button
            key={i}
            onClick={() => handleSend(q)}
            className="text-sm bg-gray-500 hover:bg-gray-400 dark:hover:bg-gray-700 px-3 py-1 rounded"
          >
            {q}
          </button>
        ))}
      </div>

      <div className="h-40 over overflow-y-auto mb-2 space-y-2 text-sm">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`p-2 rounded ${
              m.role === 'user'
                ? 'bg-gray-300 text-right'
                : 'bg-gray-400 text-left'
            }`}
          >
            {m.content}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-2 py-1 border rounded text-sm dark:bg-gray-800 dark:text-white"
          placeholder="Type your question..."
        />
        <button
          onClick={() => handleSend()}
          disabled={loading}
          className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 disabled:opacity-50"
        >
          Send
        </button>
      </div>
        </div>
      )
    }
    </>
  );
}
