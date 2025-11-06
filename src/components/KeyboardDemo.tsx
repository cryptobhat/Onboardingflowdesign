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
    { 
      icon: Undo, 
      label: 'Undo', 
      gradient: 'linear-gradient(135deg, #6750A4 0%, #7F67BE 100%)',
      shadow: '#6750A4',
      onClick: () => {} 
    },
    { 
      icon: Redo, 
      label: 'Redo', 
      gradient: 'linear-gradient(135deg, #EC4899 0%, #F43F5E 100%)',
      shadow: '#EC4899',
      onClick: () => {} 
    },
    { 
      icon: Settings, 
      label: 'Settings', 
      gradient: 'linear-gradient(135deg, #FBBF24 0%, #F97316 100%)',
      shadow: '#FBBF24',
      onClick: () => {} 
    },
    { 
      icon: Clipboard, 
      label: 'Clipboard', 
      gradient: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)',
      shadow: '#06B6D4',
      onClick: () => setShowClipboard(true) 
    },
    { 
      icon: MoreHorizontal, 
      label: 'More', 
      gradient: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
      shadow: '#8B5CF6',
      onClick: () => {} 
    }
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
    <div className="flex flex-col h-screen relative" style={{ backgroundColor: '#FEF7FF' }}>
      {/* Clipboard Overlay - Material You Bottom Sheet */}
      <AnimatePresence>
        {showClipboard && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setShowClipboard(false)}
              className="absolute inset-0 z-40"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="absolute inset-x-0 top-0 bottom-0 z-50 overflow-hidden elevation-5"
              style={{ 
                height: '70%', 
                marginTop: '30%',
                backgroundColor: '#FFFFFF',
                borderTopLeftRadius: '32px',
                borderTopRightRadius: '32px'
              }}
            >
              <div className="h-full flex flex-col">
                <div 
                  className="flex items-center justify-between elevation-1"
                  style={{ 
                    padding: '16px 20px',
                    borderBottom: '1px solid #E7E0EC'
                  }}
                >
                  <h3 className="title-large" style={{ color: '#1C1B1F' }}>
                    Clipboard Manager
                  </h3>
                  <button
                    onClick={() => setShowClipboard(false)}
                    className="flex items-center justify-center touch-feedback"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '20px',
                      backgroundColor: '#E8DEF8',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'background-color 150ms'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#D7C6ED'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#E8DEF8'}
                  >
                    <ChevronDown className="w-5 h-5" style={{ color: '#1C1B1F' }} strokeWidth={2.5} />
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

      {/* Demo Input Area - Material You surface */}
      <div className="flex-1 flex items-center justify-center" style={{ padding: '24px' }}>
        <div 
          className="w-full max-w-md elevation-2"
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '28px',
            padding: '24px'
          }}
        >
          <div className="body-small mb-3" style={{ color: '#79747E' }}>
            Type something...
          </div>
          <div className="title-large" style={{ minHeight: '60px', color: '#1C1B1F' }}>
            {inputText}
            <span className="animate-pulse">|</span>
          </div>
        </div>
      </div>

      {/* Keyboard Container - Material You surface with elevation */}
      <div 
        className="elevation-4" 
        style={{
          backgroundColor: '#ECE6F0',
          borderTopLeftRadius: '32px',
          borderTopRightRadius: '32px',
          paddingBottom: '24px'
        }}
      >
        {/* Toolbar / Suggestions Bar */}
        <div 
          style={{ 
            padding: '12px',
            minHeight: '56px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          {/* Arrow Button - Material You filled tonal button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowToolbar(!showToolbar)}
            className="flex items-center justify-center touch-feedback"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '22px',
              backgroundColor: showToolbar ? '#6750A4' : '#E8DEF8',
              border: 'none',
              cursor: 'pointer',
              flexShrink: 0,
              boxShadow: showToolbar ? 'var(--elevation-2)' : 'none',
              transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            aria-label="Toolbar"
          >
            <ChevronLeft 
              className="w-5 h-5" 
              style={{ color: showToolbar ? '#FFFFFF' : '#1C1B1F' }} 
              strokeWidth={2.5} 
            />
          </motion.button>

          {/* Middle Section - Toolbar Icons or Suggestions */}
          <div 
            style={{ 
              flex: 1,
              minWidth: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
              overflow: 'hidden'
            }}
          >
            <AnimatePresence mode="wait">
              {showToolbar && !isTyping ? (
                /* Toolbar Icons - Material You gradient icon buttons */
                <motion.div
                  key="toolbar"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="w-full overflow-x-auto scrollbar-hide"
                >
                  <div 
                    style={{ 
                      display: 'flex',
                      gap: '8px',
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                      width: '100%',
                      padding: '0 8px'
                    }}
                  >
                    {toolbarIcons.map((item, index) => (
                      <motion.button
                        key={item.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          delay: index * 0.04, 
                          type: "spring", 
                          stiffness: 300 
                        }}
                        whileTap={{ scale: 0.9 }}
                        onClick={item.onClick}
                        className="flex items-center justify-center touch-feedback"
                        style={{
                          width: '40px',
                          height: '40px',
                          flexShrink: 0,
                          background: item.gradient,
                          borderRadius: '20px',
                          border: 'none',
                          cursor: 'pointer',
                          boxShadow: `0 4px 8px ${item.shadow}40`,
                          transition: 'box-shadow 150ms'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.boxShadow = `0 6px 12px ${item.shadow}50`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.boxShadow = `0 4px 8px ${item.shadow}40`;
                        }}
                        aria-label={item.label}
                      >
                        <item.icon className="w-4 h-4 text-white" strokeWidth={2.5} />
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              ) : isTyping ? (
                /* Suggestion Bar - Material You chips */
                <motion.div
                  key="suggestions"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                  style={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    width: '100%'
                  }}
                >
                  <div style={{ display: 'flex', gap: '8px', width: '100%' }}>
                    {suggestions.map((suggestion, index) => (
                      <motion.button
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="label-large touch-feedback"
                        style={{
                          flex: 1,
                          padding: '10px 12px',
                          backgroundColor: '#FFFFFF',
                          borderRadius: '16px',
                          color: '#1C1B1F',
                          border: 'none',
                          cursor: 'pointer',
                          boxShadow: 'var(--elevation-1)',
                          minWidth: 0,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          transition: 'background-color 150ms'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F3EDF7'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFFFFF'}
                      >
                        {suggestion}
                      </motion.button>
                    ))}
                  </div>
                  
                  {/* More Suggestions Button */}
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setShowMoreSuggestions(!showMoreSuggestions)}
                      className="flex items-center justify-center touch-feedback"
                      style={{
                        width: '32px',
                        height: '32px',
                        backgroundColor: '#E8DEF8',
                        borderRadius: '16px',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'background-color 150ms'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#D7C6ED'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#E8DEF8'}
                      aria-label="More suggestions"
                    >
                      <motion.div
                        animate={{ rotate: showMoreSuggestions ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-4 h-4" style={{ color: '#1C1B1F' }} strokeWidth={2.5} />
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
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                          {allSuggestions.slice(3).map((suggestion, index) => (
                            <motion.button
                              key={index}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.03 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handleSuggestionClick(suggestion)}
                              className="body-medium touch-feedback"
                              style={{
                                padding: '8px 12px',
                                backgroundColor: '#FFFFFF',
                                borderRadius: '12px',
                                color: '#1C1B1F',
                                border: 'none',
                                cursor: 'pointer',
                                boxShadow: 'var(--elevation-1)',
                                transition: 'background-color 150ms'
                              }}
                              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F3EDF7'}
                              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFFFFF'}
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
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ width: '100%' }}
                />
              )}
            </AnimatePresence>
          </div>

          {/* Mic Button - Material You FAB style */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsRecording(!isRecording)}
            className="flex items-center justify-center touch-feedback"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '22px',
              background: isRecording 
                ? 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)'
                : 'linear-gradient(135deg, #F87171 0%, #EF4444 100%)',
              border: 'none',
              cursor: 'pointer',
              flexShrink: 0,
              position: 'relative',
              boxShadow: isRecording 
                ? '0 6px 12px rgba(239, 68, 68, 0.4)'
                : '0 4px 8px rgba(239, 68, 68, 0.3)',
              transition: 'box-shadow 150ms'
            }}
            aria-label="Voice input"
          >
            {isRecording && (
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: '#EF4444' }}
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
            <Mic 
              className="w-5 h-5 text-white relative z-10" 
              style={{ transform: isRecording ? 'scale(1.1)' : 'scale(1)' }}
              strokeWidth={2.5} 
            />
          </motion.button>
        </div>

        {/* Keyboard Keys - Material You style */}
        <div style={{ padding: '0 8px', marginTop: '8px' }}>
          {/* Row 1 */}
          <div style={{ display: 'flex', gap: '6px', marginBottom: '10px' }}>
            {keyboardRows[0].map((item) => (
              <button
                key={item.key}
                onClick={() => handleKeyPress(item.key)}
                className="touch-feedback"
                style={{
                  flex: 1,
                  height: '48px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: 'var(--elevation-1)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  transition: 'all 150ms'
                }}
              >
                <span 
                  className="label-small"
                  style={{ 
                    color: '#79747E',
                    position: 'absolute',
                    top: '6px',
                    left: '6px'
                  }}
                >
                  {item.number}
                </span>
                <span className="title-medium" style={{ color: '#1C1B1F' }}>
                  {item.key.toUpperCase()}
                </span>
              </button>
            ))}
          </div>

          {/* Row 2 */}
          <div style={{ display: 'flex', gap: '6px', marginBottom: '10px', padding: '0 16px' }}>
            {keyboardRows[1].map((item) => (
              <button
                key={item.key}
                onClick={() => handleKeyPress(item.key)}
                className="touch-feedback"
                style={{
                  flex: 1,
                  height: '48px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: 'var(--elevation-1)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  transition: 'all 150ms'
                }}
              >
                <span 
                  className="label-small"
                  style={{ 
                    color: '#79747E',
                    position: 'absolute',
                    top: '6px',
                    left: '6px'
                  }}
                >
                  {item.symbol}
                </span>
                <span className="title-medium" style={{ color: '#1C1B1F' }}>
                  {item.key.toUpperCase()}
                </span>
              </button>
            ))}
          </div>

          {/* Row 3 */}
          <div style={{ display: 'flex', gap: '6px', marginBottom: '10px' }}>
            <button
              className="touch-feedback"
              style={{
                width: '48px',
                height: '48px',
                backgroundColor: '#D0BCFF',
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: 'var(--elevation-1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 150ms'
              }}
            >
              <svg className="w-5 h-5" style={{ color: '#1C1B1F' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </button>
            {keyboardRows[2].map((item) => (
              <button
                key={item.key}
                onClick={() => handleKeyPress(item.key)}
                className="touch-feedback"
                style={{
                  flex: 1,
                  height: '48px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: 'var(--elevation-1)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  transition: 'all 150ms'
                }}
              >
                <span 
                  className="label-small"
                  style={{ 
                    color: '#79747E',
                    position: 'absolute',
                    top: '6px',
                    left: '6px'
                  }}
                >
                  {item.symbol}
                </span>
                <span className="title-medium" style={{ color: '#1C1B1F' }}>
                  {item.key.toUpperCase()}
                </span>
              </button>
            ))}
            <button
              onClick={handleBackspace}
              className="touch-feedback"
              style={{
                width: '48px',
                height: '48px',
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: 'var(--elevation-1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 150ms'
              }}
            >
              <svg className="w-6 h-6" style={{ color: '#1C1B1F' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
              </svg>
            </button>
          </div>

          {/* Row 4 - Bottom Row */}
          <div style={{ display: 'flex', gap: '6px', marginBottom: '12px' }}>
            <button 
              className="label-medium touch-feedback"
              style={{
                padding: '0 16px',
                height: '48px',
                backgroundColor: '#D0BCFF',
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: 'var(--elevation-1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1C1B1F',
                transition: 'all 150ms'
              }}
            >
              ?123
            </button>
            
            {/* Combined Comma & Emoji Button */}
            <div style={{ position: 'relative' }}>
              <button 
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                className="touch-feedback"
                style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: 'var(--elevation-1)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 150ms'
                }}
              >
                <span className="label-small" style={{ color: '#79747E' }}>,</span>
                <span style={{ fontSize: '16px' }}>😊</span>
              </button>
              
              {/* Emoji Picker Popup */}
              <AnimatePresence>
                {showEmojiPicker && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="elevation-3"
                    style={{
                      position: 'absolute',
                      bottom: '100%',
                      marginBottom: '8px',
                      left: 0,
                      backgroundColor: '#FFFFFF',
                      borderRadius: '20px',
                      padding: '12px',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(4, 1fr)',
                      gap: '8px',
                      zIndex: 50
                    }}
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
                        className="touch-feedback"
                        style={{
                          width: '40px',
                          height: '40px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: 'transparent',
                          border: 'none',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          transition: 'background-color 150ms'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F3EDF7'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                      >
                        <span style={{ fontSize: '20px' }}>{emoji}</span>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Globe Icon - Language Switcher */}
            <button 
              className="touch-feedback"
              style={{
                width: '48px',
                height: '48px',
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: 'var(--elevation-1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 150ms'
              }}
            >
              <Globe className="w-5 h-5" style={{ color: '#1C1B1F' }} strokeWidth={2} />
            </button>

            <button 
              onClick={() => handleKeyPress(' ')}
              className="body-medium touch-feedback"
              style={{
                flex: 1,
                height: '48px',
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: 'var(--elevation-1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#49454F',
                transition: 'all 150ms'
              }}
            >
              English (US)
            </button>
            <button 
              onClick={() => handleKeyPress('.')}
              className="title-medium touch-feedback"
              style={{
                width: '48px',
                height: '48px',
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: 'var(--elevation-1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1C1B1F',
                transition: 'all 150ms'
              }}
            >
              .
            </button>
            <button 
              className="touch-feedback"
              style={{
                padding: '0 16px',
                height: '48px',
                background: 'linear-gradient(135deg, #4ADE80 0%, #10B981 100%)',
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 8px rgba(74, 222, 128, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'box-shadow 150ms'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 6px 12px rgba(74, 222, 128, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(74, 222, 128, 0.3)';
              }}
            >
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Bottom Controls */}
          <div 
            style={{ 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '16px',
              padding: '0 16px'
            }}
          >
            <button 
              className="touch-feedback"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 150ms'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(232, 222, 248, 0.5)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <svg className="w-5 h-5" style={{ color: '#49454F' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div style={{ flex: 1 }} />
            <button 
              className="touch-feedback"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 150ms'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(232, 222, 248, 0.5)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <svg className="w-5 h-5" style={{ color: '#49454F' }} viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Home Indicator - Material You gesture indicator */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
          <div 
            style={{ 
              width: '128px',
              height: '4px',
              backgroundColor: 'rgba(28, 27, 31, 0.3)',
              borderRadius: '2px'
            }}
          />
        </div>
      </div>
    </div>
  );
}
