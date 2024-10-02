"use client"

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, User, Bot } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
  id: number
  text: string
  sender: 'user' | 'agent'
}

export default function LiveChat() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! How can I assist you today?", sender: "agent" }
  ])
  const [inputMessage, setInputMessage] = useState("")
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputMessage.trim() !== "") {
      const newMessage: Message = { id: messages.length + 1, text: inputMessage, sender: "user" }
      setMessages([...messages, newMessage])
      setInputMessage("")
      // Simulate agent reply
      setTimeout(() => {
        const agentReply: Message = { id: messages.length + 2, text: "Thank you for your message. How else can I help you?", sender: "agent" }
        setMessages(prevMessages => [...prevMessages, agentReply])
      }, 1000)
    }
  }

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  return (
    <div className="flex flex-col h-[500px] bg-white rounded-xl shadow-xl overflow-hidden">
      <ScrollArea ref={scrollAreaRef} className="flex-1 p-4 space-y-4">
        <AnimatePresence initial={false}>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`flex items-start max-w-xs ${message.sender === "user" ? "flex-row-reverse" : "flex-row"}`}>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${message.sender === "user" ? "bg-amber-500 ml-2" : "bg-gray-200 mr-2"}`}>
                  {message.sender === "user" ? <User className="text-white h-5 w-5" /> : <Bot className="text-amber-600 h-5 w-5" />}
                </div>
                <div className={`px-4 py-2 rounded-lg ${message.sender === "user" ? "bg-amber-500 text-white" : "bg-gray-100 text-gray-800"}`}>
                  {message.text}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </ScrollArea>
      <form onSubmit={handleSendMessage} className="flex items-center p-4 border-t border-gray-200">
        <Input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 mr-2 focus:ring-2 focus:ring-amber-500"
        />
        <Button
          type="submit"
          className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
        >
          <Send className="h-5 w-5" />
        </Button>
      </form>
    </div>
  )
}