import { motion } from 'motion/react';
import { Sparkles, Zap, Shield } from 'lucide-react';
import appLogo from 'figma:asset/c63877dc43926dc77537ac1543f6fe54895cb099.png';

interface WelcomeScreenProps {
  onNext: () => void;
}

export function WelcomeScreen({ onNext }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-5 sm:p-6">
      <div className="w-full max-w-sm">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          {/* App Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              delay: 0.2, 
              type: "spring", 
              stiffness: 180,
              damping: 15
            }}
            className="mb-8"
          >
            <img 
              src={appLogo} 
              alt="Kavi Kannada Keyboard" 
              className="w-28 h-28 mx-auto drop-shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h1 className="mb-3 text-[#1C1B1F]">
              Welcome to Kavi Kannada
            </h1>
            <p className="text-[#49454F] mb-10 px-4">
              Your smart keyboard designed for speed, privacy, and personalization
            </p>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="space-y-3 mb-10"
          >
            {[
              { icon: Zap, text: 'Lightning fast predictions', color: 'from-amber-400 to-orange-500' },
              { icon: Shield, text: 'Privacy-first design', color: 'from-green-400 to-emerald-500' },
              { icon: Sparkles, text: 'Beautiful themes & gestures', color: 'from-purple-400 to-pink-500' }
            ].map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                className="bg-[#F3EDF7] rounded-3xl p-5 flex items-center gap-4"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-md`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-[#1C1B1F] text-left">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            whileTap={{ scale: 0.97 }}
            onClick={onNext}
            className="w-full h-14 bg-[#6750A4] text-white rounded-full shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
          >
            Get Started
          </motion.button>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="text-[#79747E] text-sm mt-6"
          >
            Free forever • No ads • No tracking
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
