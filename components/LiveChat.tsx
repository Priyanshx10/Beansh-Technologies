"use client"

import React, { useState, useEffect } from 'react'
import { FaPaperPlane, FaUser, FaRobot } from 'react-icons/fa'

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'agent';
}

const LiveChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! How can I assist you today?", sender: "agent" }
  ])
  const [inputMessage, setInputMessage] = useState("")

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputMessage.trim() !== "") {
      const newMessage = { id: messages.length + 1, text: inputMessage, sender: "user" }
      setMessages([...messages, newMessage])
      setInputMessage("")
      // Simulate agent reply
      setTimeout(() => {
        const agentReply = { id: messages.length + 2, text: "Thank you for your message. How else can I help you?", sender: "agent" }
        setMessages(prevMessages => [...prevMessages, agentReply])
      }, 1000)
    }
  }

  useEffect(() => {
    // Scroll to bottom of chat when new messages are added
    const chatContainer = document.getElementById('chat-container')
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight
    }
  }, [messages])

  return (
    <div className="flex flex-col h-96 bg-white rounded-lg shadow-md">
      <div id="chat-container" className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`flex items-start max-w-xs ${message.sender === "user" ? "flex-row-reverse" : "flex-row"}`}>
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${message.sender === "user" ? "bg-green-500 ml-2" : "bg-gray-300 mr-2"}`}>
                {message.sender === "user" ? <FaUser className="text-white" /> : <FaRobot className="text-gray-600" />}
              </div>
              <div className={`px-4 py-2 rounded-lg ${message.sender === "user" ? "bg-green-500 text-white" : "bg-gray-200 text-gray-800"}`}>
                {message.text}
              </div>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} className="flex items-center p-4 border-t">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded-r-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <FaPaperPlane />
        </button>
      </form>
    </div>
  )
}

export default LiveChat