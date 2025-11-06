import { motion } from 'motion/react';
import { Heart, Sparkles, TrendingUp, Users, Zap } from 'lucide-react';

interface DonationThankYouProps {
  onContinue: () => void;
}

export function DonationThankYou({ onContinue }: DonationThankYouProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-5 sm:p-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0,
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 100
            }}
            animate={{ 
              opacity: [0, 1, 0],
              y: -100,
            }}
            transition={{ 
              duration: 3 + Math.random() * 2,
              delay: i * 0.2,
              repeat: Infinity,
              repeatDelay: 2
            }}
            className="absolute"
          >
            <Heart className="w-4 h-4 text-pink-400" fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <div className="w-full max-w-sm relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          {/* Success Icon with Pulse */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.2
            }}
            className="mb-8 relative"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-32 h-32 mx-auto bg-gradient-to-br from-pink-400 via-rose-400 to-red-500 rounded-full flex items-center justify-center shadow-2xl shadow-pink-500/40"
            >
              <Heart className="w-16 h-16 text-white fill-white" strokeWidth={2} />
            </motion.div>
            
            {/* Sparkles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  x: Math.cos(i * 45 * Math.PI / 180) * 80,
                  y: Math.sin(i * 45 * Math.PI / 180) * 80,
                }}
                transition={{ 
                  duration: 1.5,
                  delay: 0.3 + i * 0.1,
                  repeat: Infinity,
                  repeatDelay: 1.5
                }}
                className="absolute top-1/2 left-1/2"
              >
                <Sparkles className="w-5 h-5 text-amber-400" fill="currentColor" />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h1 className="mb-3 text-[#1C1B1F]">
              Thank You! 🎉
            </h1>
            <p className="text-[#49454F] mb-2 px-4">
              Your generous support means the world to us
            </p>
            <p className="text-[#79747E] text-sm mb-8 px-4">
              You're helping us build something special ❤️
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-gradient-to-br from-[#FFE8F7] to-[#F3EDF7] rounded-[28px] p-6 mb-8 shadow-sm"
          >
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Users, value: '15K+', label: 'Supporters', color: 'from-pink-400 to-rose-500' },
                { icon: Zap, value: '80+', label: 'Features', color: 'from-purple-400 to-indigo-500' },
                { icon: TrendingUp, value: '100%', label: 'Free', color: 'from-green-400 to-emerald-500' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="text-center"
                >
                  <div className={`w-12 h-12 mx-auto mb-2 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-md`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-[#1C1B1F] mb-0.5">{stat.value}</div>
                  <div className="text-[#79747E] text-xs">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Impact Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="bg-[#E8F5E9] rounded-[28px] p-5 mb-6"
          >
            <p className="text-[#1B5E20] text-sm">
              ✨ Your donation helps us keep Kavi Kannada free, private, and ad-free for everyone
            </p>
          </motion.div>

          {/* Continue Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            whileTap={{ scale: 0.97 }}
            onClick={onContinue}
            className="w-full h-14 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-pink-500/30 transition-all duration-300"
          >
            Continue to Settings
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
