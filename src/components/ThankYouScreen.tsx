import { motion } from 'motion/react';
import { CheckCircle2, Heart, Settings } from 'lucide-react';

interface ThankYouScreenProps {
  onDonate: () => void;
  onSettings: () => void;
  onKeyboardDemo?: () => void;
}

export function ThankYouScreen({ onDonate, onSettings, onKeyboardDemo }: ThankYouScreenProps) {
  return (
    <div 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ 
        backgroundColor: '#FEF7FF',
        padding: '20px'
      }}
    >
      {/* Background Decorative Blob - Material You style */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{ 
          background: 'linear-gradient(135deg, #4ADE80 0%, #10B981 100%)'
        }}
      />
      
      <div className="w-full max-w-md relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="text-center"
        >
          {/* Success Icon - Material You elevation */}
          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              delay: 0.15, 
              type: "spring", 
              stiffness: 200,
              damping: 12
            }}
            className="mb-8 relative"
            style={{ height: '112px' }}
          >
            <div 
              className="w-28 h-28 mx-auto rounded-full flex items-center justify-center elevation-3"
              style={{
                background: 'linear-gradient(135deg, #4ADE80 0%, #10B981 100%)',
                boxShadow: '0 8px 16px rgba(74, 222, 128, 0.3)'
              }}
            >
              <CheckCircle2 className="w-16 h-16 text-white" strokeWidth={2.5} />
            </div>
            
            {/* Particle effects - Material You animation */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, x: 0, y: 0 }}
                animate={{ 
                  scale: [0, 1, 0],
                  x: Math.cos(i * 45 * Math.PI / 180) * 60,
                  y: Math.sin(i * 45 * Math.PI / 180) * 60,
                }}
                transition={{ 
                  duration: 1.2,
                  delay: 0.4 + i * 0.05,
                  ease: [0.4, 0, 0.2, 1]
                }}
                className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full"
                style={{ backgroundColor: '#4ADE80' }}
              />
            ))}
          </motion.div>

          {/* Title & Description - Material You typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <h1 className="headline-large mb-3" style={{ color: '#1C1B1F' }}>
              You're All Set!
            </h1>
            <p className="body-large mb-10 px-2" style={{ color: '#49454F' }}>
              Kavi Kannada is ready to enhance your typing experience
            </p>
          </motion.div>

          {/* Support Card - Material You feature card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="elevation-1"
            style={{
              background: 'linear-gradient(135deg, #FFE8F7 0%, #F3EDF7 100%)',
              borderRadius: '28px',
              padding: '24px',
              marginBottom: '24px'
            }}
          >
            <div 
              className="mx-auto mb-4 rounded-full flex items-center justify-center"
              style={{
                width: '56px',
                height: '56px',
                background: 'linear-gradient(135deg, #EC4899 0%, #F43F5E 100%)',
                boxShadow: '0 6px 12px rgba(236, 72, 153, 0.3)'
              }}
            >
              <Heart className="w-7 h-7 text-white" />
            </div>
            <h3 className="title-large mb-2" style={{ color: '#1C1B1F' }}>
              Love Kavi Kannada?
            </h3>
            <p className="body-medium" style={{ color: '#49454F' }}>
              Support our development and help us build more amazing features for everyone
            </p>
          </motion.div>

          {/* Action Buttons - Material You button styles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            style={{ 
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}
          >
            {/* Primary Button - Gradient */}
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={onDonate}
              className="label-large text-white touch-feedback"
              style={{
                width: '100%',
                height: '56px',
                background: 'linear-gradient(135deg, #EC4899 0%, #F43F5E 100%)',
                borderRadius: '28px',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 8px 16px rgba(236, 72, 153, 0.25)',
                transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 20px rgba(236, 72, 153, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(236, 72, 153, 0.25)';
              }}
            >
              <Heart className="w-5 h-5" />
              <span>Support with a Donation</span>
            </motion.button>

            {/* Secondary Button - Filled tonal */}
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={onSettings}
              className="label-large touch-feedback"
              style={{
                width: '100%',
                height: '56px',
                backgroundColor: '#E8DEF8',
                color: '#6750A4',
                borderRadius: '28px',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#D7C6ED';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#E8DEF8';
              }}
            >
              <Settings className="w-5 h-5" />
              <span>Explore Settings</span>
            </motion.button>

            {/* Text Button - Material You */}
            {onKeyboardDemo && (
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={onKeyboardDemo}
                className="label-large touch-feedback"
                style={{
                  width: '100%',
                  height: '48px',
                  backgroundColor: 'transparent',
                  color: '#6750A4',
                  borderRadius: '24px',
                  border: 'none',
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
                Skip to Keyboard Demo
              </motion.button>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
