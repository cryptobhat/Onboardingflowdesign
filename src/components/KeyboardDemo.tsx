import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Undo, 
  Redo, 
  Settings, 
  Clipboard, 
  MoreHorizontal, 
  Mic,
  ChevronLeft,
  Globe,
  ChevronDown
} from 'lucide-react';
import { ClipboardPanel } from './ClipboardPanel';

export function KeyboardDemo() {
  const [inputText, setInputText] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showToolbar, setShowToolbar] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [showMoreSuggestions, setShowMoreSuggestions] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showClipboard, setShowClipboard] = useState(false);

  const allSuggestions = [
    ...suggestions,
    inputText + 'er',
    inputText + 'ly',
    inputText + 'ness',
    inputText + 'tion'
  ];

  const emojis = ['😊', '😂', '❤️', '👍', '🎉', '🔥', '✨', '💯'];

  const toolbarIcons = [
    { icon: Undo, label: 'Undo', color: 'from-purple-400 to-purple-600', onClick: () => {} },
    { icon: Redo, label: 'Redo', color: 'from-pink-400 to-pink-600', onClick: () => {} },
    { icon: Settings, label: 'Settings', color: 'from-amber-400 to-amber-600', onClick: () => {} },
    { icon: Clipboard, label: 'Clipboard', color: 'from-teal-400 to-teal-600', onClick: () => setShowClipboard(true) },
    { icon: MoreHorizontal, label: 'More', color: 'from-indigo-400 to-indigo-600', onClick: () => {} }
  ];

  const keyboardRows = [
    [
      { key: 'q', number: '1' },
      { key: 'w', number: '2' },
      { key: 'e', number: '3' },
      { key: 'r', number: '4' },
      { key: 't', number: '5' },
      { key: 'y', number: '6' },
      { key: 'u', number: '7' },
      { key: 'i', number: '8' },
      { key: 'o', number: '9' },
      { key: 'p', number: '0' }
    ],
    [
      { key: 'a', symbol: '@' },
      { key: 's', symbol: '#' },
      { key: 'd', symbol: '$' },
      { key: 'f', symbol: '%' },
      { key: 'g', symbol: '&' },
      { key: 'h', symbol: '+' },
      { key: 'j', symbol: '-' },
      { key: 'k', symbol: '=' },
      { key: 'l', symbol: '|' }
    ],
    [
      { key: 'z', symbol: '*' },
      { key: 'x', symbol: '"' },
      { key: 'c', symbol: ':' },
      { key: 'v', symbol: ';' },
      { key: 'b', symbol: '!' },
      { key: 'n', symbol: '?' },
      { key: 'm', symbol: '/' }
    ]
  ];

  const handleKeyPress = (key: string) => {
    const newText = inputText + key;
    setInputText(newText);
    
    if (newText.length > 0) {
      const mockSuggestions = [
        newText,
        newText + 'ing',
        newText + 'ed'
      ];
      setSuggestions(mockSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleBackspace = () => {
    const newText = inputText.slice(0, -1);
    setInputText(newText);
    
    if (newText.length === 0) {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputText(suggestion + ' ');
    setSuggestions([]);
    setShowMoreSuggestions(false);
  };

  const handleLongPress = () => {
    if (suggestions.length > 0) {
      setShowMoreSuggestions(true);
    }
  };

  const isTyping = inputText.length > 0 && suggestions.length > 0;

  return (
    <div className="flex flex-col h-screen bg-[#FEF7FF] relative">
      {/* Clipboard Overlay */}
      <AnimatePresence>
        {showClipboard && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowClipboard(false)}
              className="absolute inset-0 bg-black/40 z-40"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute inset-x-0 top-0 bottom-0 z-50 bg-white rounded-t-[32px] overflow-hidden"
              style={{ height: '70%', marginTop: '30%' }}
            >
              <div className="h-full flex flex-col">
                <div className="flex items-center justify-between p-4 border-b border-[#E8DEF8]">
                  <h3 className="text-[#1C1B1F]">Clipboard Manager</h3>
                  <button
                    onClick={() => setShowClipboard(false)}
                    className="w-8 h-8 rounded-full bg-[#E8DEF8] flex items-center justify-center hover:bg-[#D0BCFF] transition-colors"
                  >
                    <ChevronDown className="w-5 h-5 text-[#1C1B1F]" strokeWidth={2.5} />
                  </button>
                </div>
                <div className="flex-1 overflow-hidden">
                  <ClipboardPanel />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Demo Input Area */}
      <div className="flex-1 p-6 flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-[28px] p-6 shadow-lg">
          <div className="text-[#79747E] mb-3">Type something...</div>
          <div className="min-h-[60px] text-[#1C1B1F]">
            {inputText}
            <span className="animate-pulse">|</span>
          </div>
        </div>
      </div>

      {/* Keyboard Container */}
      <div className="bg-[#ECE6F0] rounded-t-[32px] pb-6 shadow-2xl">
        {/* Toolbar / Suggestions Bar */}
        <div className="px-3 py-3 min-h-[56px] flex items-center gap-2">
          {/* Arrow Button (Static) */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowToolbar(!showToolbar)}
            className={`w-11 h-11 rounded-full flex items-center justify-center transition-all flex-shrink-0 ${
              showToolbar ? 'bg-[#6750A4] shadow-md' : 'bg-[#E8DEF8] hover:bg-[#D0BCFF]'
            }`}
            aria-label="Toolbar"
          >
            <motion.div
              animate={{ rotate: showToolbar ? 0 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronLeft className={`w-5 h-5 ${showToolbar ? 'text-white' : 'text-[#1C1B1F]'}`} strokeWidth={2.5} />
            </motion.div>
          </motion.button>

          {/* Middle Section - Toolbar Icons or Suggestions */}
          <div className="flex-1 min-w-0 flex items-center justify-start overflow-hidden">
            <AnimatePresence mode="wait">
              {showToolbar && !isTyping ? (
                /* Toolbar Icons - Slide in with scroll */
                <motion.div
                  key="toolbar"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="w-full overflow-x-auto scrollbar-hide"
                >
                  <div className="flex gap-2 items-center justify-evenly w-full px-2">
                    {toolbarIcons.map((item, index) => (
                      <motion.button
                        key={item.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.04, type: "spring", stiffness: 300 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={item.onClick}
                        className={`w-9 h-9 flex-shrink-0 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow`}
                        aria-label={item.label}
                      >
                        <item.icon className="w-4 h-4 text-white" strokeWidth={2.5} />
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              ) : isTyping ? (
                /* Suggestion Bar */
                <motion.div
                  key="suggestions"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col gap-2 w-full"
                >
                  <div className="flex gap-2 w-full">
                    {suggestions.map((suggestion, index) => (
                      <motion.button
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="flex-1 px-3 py-2.5 bg-white rounded-[16px] text-[#1C1B1F] hover:bg-[#F3EDF7] active:bg-[#E8DEF8] transition-colors shadow-sm min-w-0"
                      >
                        <span className="truncate block">{suggestion}</span>
                      </motion.button>
                    ))}
                  </div>
                  
                  {/* More Suggestions Button */}
                  <div className="flex justify-center">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onMouseDown={() => {
                        const timer = setTimeout(handleLongPress, 500);
                        return () => clearTimeout(timer);
                      }}
                      onTouchStart={() => {
                        const timer = setTimeout(handleLongPress, 500);
                        return () => clearTimeout(timer);
                      }}
                      onClick={() => setShowMoreSuggestions(!showMoreSuggestions)}
                      className="w-8 h-8 bg-[#E8DEF8] rounded-full flex items-center justify-center hover:bg-[#D0BCFF] transition-colors"
                      aria-label="More suggestions"
                    >
                      <motion.div
                        animate={{ rotate: showMoreSuggestions ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-4 h-4 text-[#1C1B1F]" strokeWidth={2.5} />
                      </motion.div>
                    </motion.button>
                  </div>

                  {/* Extended Suggestions */}
                  <AnimatePresence>
                    {showMoreSuggestions && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-wrap gap-2">
                          {allSuggestions.slice(3).map((suggestion, index) => (
                            <motion.button
                              key={index}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.03 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handleSuggestionClick(suggestion)}
                              className="px-3 py-2 bg-white rounded-[12px] text-[#1C1B1F] hover:bg-[#F3EDF7] active:bg-[#E8DEF8] transition-colors shadow-sm text-sm"
                            >
                              {suggestion}
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ) : (
                /* Empty space when idle */
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full"
                />
              )}
            </AnimatePresence>
          </div>

          {/* Mic Button (Static with Active State) */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsRecording(!isRecording)}
            className={`w-11 h-11 rounded-full flex items-center justify-center shadow-md transition-all flex-shrink-0 relative ${
              isRecording 
                ? 'bg-gradient-to-br from-red-500 to-rose-600 shadow-lg shadow-red-500/30' 
                : 'bg-gradient-to-br from-red-400 to-rose-500 hover:shadow-lg'
            }`}
            aria-label="Voice input"
          >
            {isRecording && (
              <motion.div
                className="absolute inset-0 rounded-full bg-red-400"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            )}
            <Mic className={`w-5 h-5 text-white relative z-10 ${isRecording ? 'scale-110' : ''}`} strokeWidth={2.5} />
          </motion.button>
        </div>

        {/* Keyboard */}
        <div className="px-2 mt-2">
          {/* Row 1 */}
          <div className="flex gap-1.5 mb-2.5">
            {keyboardRows[0].map((item) => (
              <button
                key={item.key}
                onClick={() => handleKeyPress(item.key)}
                className="flex-1 h-12 bg-white rounded-xl shadow-sm active:shadow-none active:bg-[#E8DEF8] transition-all flex flex-col items-center justify-center relative"
              >
                <span className="text-[10px] text-[#79747E] absolute top-1.5 left-1.5">{item.number}</span>
                <span className="text-[18px] text-[#1C1B1F]">{item.key.toUpperCase()}</span>
              </button>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex gap-1.5 mb-2.5 px-4">
            {keyboardRows[1].map((item) => (
              <button
                key={item.key}
                onClick={() => handleKeyPress(item.key)}
                className="flex-1 h-12 bg-white rounded-xl shadow-sm active:shadow-none active:bg-[#E8DEF8] transition-all flex flex-col items-center justify-center relative"
              >
                <span className="text-[10px] text-[#79747E] absolute top-1.5 left-1.5">{item.symbol}</span>
                <span className="text-[18px] text-[#1C1B1F]">{item.key.toUpperCase()}</span>
              </button>
            ))}
          </div>

          {/* Row 3 */}
          <div className="flex gap-1.5 mb-2.5">
            <button
              className="w-12 h-12 bg-[#D0BCFF] rounded-xl shadow-sm active:shadow-none active:bg-[#B9A3E8] transition-all flex items-center justify-center"
            >
              <svg className="w-5 h-5 text-[#1C1B1F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </button>
            {keyboardRows[2].map((item) => (
              <button
                key={item.key}
                onClick={() => handleKeyPress(item.key)}
                className="flex-1 h-12 bg-white rounded-xl shadow-sm active:shadow-none active:bg-[#E8DEF8] transition-all flex flex-col items-center justify-center relative"
              >
                <span className="text-[10px] text-[#79747E] absolute top-1.5 left-1.5">{item.symbol}</span>
                <span className="text-[18px] text-[#1C1B1F]">{item.key.toUpperCase()}</span>
              </button>
            ))}
            <button
              onClick={handleBackspace}
              className="w-12 h-12 bg-white rounded-xl shadow-sm active:shadow-none active:bg-[#E8DEF8] transition-all flex items-center justify-center"
            >
              <svg className="w-6 h-6 text-[#1C1B1F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
              </svg>
            </button>
          </div>

          {/* Row 4 - Bottom Row */}
          <div className="flex gap-1.5 mb-3">
            <button className="px-4 h-12 bg-[#D0BCFF] rounded-xl shadow-sm active:shadow-none active:bg-[#B9A3E8] transition-all flex items-center justify-center">
              <span className="text-[#1C1B1F]">?123</span>
            </button>
            
            {/* Combined Comma & Emoji Button */}
            <div className="relative">
              <button 
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                className="w-12 h-12 bg-white rounded-xl shadow-sm active:shadow-none active:bg-[#E8DEF8] transition-all flex flex-col items-center justify-center"
              >
                <span className="text-[10px] text-[#79747E]">,</span>
                <span className="text-[16px]">😊</span>
              </button>
              
              {/* Emoji Picker Popup */}
              <AnimatePresence>
                {showEmojiPicker && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-full mb-2 left-0 bg-white rounded-[20px] shadow-xl p-3 grid grid-cols-4 gap-2 z-50"
                  >
                    {emojis.map((emoji, index) => (
                      <motion.button
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.03 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                          handleKeyPress(emoji);
                          setShowEmojiPicker(false);
                        }}
                        className="w-10 h-10 flex items-center justify-center hover:bg-[#F3EDF7] rounded-lg transition-colors"
                      >
                        <span className="text-[20px]">{emoji}</span>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Globe Icon - Language Switcher */}
            <button className="w-12 h-12 bg-white rounded-xl shadow-sm active:shadow-none active:bg-[#E8DEF8] transition-all flex items-center justify-center">
              <Globe className="w-5 h-5 text-[#1C1B1F]" strokeWidth={2} />
            </button>

            <button 
              onClick={() => handleKeyPress(' ')}
              className="flex-1 h-12 bg-white rounded-xl shadow-sm active:shadow-none active:bg-[#E8DEF8] transition-all flex items-center justify-center"
            >
              <span className="text-sm text-[#49454F]">English (US)</span>
            </button>
            <button 
              onClick={() => handleKeyPress('.')}
              className="w-12 h-12 bg-white rounded-xl shadow-sm active:shadow-none active:bg-[#E8DEF8] transition-all flex items-center justify-center"
            >
              <span className="text-[18px] text-[#1C1B1F]">.</span>
            </button>
            <button className="px-4 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl shadow-md active:shadow-sm transition-all flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Bottom Controls */}
          <div className="flex justify-center items-center gap-4 px-4">
            <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#E8DEF8]/50 transition-colors">
              <svg className="w-5 h-5 text-[#49454F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="flex-1" />
            <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#E8DEF8]/50 transition-colors">
              <svg className="w-5 h-5 text-[#49454F]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Home Indicator */}
        <div className="flex justify-center mt-4">
          <div className="w-32 h-1 bg-[#1C1B1F]/30 rounded-full" />
        </div>
      </div>
    </div>
  );
}
