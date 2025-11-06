import { motion } from 'motion/react';
import { CheckCircle2, Heart, Settings } from 'lucide-react';

interface ThankYouScreenProps {
  onDonate: () => void;
  onSettings: () => void;
  onKeyboardDemo?: () => void;
}

export function ThankYouScreen({ onDonate, onSettings, onKeyboardDemo }: ThankYouScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-5 sm:p-6 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-3xl" />
      
      <div className="w-full max-w-sm relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              delay: 0.2, 
              type: "spring", 
              stiffness: 200,
              damping: 12
            }}
            className="mb-8 relative"
          >
            <div className="w-28 h-28 mx-auto bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-xl shadow-green-500/30">
              <CheckCircle2 className="w-16 h-16 text-white" strokeWidth={2.5} />
            </div>
            {/* Particle effects */}
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
                  ease: "easeOut"
                }}
                className="absolute top-1/2 left-1/2 w-2 h-2 bg-green-400 rounded-full"
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h1 className="mb-3 text-[#1C1B1F]">
              You're All Set!
            </h1>
            <p className="text-[#49454F] mb-10 px-2">
              Kavi Kannada is ready to enhance your typing experience
            </p>
          </motion.div>

          {/* Support Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="bg-gradient-to-br from-[#FFE8F7] to-[#F3EDF7] rounded-[28px] p-6 mb-6 shadow-sm"
          >
            <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center shadow-md shadow-pink-500/30">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <h3 className="mb-2 text-[#1C1B1F]">Love Kavi Kannada?</h3>
            <p className="text-[#49454F] text-sm">
              Support our development and help us build more amazing features for everyone
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="space-y-3"
          >
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={onDonate}
              className="w-full h-14 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-pink-500/30 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Heart className="w-5 h-5" />
              <span>Support with a Donation</span>
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={onSettings}
              className="w-full h-14 bg-[#E8DEF8] text-[#6750A4] rounded-full hover:bg-[#D0BCFF]/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Settings className="w-5 h-5" />
              <span>Explore Settings</span>
            </motion.button>

            {onKeyboardDemo && (
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={onKeyboardDemo}
                className="w-full h-12 text-[#6750A4] rounded-full hover:bg-[#E8DEF8]/30 transition-all duration-300"
              >
                <span className="text-sm">Skip to Keyboard Demo</span>
              </motion.button>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
