import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Check } from 'lucide-react';

interface KeyboardHeightSettingsProps {
  onBack: () => void;
}

const heightOptions = [
  { id: 'small', label: 'Small', value: 0.85 },
  { id: 'medium', label: 'Medium', value: 1.0 },
  { id: 'large', label: 'Large', value: 1.15 },
  { id: 'extra-large', label: 'Extra Large', value: 1.3 }
];

export function KeyboardHeightSettings({ onBack }: KeyboardHeightSettingsProps) {
  const [selectedHeight, setSelectedHeight] = useState('medium');

  return (
    <div className="min-h-screen bg-[#FEF7FF] pb-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 bg-[#FEF7FF]/95 backdrop-blur-lg z-10 px-5 pt-8 pb-4 border-b border-[#E8DEF8]/50"
      >
        <div className="flex items-center gap-4 mb-2">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-[#E8DEF8] flex items-center justify-center hover:bg-[#D0BCFF] transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-[#1C1B1F]" />
          </motion.button>
          <div>
            <h2 className="text-[#1C1B1F]">Keyboard Height</h2>
          </div>
        </div>
        <p className="text-[#49454F] text-sm ml-14">
          Adjust keyboard size to your preference
        </p>
      </motion.div>

      {/* Height Options */}
      <div className="px-5 mt-6">
        <div className="bg-[#F3EDF7] rounded-[28px] overflow-hidden shadow-sm">
          {heightOptions.map((option, index) => (
            <div key={option.id}>
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedHeight(option.id)}
                className={`w-full p-4 flex items-center justify-between transition-colors ${
                  selectedHeight === option.id ? 'bg-[#E8DEF8]/70' : 'hover:bg-[#E8DEF8]/30'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="text-left">
                    <div className="text-[#1C1B1F]">{option.label}</div>
                    <div className="text-[#79747E] text-sm">{Math.round(option.value * 100)}% scale</div>
                  </div>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                  selectedHeight === option.id
                    ? 'border-[#6750A4] bg-[#6750A4]'
                    : 'border-[#79747E]'
                }`}>
                  {selectedHeight === option.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Check className="w-4 h-4 text-white" />
                    </motion.div>
                  )}
                </div>
              </motion.button>
              {index < heightOptions.length - 1 && (
                <div className="ml-4 h-px bg-[#E8DEF8]" />
              )}
            </div>
          ))}
        </div>

        {/* Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 bg-[#F3EDF7] rounded-[28px] p-6"
        >
          <h3 className="text-[#1C1B1F] mb-4 text-center">Preview</h3>
          <div className="bg-white rounded-[20px] p-4 shadow-sm">
            <div className="space-y-2">
              {/* Simulated keyboard preview */}
              {[0, 1, 2].map((row) => (
                <div key={row} className="flex gap-1 justify-center">
                  {[...Array(row === 2 ? 7 : 10)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-[#E8DEF8] rounded-lg flex items-center justify-center transition-all"
                      style={{
                        width: `${32 * heightOptions.find(h => h.id === selectedHeight)!.value}px`,
                        height: `${40 * heightOptions.find(h => h.id === selectedHeight)!.value}px`
                      }}
                    >
                      <span className="text-[#1C1B1F] text-xs">A</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 p-4 bg-[#E8F5E9] rounded-[20px]"
        >
          <p className="text-[#1B5E20] text-sm text-center">
            💡 Larger keyboards are easier to type on but take more screen space
          </p>
        </motion.div>
      </div>
    </div>
  );
}
