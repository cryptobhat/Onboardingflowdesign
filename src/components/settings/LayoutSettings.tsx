import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Check } from 'lucide-react';
import { Switch } from '../ui/switch';

interface LayoutSettingsProps {
  onBack: () => void;
}

const layouts = [
  { 
    id: 'kavi-modern', 
    name: 'Kavi - Modern', 
    description: 'Modern Kannada layout with predictive typing',
    language: 'ಕನ್ನಡ'
  },
  { 
    id: 'kavi-inscript', 
    name: 'Kavi - Inscript', 
    description: 'Standard Inscript layout for Kannada',
    language: 'ಕನ್ನಡ'
  },
  { 
    id: 'kavi-phonetic', 
    name: 'Kavi - Phonetic', 
    description: 'Type Kannada using English phonetics',
    language: 'ಕನ್ನಡ'
  },
  { 
    id: 'english-qwerty', 
    name: 'English (QWERTY)', 
    description: 'Standard English keyboard layout',
    language: 'EN'
  }
];

export function LayoutSettings({ onBack }: LayoutSettingsProps) {
  const [currentLayout, setCurrentLayout] = useState('kavi-modern');
  const [enabledLayouts, setEnabledLayouts] = useState({
    'kavi-modern': true,
    'kavi-inscript': true,
    'kavi-phonetic': true,
    'english-qwerty': true
  });

  const toggleLayout = (layoutId: string) => {
    const enabledCount = Object.values(enabledLayouts).filter(Boolean).length;
    // Prevent disabling all layouts or the current layout
    if (enabledLayouts[layoutId as keyof typeof enabledLayouts] && 
        (enabledCount === 1 || currentLayout === layoutId)) {
      return;
    }
    setEnabledLayouts(prev => ({ 
      ...prev, 
      [layoutId]: !prev[layoutId as keyof typeof enabledLayouts] 
    }));
  };

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
            <h2 className="text-[#1C1B1F]">Keyboard Layouts</h2>
          </div>
        </div>
        <p className="text-[#49454F] text-sm ml-14">
          Manage your keyboard layouts
        </p>
      </motion.div>

      {/* Current Layout */}
      <div className="px-5 mt-6">
        <h3 className="mb-3 text-[#49454F] text-sm px-2">Current Layout</h3>
        <div className="bg-gradient-to-br from-[#6750A4] to-[#7C5FA8] rounded-[28px] p-5 shadow-lg shadow-purple-500/20 mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white/80 text-sm">Active</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-white text-xs">
              {layouts.find(l => l.id === currentLayout)?.language}
            </span>
          </div>
          <h3 className="text-white mb-1">
            {layouts.find(l => l.id === currentLayout)?.name}
          </h3>
          <p className="text-white/70 text-sm">
            {layouts.find(l => l.id === currentLayout)?.description}
          </p>
        </div>

        {/* Manage Layouts */}
        <h3 className="mb-3 text-[#49454F] text-sm px-2">
          Manage Layouts ({Object.values(enabledLayouts).filter(Boolean).length} enabled)
        </h3>
        <div className="bg-[#F3EDF7] rounded-[28px] overflow-hidden shadow-sm">
          {layouts.map((layout, index) => (
            <div key={layout.id}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="p-4"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="text-[#1C1B1F]">{layout.name}</div>
                      <span className="px-2 py-0.5 bg-[#E8DEF8] rounded-full text-[#6750A4] text-xs">
                        {layout.language}
                      </span>
                      {currentLayout === layout.id && (
                        <span className="px-2 py-0.5 bg-[#6750A4] rounded-full text-white text-xs flex items-center gap-1">
                          <Check className="w-3 h-3" />
                          Active
                        </span>
                      )}
                    </div>
                    <div className="text-[#79747E] text-sm">{layout.description}</div>
                  </div>
                  <div className="flex gap-2 items-center">
                    {enabledLayouts[layout.id as keyof typeof enabledLayouts] && (
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setCurrentLayout(layout.id)}
                        disabled={currentLayout === layout.id}
                        className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                          currentLayout === layout.id
                            ? 'bg-[#E8DEF8] text-[#6750A4] cursor-default'
                            : 'bg-[#6750A4] text-white hover:bg-[#7C5FA8]'
                        }`}
                      >
                        {currentLayout === layout.id ? 'Active' : 'Use'}
                      </motion.button>
                    )}
                    <Switch 
                      checked={enabledLayouts[layout.id as keyof typeof enabledLayouts]} 
                      onCheckedChange={() => toggleLayout(layout.id)}
                      disabled={currentLayout === layout.id && enabledLayouts[layout.id as keyof typeof enabledLayouts]}
                    />
                  </div>
                </div>
              </motion.div>
              {index < layouts.length - 1 && (
                <div className="ml-4 h-px bg-[#E8DEF8]" />
              )}
            </div>
          ))}
        </div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 p-4 bg-[#E8F5E9] rounded-[20px]"
        >
          <p className="text-[#1B5E20] text-sm">
            💡 Swipe the spacebar left or right to quickly switch between enabled layouts
          </p>
        </motion.div>
      </div>
    </div>
  );
}
