import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Switch } from '../ui/switch';

interface TypingSettingsProps {
  onBack: () => void;
}

export function TypingSettings({ onBack }: TypingSettingsProps) {
  const [settings, setSettings] = useState({
    showNumberRow: false,
    autoCapitalization: true,
    autoCorrection: true,
    showSuggestions: true,
    suggestEmojis: false,
    doubleSpaceForPeriod: false,
    longPressForSymbols: true
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const typingOptions = [
    {
      key: 'showNumberRow' as const,
      label: 'Show Number Row',
      description: 'Display numbers above keyboard',
      icon: '123'
    },
    {
      key: 'autoCapitalization' as const,
      label: 'Auto-capitalization',
      description: 'Capitalize first letter of sentences',
      icon: 'Aa'
    },
    {
      key: 'autoCorrection' as const,
      label: 'Auto-correction',
      description: 'Automatically fix spelling mistakes',
      icon: '✓'
    },
    {
      key: 'showSuggestions' as const,
      label: 'Show Suggestions',
      description: 'Display word suggestions while typing',
      icon: '···'
    },
    {
      key: 'suggestEmojis' as const,
      label: 'Suggest Emojis',
      description: 'Show emoji suggestions',
      icon: '😊'
    },
    {
      key: 'doubleSpaceForPeriod' as const,
      label: 'Double-space for Period',
      description: 'Add period and space with double tap',
      icon: '··'
    },
    {
      key: 'longPressForSymbols' as const,
      label: 'Long-press for Symbols',
      description: 'Access symbols by holding keys',
      icon: '@#'
    }
  ];

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
            <h2 className="text-[#1C1B1F]">Typing Preferences</h2>
          </div>
        </div>
        <p className="text-[#49454F] text-sm ml-14">
          Customize your typing experience
        </p>
      </motion.div>

      {/* Typing Options */}
      <div className="px-5 mt-6">
        <div className="bg-[#F3EDF7] rounded-[28px] overflow-hidden shadow-sm">
          {typingOptions.map((option, index) => (
            <div key={option.key}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-[18px] flex items-center justify-center shadow-sm flex-shrink-0">
                    <span className="text-white">{option.icon}</span>
                  </div>
                  <div className="text-left flex-1">
                    <div className="text-[#1C1B1F]">{option.label}</div>
                    <div className="text-[#79747E] text-sm mt-0.5">{option.description}</div>
                  </div>
                </div>
                <div className="flex-shrink-0 ml-3">
                  <Switch 
                    checked={settings[option.key]} 
                    onCheckedChange={() => toggleSetting(option.key)}
                  />
                </div>
              </motion.div>
              {index < typingOptions.length - 1 && (
                <div className="ml-20 h-px bg-[#E8DEF8]" />
              )}
            </div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 p-5 bg-gradient-to-br from-[#E8DEF8] to-[#F3EDF7] rounded-[28px]"
        >
          <h3 className="text-[#1C1B1F] mb-3">Active Features</h3>
          <div className="flex flex-wrap gap-2">
            {Object.entries(settings)
              .filter(([_, value]) => value)
              .map(([key]) => {
                const option = typingOptions.find(o => o.key === key);
                return (
                  <div
                    key={key}
                    className="px-3 py-1.5 bg-[#6750A4] text-white rounded-full text-sm"
                  >
                    {option?.icon} {option?.label}
                  </div>
                );
              })}
          </div>
          {Object.values(settings).every(v => !v) && (
            <p className="text-[#79747E] text-sm">No features enabled</p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
