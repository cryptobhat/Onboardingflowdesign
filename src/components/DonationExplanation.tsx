import { motion } from 'motion/react';
import { Code, Users, Zap, Shield, Heart, Server, Sparkles } from 'lucide-react';

interface DonationExplanationProps {
  onDonate: () => void;
  onSettings: () => void;
}

export function DonationExplanation({ onDonate, onSettings }: DonationExplanationProps) {
  const reasons = [
    {
      icon: Code,
      title: 'Active Development',
      description: 'Continuous updates with new features and improvements',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'No ads, no tracking, no data collection',
      color: 'from-green-400 to-emerald-600'
    },
    {
      icon: Server,
      title: 'Infrastructure Costs',
      description: 'Servers, storage, and maintenance expenses',
      color: 'from-orange-400 to-red-500'
    },
    {
      icon: Zap,
      title: 'Free Forever',
      description: 'All features remain accessible to everyone',
      color: 'from-amber-400 to-yellow-500'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Your feedback shapes what we build next',
      color: 'from-purple-400 to-indigo-500'
    },
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'Research and development of new technologies',
      color: 'from-pink-400 to-rose-500'
    }
  ];

  return (
    <div className="min-h-screen p-5 sm:p-6 overflow-y-auto pb-24">
      <div className="w-full max-w-sm mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="text-center mb-8 pt-8">
            <motion.div
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="w-20 h-20 mx-auto mb-5 bg-gradient-to-br from-pink-400 to-rose-500 rounded-[24px] flex items-center justify-center shadow-xl shadow-pink-500/30"
            >
              <Heart className="w-10 h-10 text-white" fill="white" />
            </motion.div>
            <h2 className="mb-2 text-[#1C1B1F]">Why We Ask</h2>
            <p className="text-[#49454F]">
              Your support makes a real difference
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="space-y-3 mb-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.08, duration: 0.5 }}
                className="bg-[#F3EDF7] rounded-[24px] p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex gap-4 items-start">
                  <div className={`w-14 h-14 bg-gradient-to-br ${reason.color} rounded-[20px] flex items-center justify-center flex-shrink-0 shadow-md`}>
                    <reason.icon className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="mb-1 text-[#1C1B1F]">{reason.title}</h3>
                    <p className="text-[#49454F] text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Team Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="bg-gradient-to-br from-[#E8F5E9] to-[#F1F8E9] rounded-[24px] p-6 mb-6 relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 text-6xl text-green-400/20">"</div>
            <p className="text-[#1B5E20] text-sm mb-4 relative z-10 leading-relaxed">
              We believe great software should be accessible to everyone. Your donations help us maintain infrastructure, 
              develop new features, and keep Kavi Kannada completely free without compromising your privacy.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-[#1B5E20]">The Kavi Kannada Team</div>
                <div className="text-[#558B2F] text-xs">Building with ❤️</div>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="grid grid-cols-3 gap-3 mb-6"
          >
            {[
              { value: '100%', label: 'Open Source' },
              { value: '0', label: 'Ads' },
              { value: '∞', label: 'Free Features' }
            ].map((stat, index) => (
              <div key={stat.label} className="bg-[#E8DEF8] rounded-[20px] p-4 text-center">
                <div className="text-[#6750A4] mb-1">{stat.value}</div>
                <div className="text-[#49454F] text-xs">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Fixed Bottom Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="fixed bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#FEF7FF] via-[#FEF7FF] to-transparent"
      >
        <div className="w-full max-w-sm mx-auto space-y-3">
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={onDonate}
            className="w-full h-14 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-pink-500/30 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Heart className="w-5 h-5" />
            <span>Support Development</span>
          </motion.button>
          
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={onSettings}
            className="w-full h-12 text-[#6750A4] rounded-full hover:bg-[#E8DEF8]/50 transition-colors"
          >
            Maybe Later
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
