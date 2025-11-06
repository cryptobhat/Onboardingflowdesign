import { motion } from 'motion/react';
import { Sparkles, Zap, Shield } from 'lucide-react';
import appLogo from 'figma:asset/c63877dc43926dc77537ac1543f6fe54895cb099.png';

interface WelcomeScreenProps {
  onNext: () => void;
}

export function WelcomeScreen({ onNext }: WelcomeScreenProps) {
  const features = [
    { 
      icon: Zap, 
      text: 'Lightning fast predictions', 
      gradient: 'linear-gradient(135deg, #FBBF24 0%, #F97316 100%)',
      shadow: '#FBBF24'
    },
    { 
      icon: Shield, 
      text: 'Privacy-first design', 
      gradient: 'linear-gradient(135deg, #4ADE80 0%, #10B981 100%)',
      shadow: '#4ADE80'
    },
    { 
      icon: Sparkles, 
      text: 'Beautiful themes & gestures', 
      gradient: 'linear-gradient(135deg, #6750A4 0%, #7F67BE 100%)',
      shadow: '#6750A4'
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#FEF7FF', padding: '20px' }}>
      {/* Background decorative blobs */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-30" style={{ background: 'linear-gradient(135deg, #D8B4FE 0%, #A855F7 100%)' }} />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-3xl opacity-20" style={{ background: 'linear-gradient(135deg, #F9A8D4 0%, #D8B4FE 100%)' }} />
      
      <div className="w-full max-w-md relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="text-center"
        >
          {/* App Logo with Material You style */}
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              delay: 0.1, 
              type: "spring", 
              stiffness: 200,
              damping: 12
            }}
            className="mb-8"
          >
            <div 
              className="w-32 h-32 mx-auto rounded-[32px] p-6 elevation-3"
              style={{ 
                background: 'linear-gradient(135deg, #6750A4 0%, #7F67BE 100%)',
              }}
            >
              <img 
                src={appLogo} 
                alt="Kavi Kannada" 
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          {/* Headline - Material You typography */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h1 className="headline-large mb-3" style={{ color: '#1C1B1F' }}>
              Welcome to<br />Kavi Kannada
            </h1>
            <p className="body-large mb-10 px-4" style={{ color: '#49454F' }}>
              Your smart keyboard designed for speed, privacy, and personalization
            </p>
          </motion.div>

          {/* Feature Pills - Material Design 3 style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="space-y-3 mb-10"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.5 + index * 0.08, 
                  duration: 0.4,
                  type: "spring",
                  stiffness: 300
                }}
                className="elevation-1 flex items-center gap-4"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '16px 20px'
                }}
              >
                <div 
                  className="flex items-center justify-center flex-shrink-0" 
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '16px',
                    background: feature.gradient,
                    boxShadow: `0 4px 12px ${feature.shadow}30`
                  }}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <span className="title-medium text-left" style={{ color: '#1C1B1F' }}>
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Primary CTA Button - Material You 2025 */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            whileTap={{ scale: 0.97 }}
            onClick={onNext}
            className="w-full label-large text-white touch-feedback"
            style={{
              height: '56px',
              borderRadius: '28px',
              background: 'linear-gradient(135deg, #6750A4 0%, #7F67BE 100%)',
              boxShadow: '0 8px 16px rgba(103, 80, 164, 0.25)',
              border: 'none',
              cursor: 'pointer',
              transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 12px 20px rgba(103, 80, 164, 0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(103, 80, 164, 0.25)';
            }}
          >
            Get Started
          </motion.button>

          {/* Footer text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.4 }}
            className="body-small mt-6"
            style={{ color: '#79747E' }}
          >
            Free forever • No ads • No tracking
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
