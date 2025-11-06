import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Keyboard } from 'lucide-react';
import appLogo from 'figma:asset/c63877dc43926dc77537ac1543f6fe54895cb099.png';

interface KeyboardSelectionProps {
  onNext: () => void;
}

export function KeyboardSelection({ onNext }: KeyboardSelectionProps) {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedKeyboard, setSelectedKeyboard] = useState('kavi-kannada');

  const keyboards = [
    { id: 'kavi-kannada', name: 'Kavi Kannada Keyboard', subtitle: 'ಕನ್ನಡ (India)', recommended: true },
    { id: 'kavi-english', name: 'Kavi Kannada Keyboard', subtitle: 'English (US)', recommended: false },
    { id: 'gboard-uk', name: 'Gboard', subtitle: 'English (UK)', recommended: false },
    { id: 'samsung', name: 'Samsung Keyboard', subtitle: 'English (US)', recommended: false }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const handleSelect = (keyboardId: string) => {
    setSelectedKeyboard(keyboardId);
    setTimeout(() => {
      setShowPopup(false);
      setTimeout(() => {
        onNext();
      }, 350);
    }, 450);
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #FEF7FF 0%, #F3EDF7 100%)' }}>
      {/* Background Decorative Blob */}
      <div 
        className="absolute top-20 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full blur-3xl opacity-20" 
        style={{ background: 'linear-gradient(135deg, #D0BCFF 0%, #A855F7 100%)' }}
      />
      
      {/* App Logo & Status in Center */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="flex flex-col items-center justify-center pt-40 relative z-10 px-5"
      >
        {/* Logo Container with Material You elevation */}
        <div 
          className="w-28 h-28 rounded-[28px] mb-6 flex items-center justify-center elevation-3"
          style={{
            background: 'linear-gradient(135deg, #6750A4 0%, #7F67BE 100%)',
          }}
        >
          <img 
            src={appLogo} 
            alt="Kavi Kannada Keyboard" 
            className="w-20 h-20 object-contain"
          />
        </div>

        <h2 className="headline-medium mb-2" style={{ color: '#1C1B1F' }}>
          Kavi Kannada Keyboard
        </h2>
        <div className="flex items-center gap-2" style={{ color: '#49454F' }}>
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#4ADE80' }} />
          <span className="body-medium">Setup in progress...</span>
        </div>
      </motion.div>

      {/* Material You Bottom Sheet */}
      <AnimatePresence>
        {showPopup && (
          <>
            {/* Scrim with backdrop blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
              onClick={() => {
                setShowPopup(false);
                setTimeout(onNext, 300);
              }}
            />
            
            {/* Bottom Sheet */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 z-50"
              style={{ padding: '0 16px 16px' }}
            >
              <div 
                className="elevation-5 overflow-hidden"
                style={{
                  backgroundColor: '#FEF7FF',
                  borderRadius: '32px'
                }}
              >
                {/* Drag Handle */}
                <div className="flex justify-center pt-4 pb-2">
                  <div 
                    className="rounded-full" 
                    style={{ 
                      width: '32px', 
                      height: '4px', 
                      backgroundColor: '#CAC4D0' 
                    }}
                  />
                </div>

                {/* Sheet Header */}
                <div className="px-6 py-5 text-center">
                  <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#E8DEF8' }}>
                    <Keyboard className="w-6 h-6" style={{ color: '#6750A4' }} />
                  </div>
                  <h3 className="title-large mb-2" style={{ color: '#1C1B1F' }}>
                    Select Keyboard
                  </h3>
                  <p className="body-medium" style={{ color: '#49454F' }}>
                    Choose your preferred input method
                  </p>
                </div>

                {/* Keyboard List with Material You styling */}
                <div className="px-5 pb-4 max-h-[60vh] overflow-y-auto scrollbar-hide">
                  {keyboards.map((keyboard, index) => (
                    <motion.button
                      key={keyboard.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        delay: index * 0.04,
                        duration: 0.3,
                        ease: [0.4, 0, 0.2, 1]
                      }}
                      onClick={() => handleSelect(keyboard.id)}
                      className="w-full mb-3 last:mb-0 touch-feedback"
                      style={{
                        backgroundColor: selectedKeyboard === keyboard.id ? '#E8DEF8' : '#F3EDF7',
                        borderRadius: '20px',
                        padding: '16px 20px',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
                        boxShadow: selectedKeyboard === keyboard.id ? 'var(--elevation-1)' : 'none'
                      }}
                      onMouseEnter={(e) => {
                        if (selectedKeyboard !== keyboard.id) {
                          e.currentTarget.style.backgroundColor = '#EAE6EE';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (selectedKeyboard !== keyboard.id) {
                          e.currentTarget.style.backgroundColor = '#F3EDF7';
                        }
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1 text-left">
                          <div className="flex items-center gap-2">
                            <span className="title-medium" style={{ color: '#1C1B1F' }}>
                              {keyboard.name}
                            </span>
                            {keyboard.recommended && (
                              <span 
                                className="label-small px-2 py-0.5 rounded-full"
                                style={{ 
                                  backgroundColor: '#D0F0C0', 
                                  color: '#1D6F3A' 
                                }}
                              >
                                Recommended
                              </span>
                            )}
                          </div>
                          {keyboard.subtitle && (
                            <div className="body-medium mt-1" style={{ color: '#49454F' }}>
                              {keyboard.subtitle}
                            </div>
                          )}
                        </div>
                        
                        {/* Radio Button - Material You style */}
                        <div className="ml-4">
                          <div 
                            className="flex items-center justify-center rounded-full transition-all duration-150"
                            style={{
                              width: '24px',
                              height: '24px',
                              border: selectedKeyboard === keyboard.id ? '2px solid #6750A4' : '2px solid #79747E',
                              backgroundColor: selectedKeyboard === keyboard.id ? '#6750A4' : 'transparent'
                            }}
                          >
                            {selectedKeyboard === keyboard.id && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                              >
                                <Check className="w-4 h-4 text-white" />
                              </motion.div>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Text Button - Material You */}
                <div className="px-5 pb-6 pt-2">
                  <button
                    onClick={() => {
                      setShowPopup(false);
                      setTimeout(onNext, 300);
                    }}
                    className="w-full label-large touch-feedback"
                    style={{
                      height: '48px',
                      color: '#6750A4',
                      backgroundColor: 'transparent',
                      border: 'none',
                      borderRadius: '24px',
                      cursor: 'pointer',
                      transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(103, 80, 164, 0.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    Skip for now
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
