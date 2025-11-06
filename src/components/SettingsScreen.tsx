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
  Shield,
  Trash2,
  Maximize2,
  MessageSquare,
  Keyboard
} from 'lucide-react';
import { Switch } from './ui/switch';
import appLogo from 'figma:asset/c63877dc43926dc77537ac1543f6fe54895cb099.png';
import { KeyboardHeightSettings } from './settings/KeyboardHeightSettings';
import { TypingSettings } from './settings/TypingSettings';
import { LayoutSettings } from './settings/LayoutSettings';

type SettingsPage = 'main' | 'keyboard-height' | 'typing' | 'layouts' | 'themes' | 'languages' | 'privacy' | 'about';

interface SettingsScreenProps {
  onKeyboardDemo?: () => void;
}

export function SettingsScreen({ onKeyboardDemo }: SettingsScreenProps = {}) {
  const [currentPage, setCurrentPage] = useState<SettingsPage>('main');
  const [settings, setSettings] = useState({
    keyBorders: true,
    sound: false,
    vibration: true,
    popup: true,
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
          icon: Maximize2, 
          label: 'Keyboard Height', 
          description: 'Medium',
          hasArrow: true,
          gradient: 'linear-gradient(135deg, #60A5FA 0%, #06B6D4 100%)',
          shadow: '#60A5FA',
          page: 'keyboard-height' as const
        },
        { 
          icon: Palette, 
          label: 'Themes', 
          description: 'Material You',
          hasArrow: true,
          gradient: 'linear-gradient(135deg, #EC4899 0%, #F43F5E 100%)',
          shadow: '#EC4899',
          page: 'themes' as const
        },
        { 
          icon: Moon, 
          label: 'Dark Mode', 
          hasSwitch: true,
          settingKey: 'darkMode' as const,
          gradient: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
          shadow: '#8B5CF6'
        }
      ]
    },
    {
      title: 'Feedback',
      items: [
        { 
          icon: Volume2, 
          label: 'Key Sound', 
          hasSwitch: true,
          settingKey: 'sound' as const,
          gradient: 'linear-gradient(135deg, #FBBF24 0%, #F97316 100%)',
          shadow: '#FBBF24'
        },
        { 
          icon: Vibrate, 
          label: 'Haptic Feedback', 
          hasSwitch: true,
          settingKey: 'vibration' as const,
          gradient: 'linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%)',
          shadow: '#A78BFA'
        },
        { 
          icon: MessageSquare, 
          label: 'Popup on Keypress', 
          hasSwitch: true,
          settingKey: 'popup' as const,
          gradient: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)',
          shadow: '#06B6D4'
        }
      ]
    },
    {
      title: 'Input',
      items: [
        { 
          icon: Type, 
          label: 'Typing Preferences', 
          description: '6 enabled',
          hasArrow: true,
          gradient: 'linear-gradient(135deg, #4ADE80 0%, #10B981 100%)',
          shadow: '#4ADE80',
          page: 'typing' as const
        },
        { 
          icon: Keyboard, 
          label: 'Keyboard Layouts', 
          description: '4 enabled',
          hasArrow: true,
          gradient: 'linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%)',
          shadow: '#A78BFA',
          page: 'layouts' as const
        },
        { 
          icon: Languages, 
          label: 'Languages', 
          description: 'Kannada, English',
          hasArrow: true,
          gradient: 'linear-gradient(135deg, #14B8A6 0%, #06B6D4 100%)',
          shadow: '#14B8A6',
          page: 'languages' as const
        }
      ]
    },
    {
      title: 'Privacy & Data',
      items: [
        { 
          icon: Trash2, 
          label: 'Clear User History', 
          hasArrow: true,
          gradient: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
          shadow: '#EF4444',
          page: 'privacy' as const
        },
        { 
          icon: Shield, 
          label: 'Privacy Policy', 
          hasArrow: true,
          gradient: 'linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)',
          shadow: '#3B82F6',
          page: 'privacy' as const
        }
      ]
    },
    {
      title: 'About',
      items: [
        { 
          icon: Info, 
          label: 'About Kavi Kannada', 
          description: 'Version 1.0.0',
          hasArrow: true,
          gradient: 'linear-gradient(135deg, #9CA3AF 0%, #6B7280 100%)',
          shadow: '#9CA3AF',
          page: 'about' as const
        }
      ]
    }
  ];

  if (currentPage === 'keyboard-height') {
    return <KeyboardHeightSettings onBack={() => setCurrentPage('main')} />;
  }

  if (currentPage === 'typing') {
    return <TypingSettings onBack={() => setCurrentPage('main')} />;
  }

  if (currentPage === 'layouts') {
    return <LayoutSettings onBack={() => setCurrentPage('main')} />;
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FEF7FF', paddingBottom: '32px' }}>
      {/* Material You Header - Sticky with elevation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className="sticky top-0 z-10 elevation-2"
        style={{
          backgroundColor: 'rgba(254, 247, 255, 0.95)',
          backdropFilter: 'blur(12px)',
          padding: '32px 20px 16px',
          borderBottom: '1px solid rgba(232, 222, 248, 0.5)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
          <div 
            className="elevation-2"
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #6750A4 0%, #7F67BE 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '8px'
            }}
          >
            <img 
              src={appLogo} 
              alt="Kavi Kannada" 
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
          <div>
            <h1 className="headline-medium" style={{ color: '#1C1B1F' }}>
              Settings
            </h1>
          </div>
        </div>
        <p className="body-medium" style={{ color: '#49454F', marginLeft: '64px' }}>
          Customize your Kavi Kannada experience
        </p>
      </motion.div>

      {/* Settings List - Material You cards */}
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '24px' }}>
        {settingsSections.map((section, sectionIndex) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.1 * sectionIndex, 
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1]
            }}
          >
            <h3 className="label-large" style={{ color: '#49454F', marginBottom: '12px', paddingLeft: '8px' }}>
              {section.title}
            </h3>
            <div 
              className="elevation-1"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                overflow: 'hidden'
              }}
            >
              {section.items.map((item, itemIndex) => (
                <div key={item.label}>
                  <motion.div
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      if (item.page) {
                        setCurrentPage(item.page);
                      }
                    }}
                    className="touch-feedback"
                    style={{
                      width: '100%',
                      padding: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: item.hasArrow ? 'pointer' : 'default',
                      transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1)',
                      backgroundColor: 'transparent'
                    }}
                    onMouseEnter={(e) => {
                      if (item.hasArrow) {
                        e.currentTarget.style.backgroundColor = '#F3EDF7';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1 }}>
                      <div 
                        className="flex items-center justify-center flex-shrink-0"
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '16px',
                          background: item.gradient,
                          boxShadow: `0 4px 8px ${item.shadow}30`
                        }}
                      >
                        <item.icon className="w-6 h-6 text-white" strokeWidth={2} />
                      </div>
                      <div style={{ textAlign: 'left', flex: 1 }}>
                        <div className="title-medium" style={{ color: '#1C1B1F' }}>
                          {item.label}
                        </div>
                        {item.description && (
                          <div className="body-small" style={{ color: '#79747E', marginTop: '2px' }}>
                            {item.description}
                          </div>
                        )}
                      </div>
                    </div>
                    <div style={{ flexShrink: 0, marginLeft: '12px' }}>
                      {item.hasSwitch && item.settingKey && (
                        <Switch 
                          checked={settings[item.settingKey]} 
                          onCheckedChange={() => toggleSetting(item.settingKey!)}
                        />
                      )}
                      {item.hasArrow && (
                        <ChevronRight className="w-5 h-5" style={{ color: '#79747E' }} />
                      )}
                    </div>
                  </motion.div>
                  {itemIndex < section.items.length - 1 && (
                    <div style={{ marginLeft: '80px', height: '1px', backgroundColor: '#E7E0EC' }} />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Keyboard Demo Button - Material You primary button */}
        {onKeyboardDemo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.5, 
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1]
            }}
          >
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={onKeyboardDemo}
              className="label-large text-white touch-feedback"
              style={{
                width: '100%',
                height: '56px',
                background: 'linear-gradient(135deg, #6750A4 0%, #7F67BE 100%)',
                borderRadius: '28px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 8px 16px rgba(103, 80, 164, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 20px rgba(103, 80, 164, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(103, 80, 164, 0.25)';
              }}
            >
              <Keyboard className="w-5 h-5" />
              <span>Try Keyboard Demo</span>
            </motion.button>
          </motion.div>
        )}

        {/* Footer - Material You typography */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            delay: 0.6, 
            duration: 0.4
          }}
          style={{ textAlign: 'center', paddingTop: '16px', paddingBottom: '8px' }}
        >
          <p className="body-medium" style={{ color: '#79747E', marginBottom: '8px' }}>
            Made with ❤️ for better typing
          </p>
          <p className="body-small" style={{ color: '#79747E' }}>
            Free • Private • No Ads
          </p>
        </motion.div>
      </div>
    </div>
  );
}
