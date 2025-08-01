import React, { useState, useEffect, useRef } from 'react';

// Function to convert PCM audio data to WAV format (kept for completeness, though TTS is removed)
const pcmToWav = (pcmData, sampleRate) => {
  const pcm16 = pcmData;
  const dataLength = pcm16.length * 2;
  const buffer = new ArrayBuffer(44 + dataLength);
  const view = new DataView(buffer);

  writeString(view, 0, 'RIFF');
  view.setUint32(4, 36 + dataLength, true);
  writeString(view, 8, 'WAVE');

  writeString(view, 12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);

  writeString(view, 36, 'data');
  view.setUint32(40, dataLength, true);

  let offset = 44;
  for (let i = 0; i < pcm16.length; i++, offset += 2) {
    view.setInt16(offset, pcm16[i], true);
  }
  return new Blob([buffer], { type: 'audio/wav' });
};

const writeString = (view, offset, string) => {
  for (let i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i));
  }
};

const base64ToArrayBuffer = (base64) => {
  const binaryString = window.atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
};


const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true); // New state for initial screen
  const [hasUserSentMessage, setHasUserSentMessage] = useState(false); // New state to track first user message
  const [showFeedbackPopup, setShowFeedbackPopup] = useState(false); // New state for feedback popup
  const [lastMessageTime, setLastMessageTime] = useState(null); // To track inactivity for feedback
  const [feedbackMessage, setFeedbackMessage] = useState(''); // New state for feedback message
  const [hasGivenFeedback, setHasGivenFeedback] = useState(false); // New state to track if feedback has been given

  const messagesEndRef = useRef(null);
  const menuRef = useRef(null);
  const emojiPickerRef = useRef(null);

  // For local development, replace the empty string with your actual Gemini API key.
  // You can obtain a key from Google AI Studio: https://aistudio.google.com/app/apikey
  const GEMINI_API_KEY = "";
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${GEMINI_API_KEY}`;

  const defaultSuggestions = [
    "Try SalesIQ on my site",
    "I'm interested in SalesIQ",
    "I'm an existing user looking for help",
    "News & Updates"
  ];

  // Base64 encoded audio for a short "bill" or "ding" sound
  const billSoundBase64 = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAAA'; 

  const playNotificationSound = () => {
    if (!isMuted) {
      const audio = new Audio(billSoundBase64);
      audio.play().catch(e => console.error("Error playing sound:", e));
    }
  };

  useEffect(() => {
    // When chat opens, show the welcome screen
    if (isOpen) {
      setShowWelcomeScreen(true);
      setMessages([]); // Clear messages for a fresh start
      setHasUserSentMessage(false); // Reset this flag
      setShowFeedbackPopup(false); // Hide feedback popup on open
      setLastMessageTime(null); // Reset last message time
      setFeedbackMessage(''); // Clear feedback message
      setHasGivenFeedback(false); // Reset feedback status
    } else {
      // When chat closes, ensure welcome screen is ready for next open
      setShowWelcomeScreen(true);
      setMessages([]);
      setHasUserSentMessage(false);
      setShowFeedbackPopup(false);
      setLastMessageTime(null);
      setFeedbackMessage('');
      setHasGivenFeedback(false);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Effect for feedback popup based on inactivity
  useEffect(() => {
    let feedbackTimer;
    // Only show feedback if chat is open, not typing, feedback not already shown, and user has sent a message
    if (!isOpen || isTyping || showFeedbackPopup || !hasUserSentMessage || hasGivenFeedback) {
      clearTimeout(feedbackTimer);
      return;
    }

    if (lastMessageTime) {
      const timeElapsed = new Date().getTime() - lastMessageTime;
      // Show feedback popup after 10 seconds of inactivity
      if (timeElapsed >= 10000) {
        setShowFeedbackPopup(true);
      } else {
        feedbackTimer = setTimeout(() => {
          setShowFeedbackPopup(true);
        }, 10000 - timeElapsed);
      }
    }

    return () => clearTimeout(feedbackTimer);
  }, [isOpen, isTyping, lastMessageTime, showFeedbackPopup, hasUserSentMessage, hasGivenFeedback]);


  // Close menu/emoji picker if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
      if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target)) {
        setShowEmojiPicker(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const callGeminiAPI = async (prompt, retries = 0) => {
    let chatHistory = [];
    // Filter out the 'welcome_image' type message from the chat history sent to the API
    const recentMessages = messages.filter(msg => msg.type !== 'welcome_image').slice(Math.max(messages.length - 5, 0));
    recentMessages.forEach(msg => {
      chatHistory.push({ role: msg.sender === 'user' ? 'user' : 'model', parts: [{ text: msg.text }] });
    });
    chatHistory.push({ role: "user", parts: [{ text: prompt }] });

    const payload = { contents: chatHistory };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        if (response.status === 429 && retries < 5) {
          const delay = Math.pow(2, retries) * 1000 + Math.random() * 1000;
          await new Promise(resolve => setTimeout(resolve, delay));
          return callGeminiAPI(prompt, retries + 1);
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      if (result.candidates && result.candidates.length > 0 &&
          result.candidates[0].content && result.candidates[0].content.parts &&
          result.candidates[0].content.parts.length > 0) {
        return result.candidates[0].content.parts[0].text;
      } else {
        console.error("Unexpected API response structure:", result);
        return "I'm sorry, I couldn't generate a response.";
      }
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      return "I'm sorry, I'm having trouble connecting right now.";
    }
  };

  const handleSendMessage = async (e, suggestedText = null) => {
    e.preventDefault();
    const messageText = suggestedText || input.trim();
    if (messageText === '') return;

    // Hide welcome screen once user sends first message
    if (showWelcomeScreen) {
      setShowWelcomeScreen(false);
    }

    // If this is the first message from the user, display the welcome image and message first
    if (!hasUserSentMessage) {
      setHasUserSentMessage(true); // Mark that user has sent a message
      
      // Add user message immediately
      setMessages([{ sender: 'user', text: messageText, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);

      // Add welcome image after a delay
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { sender: 'ai', type: 'welcome_image', text: 'Welcome to Zoho SalesIQ 👋' }]);
      }, 200); // Delay for welcome image

      // Add welcome text after another delay
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { sender: 'ai', text: 'How can I help you today?', includeSuggestions: true }]);
      }, 400); // Delay for welcome text and suggestions

      setInput('');
      setLastMessageTime(new Date().getTime()); // Reset timer for feedback popup
      return; // Do not call AI immediately after welcome sequence
    }

    const userMessage = { sender: 'user', text: messageText, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');
    setIsTyping(true);
    setShowFeedbackPopup(false); // Hide feedback popup if user sends a message

    const aiResponseText = await callGeminiAPI(userMessage.text);
    setIsTyping(false);
    const aiResponse = { sender: 'ai', text: aiResponseText, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages((prevMessages) => [...prevMessages, aiResponse]);

    playNotificationSound(); // Play notification sound on AI reply
    setLastMessageTime(new Date().getTime()); // Update last message time for feedback popup
  };

  const handleFeedbackClick = (feedback) => {
    setFeedbackMessage(`Thank you for your ${feedback} feedback!`);
    setHasGivenFeedback(true); // Mark that feedback has been given
    setShowFeedbackPopup(false); // Hide the popup immediately
    setTimeout(() => {
      setFeedbackMessage(''); // Clear message after a short delay
    }, 3000);
    // You can also send this feedback to a backend service here
  };

  const handleDownloadChat = async () => {
    setShowMenu(false);
    const chatContent = document.getElementById('chat-messages-container');
    if (chatContent && window.html2canvas && window.jspdf) {
      const canvas = await window.html2canvas(chatContent, { scale: 2 });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new window.jspdf.jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      pdf.save('chat_history.pdf');
    } else {
      console.error("html2canvas or jspdf libraries are not loaded. Please ensure their CDN links are included in your HTML.");
    }
  };

  const handleEmojiClick = (emoji) => {
    setInput((prevInput) => prevInput + emoji);
    setShowEmojiPicker(false);
  };

  const emojis = ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚', '😋', '😛', '😜', '🤪', '😝', '🤗', '🤫', '🤔', '�', '🤨', '😐', '😑', '😶', '😏', '😒', '🙄', '😬', '🤥', '😌', '😔', '😪', '🤤', '😴', '😷', '🤒', '🤕', '🤢', '🤮', '🤧', '🥵', '🥶', '🥴', '😵', '🤯', '🤠', '🥳', '😎', '🤓', '🧐', '😕', '😟', '🙁', '☹️', '😮', '😯', '😲', '😳', '🥺', '😦', '😧', '😨', '😥', '😢', '😭', '😱', '😖', '😣', '😩', '😫', '😤', '😡', '😠', '🤬', '😈', '👿', '💀', '☠️', '💩', '🤡', '👹', '👺', '👻', '👽', '👾', '🤖', '🎃', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾'];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-red-400 text-black p-4 rounded-full shadow-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-110 focus:outline-none"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {/* Chat icon - using a simple SVG for demonstration */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-96 h-[500px] bg-[#111] rounded-xl shadow-xl flex flex-col overflow-hidden border border-gray-700 animate-fade-in-up">
          {/* Chat Header */}
          <div className="flex items-center justify-between p-4 bg-gray-900 text-white rounded-t-xl shadow-md">
            <div className="flex items-center">
              {/* PepperAds Logo Placeholder */}
              <span className="text-red-400 text-2xl font-bold mr-2">P</span>
              <h3 className="text-lg font-semibold">Chat with AI Assistant</h3>
            </div>
            <div className="relative flex space-x-2">
              {/* Mute/Unmute Button */}
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="text-gray-400 hover:text-white focus:outline-none p-1 rounded-full hover:bg-gray-700 transition"
                aria-label={isMuted ? "Unmute sound" : "Mute sound"}
              >
                {isMuted ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.383 3.023A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.27zM14.707 7.293a1 1 0 010 1.414L13.414 10l1.293 1.293a1 1 0 01-1.414 1.414L12 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L10.586 10l-1.293-1.293a1 1 0 011.414-1.414L12 8.586l1.293-1.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.383 3.023A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.27zM14.293 7.293a1 1 0 011.414 0l.707.707A1 1 0 0116 9v2a1 1 0 01-1.293.957l-.707.707a1 1 0 01-1.414-1.414L13.586 11H12V9h1.586l.707-.707z" clipRule="evenodd" />
                  </svg>
                )}
              </button>

              {/* Three-dot Menu Button */}
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="text-gray-400 hover:text-white focus:outline-none p-1 rounded-full hover:bg-gray-700 transition"
                aria-label="Chat options menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </button>
              {/* Menu Dropdown */}
              {showMenu && (
                <div ref={menuRef} className="absolute top-full right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-10">
                  <button
                    onClick={handleDownloadChat}
                    className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700"
                  >
                    Download Chat (PDF)
                  </button>
                </div>
              )}
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white focus:outline-none p-1 rounded-full hover:bg-gray-700 transition"
                aria-label="Close chat"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          <div id="chat-messages-container" className="flex-1 p-4 overflow-y-auto custom-scrollbar bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            {showWelcomeScreen && !hasUserSentMessage && (
              <div className="w-full text-center py-10">
                {/* "We're online!" image from URL */}
                <img
                  src="https://i.pinimg.com/736x/d9/b7/02/d9b70237f2569ba9dd5f386d16d95dab.jpg"
                  alt="We're online!"
                  className="mx-auto max-w-[150px] h-auto mb-4 rounded-lg shadow-md"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x100/333/fff?text=Online"; }}
                />
                <p className="text-gray-400 text-lg">We're online!</p>
              </div>
            )}

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex mb-3 ${
                  msg.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {msg.sender === 'ai' && msg.type === 'welcome_image' ? (
                  <div className="flex flex-col items-start w-full">
                    {/* Compact Welcome Image from URL - now part of the message bubble */}
                    <div className="bg-gray-700 p-3 rounded-xl shadow-md rounded-bl-none max-w-[75%] mb-2 animate-fade-in">
                      <img
                        src="https://i.pinimg.com/736x/60/15/2f/60152f84d29166baec7a35aa2da3bf22.jpg"
                        alt="Welcome"
                        className="w-full h-auto rounded-md"
                        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/100x50/333/fff?text=WELCOME"; }}
                      />
                    </div>
                    {/* Actual welcome messages */}
                    <div className="flex items-center justify-start w-full">
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-bold mr-2 flex-shrink-0 overflow-hidden">
                        {/* Cute Robot SVG */}
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full p-1">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-2h-2v2zm3.25-6.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75zM8.75 10.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75zM12 16c-1.66 0-3-1.34-3-3h2c0 .55.45 1 1 1s1-.45 1-1h2c0 1.66-1.34 3-3 3z"/>
                        </svg>
                      </div>
                      <div className="max-w-[75%] p-3 rounded-xl shadow-md bg-gray-700 text-white rounded-bl-none animate-fade-in">
                        <p className="text-sm">{msg.text}</p>
                        {msg.timestamp && (
                          <span className="text-xs text-right block mt-1 opacity-70">
                            {msg.timestamp}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    {msg.sender === 'ai' && (
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-bold mr-2 flex-shrink-0 overflow-hidden">
                        {/* Cute Robot SVG */}
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full p-1">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-2h-2v2zm3.25-6.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75zM8.75 10.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75zM12 16c-1.66 0-3-1.34-3-3h2c0 .55.45 1 1 1s1-.45 1-1h2c0 1.66-1.34 3-3 3z"/>
                        </svg>
                      </div>
                    )}
                    <div
                      className={`max-w-[75%] p-3 rounded-xl shadow-md animate-fade-in ${
                        msg.sender === 'user'
                          ? 'bg-red-400 text-black rounded-br-none'
                          : 'bg-gray-700 text-white rounded-bl-none'
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      {msg.timestamp && (
                        <span className="text-xs text-right block mt-1 opacity-70">
                          {msg.timestamp}
                        </span>
                      )}
                      {/* Render suggestions directly below the AI message if includeSuggestions is true */}
                      {msg.includeSuggestions && (
                        <div className="flex flex-col gap-2 mt-3">
                          {defaultSuggestions.map((suggestion, suggestionIndex) => (
                            <button
                              key={suggestionIndex}
                              onClick={(e) => handleSendMessage(e, suggestion)}
                              className="bg-gray-600 text-white text-sm px-3 py-2 rounded-lg hover:bg-gray-500 transition-colors duration-200 text-left"
                            >
                              {suggestion}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    {/* Removed the "You" label for user messages */}
                    {msg.sender === 'user' && (
                      <div className="w-0 h-0"></div> /* Empty div to maintain flex structure */
                    )}
                  </>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start mb-3">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-bold mr-2 flex-shrink-0 overflow-hidden">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full p-1">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-2h-2v2zm3.25-6.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75zM8.75 10.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75zM12 16c-1.66 0-3-1.34-3-3h2c0 .55.45 1 1 1s1-.45 1-1h2c0 1.66-1.34 3-3 3z"/>
                  </svg>
                </div>
                <div className="max-w-[75%] p-3 rounded-xl bg-gray-700 text-white rounded-bl-none animate-pulse">
                  <p className="text-sm">AI is typing<span className="dot-animation">...</span></p>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Feedback Popup */}
          {showFeedbackPopup && (
            <div className="absolute inset-x-0 bottom-0 bg-gray-800 p-4 rounded-b-xl shadow-lg border-t border-gray-700 animate-fade-in-up">
              {feedbackMessage ? (
                <p className="text-white text-center text-lg mb-4">{feedbackMessage}</p>
              ) : (
                <>
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-white text-sm font-semibold">Share your rating & feedback</p>
                    <button
                      onClick={() => setShowFeedbackPopup(false)}
                      className="text-gray-400 hover:text-white focus:outline-none"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex justify-around">
                    <button onClick={() => handleFeedbackClick('Happy')} className="flex flex-col items-center text-4xl hover:scale-110 transition-transform">
                      😊
                      <span className="text-xs text-gray-400 mt-1">Happy</span>
                    </button>
                    <button onClick={() => handleFeedbackClick('Neutral')} className="flex flex-col items-center text-4xl hover:scale-110 transition-transform">
                      😐
                      <span className="text-xs text-gray-400 mt-1">Neutral</span>
                    </button>
                    <button onClick={() => handleFeedbackClick('Sad')} className="flex flex-col items-center text-4xl hover:scale-110 transition-transform">
                      😞
                      <span className="text-xs text-gray-400 mt-1">Sad</span>
                    </button>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Chat Input */}
          <form onSubmit={handleSendMessage} className="p-4 bg-gray-900 rounded-b-xl border-t border-gray-700">
            <div className="flex items-center space-x-2">
              {/* Emoji Button */}
              <div className="relative" ref={emojiPickerRef}>
                <button
                  type="button"
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                  className="text-gray-400 hover:text-white focus:outline-none p-2 rounded-full hover:bg-gray-700 transition"
                  aria-label="Emoji picker"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
                {showEmojiPicker && (
                  <div className="absolute bottom-full left-0 mb-2 w-64 h-48 bg-gray-800 rounded-md shadow-lg p-2 overflow-y-auto flex flex-wrap gap-1">
                    {emojis.map((emoji, index) => (
                      <span
                        key={index}
                        onClick={() => handleEmojiClick(emoji)}
                        className="cursor-pointer text-xl hover:bg-gray-700 p-1 rounded-md"
                      >
                        {emoji}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <input
                type="text"
                placeholder={showWelcomeScreen && !hasUserSentMessage ? "We are here to help you" : "Type message..."}
                className="flex-1 p-3 rounded-full bg-black border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-400 shadow-inner"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isTyping}
              />
              <button
                type="submit"
                className="bg-red-400 text-black p-3 rounded-full hover:bg-yellow-300 transition shadow-md focus:outline-none"
                aria-label="Send message"
                disabled={isTyping}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 transform rotate-45 -mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </form>

          {/* Powered by */}
          <div className="text-center text-xs text-gray-500 py-2 bg-gray-900 border-t border-gray-800">
            Powered by <span className="font-semibold text-red-400">AI</span>
          </div>
        </div>
      )}
      {/* Custom CSS for scrollbar and typing animation */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #222;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #444;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
        .custom-scrollbar-horizontal::-webkit-scrollbar {
          height: 8px;
        }
        .custom-scrollbar-horizontal::-webkit-scrollbar-track {
          background: #222;
          border-radius: 10px;
        }
        .custom-scrollbar-horizontal::-webkit-scrollbar-thumb {
          background: #444;
          border-radius: 10px;
        }
        .custom-scrollbar-horizontal::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.3s ease-out;
        }
        @keyframes dot-blink {
          0%, 80%, 100% { opacity: 0; }
          40% { opacity: 1; }
        }
        .dot-animation::after {
          content: '...';
          animation: dot-blink 1.4s infinite steps(1);
        }
      `}</style>
    </div>
  );
};

const ContactUs = () => {
  return (
    <div className="bg-black text-white px-6 py-20 min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">
          Contact <span className="text-red-400">Us</span>
        </h1>
        <p className="text-gray-400 text-lg mb-12 animate-fade-in">
          Drop us a message and we’ll connect you with the right specialist for your needs.
        </p>

        <form className="bg-[#111] rounded-xl p-8 max-w-xl mx-auto space-y-6 shadow-md">
          <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-black border border-gray-600 text-white" />
          <input type="email" placeholder="Your Email" className="w-full p-3 rounded bg-black border border-gray-600 text-white" />
          <textarea placeholder="Your Message" rows={5} className="w-full p-3 rounded bg-black border border-gray-600 text-white"></textarea>
          <button type="submit" className="bg-red-400 text-black px-6 py-3 font-semibold rounded hover:bg-yellow-300 transition">
            Send Message
          </button>
        </form>
      </div>
      <AIChatWidget />
    </div>
  );
};

export default ContactUs;
