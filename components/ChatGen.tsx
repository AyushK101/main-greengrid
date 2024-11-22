"use client"
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";

// Define the types for the props and state
type ChatProps = {
  userMessage?: string;
  response?: string;
};

const ChatComponent: React.FC<ChatProps> = () => {
  const [message, setMessage] = useState<string>("");
  const [userMessage,setUserMessage] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [pending, setPending] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true)  ;
    
    const response = await axios.post("https://ayushkumar.club/gen/",message,{
      headers: {
        "Content-Type": "application/json"
      }
    })
    setUserMessage(message);
    console.log("User message submitted:", message, "response: ",response.data);
    setResponse(response.data.response); // Reset message field after submission
    setPending(false)
  };

  return (
    <div className=" bg-gray-100 rounded-lg shadow-lg max-w-lg mx-auto p-4">
      <h2 className="text-2xl font-semibold text-center mb-4">Chat with GreenGrid AI</h2>

      <div className="message-box bg-white rounded-lg p-4 shadow-sm space-y-4 mb-4 min-h-24">
        {userMessage && (
          <p className="user-message text-left text-sm text-blue-500">
            <strong>You:</strong> {userMessage}
          </p>
        )}

        {/* Display bot response if it exists */}
        {response && (
          <div className="bot-response text-left text-sm text-gray-700 min-h-24">
            <strong>Bot:</strong> <div>{response}</div>
          </div>
        )}

        {/* Loading Spinner */}
        { false && (
          <div className="loading-spinner flex justify-center ">
            <Image
              src="./loader.gif"
              alt="Loading..."
              className="w-12 h-12"
            />
          </div>
        )}
      </div>

      {/* User Input Form */}
      <form className="user-input flex items-center" method="POST" onSubmit={handleSubmit}>
        <input
          type="text"
          name="user_message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
          required
          className="border-2 border-gray-300 rounded-l-lg p-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 focus:outline-none"
          disabled={pending}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatComponent;
