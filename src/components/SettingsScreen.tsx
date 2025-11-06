import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Palette, 
  Volume2, 
  Vibrate, 
  Type, 
  Languages,
  Info,
  ChevronRight,
  Moon,
  Sparkles,
  Shield,
  Bell,
  Zap
} from 'lucide-react';
import { Switch } from './ui/switch';
import appLogo from 'figma:asset/c63877dc43926dc77537ac1543f6fe54895cb099.png';

export function SettingsScreen() {
  const [settings, setSettings] = useState({
    keyBorders: true,
    sound: false,
    vibration: true,
    autoCorrection: true,
    autoCapitalization: true,
    darkMode: false,
    notifications: true
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const settingsSections = [
    {
      title: 'Appearance',
      items: [
        { 
          icon: Palette, 
          label: 'Themes', 
          description: 'Customize colors',
          hasArrow: true,
          color: 'from-pink-400 to-rose-500'
        },
        { 
          icon: Moon, 
          label: 'Dark Mode', 
          hasSwitch: true,
          settingKey: 'darkMode' as const,
          color: 'from-indigo-400 to-purple-500'
        },
        { 
          icon: Sparkles, 
          label: 'Key Borders', 
          hasSwitch: true,
          settingKey: 'keyBorders' as const,
          color: 'from-blue-400 to-cyan-500'
        }
      ]
    },
    {
      title: 'Feedback',
      items: [
        { 
          icon: Volume2, 
          label: 'Sound on Keypress', 
          hasSwitch: true,
          settingKey: 'sound' as const,
          color: 'from-amber-400 to-orange-500'
        },
        { 
          icon: Vibrate, 
          label: 'Haptic Feedback', 
          hasSwitch: true,
          settingKey: 'vibration' as const,
          color: 'from-purple-400 to-pink-500'
        },
        { 
          icon: Bell, 
          label: 'Notifications', 
          hasSwitch: true,
          settingKey: 'notifications' as const,
          color: 'from-red-400 to-rose-500'
        }
      ]
    },
    {
      title: 'Typing',
      items: [
        { 
          icon: Zap, 
          label: 'Auto-correction', 
          hasSwitch: true,
          settingKey: 'autoCorrection' as const,
          color: 'from-green-400 to-emerald-500'
        },
        { 
          icon: Type, 
          label: 'Auto-capitalization', 
          hasSwitch: true,
          settingKey: 'autoCapitalization' as const,
          color: 'from-teal-400 to-cyan-500'
        },
        { 
          icon: Languages, 
          label: 'Languages', 
          description: '3 active',
          hasArrow: true,
          color: 'from-violet-400 to-purple-500'
        }
      ]
    },
    {
      title: 'About',
      items: [
        { 
          icon: Shield, 
          label: 'Privacy Policy', 
          hasArrow: true,
          color: 'from-blue-400 to-indigo-500'
        },
        { 
          icon: Info, 
          label: 'About Kavi Kannada', 
          description: 'Version 1.0.0',
          hasArrow: true,
          color: 'from-gray-400 to-gray-600'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FEF7FF] pb-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 bg-[#FEF7FF]/80 backdrop-blur-lg z-10 px-5 pt-8 pb-4"
      >
        <div className="flex items-center gap-4 mb-2">
          <img 
            src={appLogo} 
            alt="Kavi Kannada" 
            className="w-12 h-12 drop-shadow-lg"
          />
          <div>
            <h1 className="text-[#1C1B1F]">Settings</h1>
          </div>
        </div>
        <p className="text-[#49454F] text-sm ml-16">
          Customize your Kavi Kannada experience
        </p>
      </motion.div>

      {/* Settings List */}
      <div className="px-5 space-y-6 mt-4">
        {settingsSections.map((section, sectionIndex) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * sectionIndex, duration: 0.5 }}
          >
            <h3 className="mb-3 text-[#49454F] text-sm px-2">{section.title}</h3>
            <div className="bg-[#F3EDF7] rounded-[28px] overflow-hidden shadow-sm">
              {section.items.map((item, itemIndex) => (
                <div key={item.label}>
                  <motion.div
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      if (item.hasArrow) {
                        // Handle navigation
                      }
                    }}
                    className={`w-full p-4 flex items-center justify-between transition-colors ${
                      item.hasArrow ? 'cursor-pointer hover:bg-[#E8DEF8]/50' : ''
                    }`}
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-[18px] flex items-center justify-center shadow-sm flex-shrink-0`}>
                        <item.icon className="w-6 h-6 text-white" strokeWidth={2} />
                      </div>
                      <div className="text-left flex-1">
                        <div className="text-[#1C1B1F]">{item.label}</div>
                        {item.description && (
                          <div className="text-[#79747E] text-sm mt-0.5">{item.description}</div>
                        )}
                      </div>
                    </div>
                    <div className="flex-shrink-0 ml-3">
                      {item.hasSwitch && item.settingKey && (
                        <Switch 
                          checked={settings[item.settingKey]} 
                          onCheckedChange={() => toggleSetting(item.settingKey)}
                        />
                      )}
                      {item.hasArrow && (
                        <ChevronRight className="w-5 h-5 text-[#79747E]" />
                      )}
                    </div>
                  </motion.div>
                  {itemIndex < section.items.length - 1 && (
                    <div className="ml-20 h-px bg-[#E8DEF8]" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center pt-4 pb-2"
        >
          <p className="text-[#79747E] text-sm mb-2">
            Made with ❤️ for better typing
          </p>
          <p className="text-[#79747E] text-xs">
            Free • Private • No Ads
          </p>
        </motion.div>
      </div>
    </div>
  );
}
