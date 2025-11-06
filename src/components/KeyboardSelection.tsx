import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check } from 'lucide-react';
import appLogo from 'figma:asset/c63877dc43926dc77537ac1543f6fe54895cb099.png';

interface KeyboardSelectionProps {
  onNext: () => void;
}

export function KeyboardSelection({ onNext }: KeyboardSelectionProps) {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedKeyboard, setSelectedKeyboard] = useState('kavi-kannada');

  const keyboards = [
    { id: 'kavi-kannada', name: 'Kavi Kannada Keyboard', subtitle: 'ಕನ್ನಡ (India)' },
    { id: 'kavi-english', name: 'Kavi Kannada Keyboard', subtitle: 'English (US)' },
    { id: 'gboard-uk', name: 'Gboard', subtitle: 'English (UK)' },
    { id: 'samsung', name: 'Samsung Keyboard', subtitle: 'English (US)' }
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
    <div className="min-h-screen bg-gradient-to-b from-[#FEF7FF] to-[#F3EDF7] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#D0BCFF]/20 rounded-full blur-3xl" />
      
      {/* App Icon in Center */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center justify-center pt-32 relative z-10"
      >
        <img 
          src={appLogo} 
          alt="Kavi Kannada Keyboard" 
          className="w-24 h-24 mb-6 drop-shadow-2xl"
        />
        <h2 className="text-[#1C1B1F]">Kavi Kannada Keyboard</h2>
        <p className="text-[#49454F] text-sm mt-2">Setup in progress...</p>
      </motion.div>

      {/* Bottom Sheet Popup */}
      <AnimatePresence>
        {showPopup && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => {
                setShowPopup(false);
                setTimeout(onNext, 300);
              }}
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 z-50"
            >
              <div className="mx-4 mb-4 bg-[#FEF7FF] rounded-[28px] overflow-hidden shadow-2xl">
                {/* Handle */}
                <div className="flex justify-center pt-4 pb-2">
                  <div className="w-8 h-1 bg-[#C4C7C5] rounded-full" />
                </div>

                {/* Header */}
                <div className="px-6 py-4 text-center">
                  <h3 className="text-[#1C1B1F]">Select Keyboard</h3>
                  <p className="text-[#49454F] text-sm mt-1">Choose your preferred input method</p>
                </div>

                {/* Keyboard List */}
                <div className="px-4 pb-4 max-h-[60vh] overflow-y-auto">
                  {keyboards.map((keyboard, index) => (
                    <motion.button
                      key={keyboard.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleSelect(keyboard.id)}
                      className="w-full mb-2 last:mb-0"
                    >
                      <div className={`p-4 rounded-3xl transition-all duration-300 ${
                        selectedKeyboard === keyboard.id
                          ? 'bg-[#E8DEF8] shadow-sm'
                          : 'bg-[#F3EDF7] hover:bg-[#E8DEF8]/50'
                      }`}>
                        <div className="flex items-center justify-between">
                          <div className="flex-1 text-left">
                            <div className="text-[#1C1B1F]">{keyboard.name}</div>
                            {keyboard.subtitle && (
                              <div className="text-[#49454F] text-sm mt-0.5">{keyboard.subtitle}</div>
                            )}
                          </div>
                          <div className="ml-4">
                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                              selectedKeyboard === keyboard.id
                                ? 'border-[#6750A4] bg-[#6750A4]'
                                : 'border-[#79747E]'
                            }`}>
                              {selectedKeyboard === keyboard.id && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ type: "spring", stiffness: 400 }}
                                >
                                  <Check className="w-4 h-4 text-white" />
                                </motion.div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Cancel Button */}
                <div className="px-4 pb-5 pt-2">
                  <button
                    onClick={() => {
                      setShowPopup(false);
                      setTimeout(onNext, 300);
                    }}
                    className="w-full h-12 text-[#6750A4] rounded-full hover:bg-[#E8DEF8]/50 transition-colors"
                  >
                    Skip
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
