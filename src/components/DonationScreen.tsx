import { useState } from 'react';
import { motion } from 'motion/react';
import { CreditCard, HelpCircle, IndianRupee } from 'lucide-react';

interface DonationScreenProps {
  onSuccess: () => void;
  onExplain: () => void;
}

const donationAmounts = [50, 100, 200, 500];

export function DonationScreen({ onSuccess, onExplain }: DonationScreenProps) {
  const [selectedAmount, setSelectedAmount] = useState<number>(100);
  const [customAmount, setCustomAmount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleDonation = () => {
    setIsProcessing(true);
    
    // Simulate UPI app popup and payment
    const upiApps = ['Google Pay', 'PhonePe', 'Paytm', 'BHIM'];
    const selectedApp = upiApps[Math.floor(Math.random() * upiApps.length)];
    
    setTimeout(() => {
      setIsProcessing(false);
      if (Math.random() > 0.2) {
        onSuccess();
      } else {
        alert(`Payment cancelled in ${selectedApp}`);
      }
    }, 1500);
  };

  const amount = customAmount ? parseInt(customAmount) : selectedAmount;

  return (
    <div className="min-h-screen flex items-center justify-center p-5 sm:p-6">
      <div className="w-full max-w-sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center shadow-lg shadow-pink-500/30">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="mb-2 text-[#1C1B1F]">Support Kavi Kannada</h2>
            <p className="text-[#49454F]">
              Choose an amount to donate
            </p>
          </div>

          {/* Amount Selection */}
          <div className="bg-[#F3EDF7] rounded-[28px] p-5 mb-4 shadow-sm">
            <div className="grid grid-cols-2 gap-3 mb-4">
              {donationAmounts.map((amt, index) => (
                <motion.button
                  key={amt}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSelectedAmount(amt);
                    setCustomAmount('');
                  }}
                  className={`h-16 rounded-3xl transition-all duration-300 ${
                    selectedAmount === amt && !customAmount
                      ? 'bg-[#6750A4] text-white shadow-md shadow-purple-500/30'
                      : 'bg-[#E8DEF8] text-[#1C1B1F] hover:bg-[#D0BCFF]'
                  }`}
                >
                  <div className="flex items-center justify-center gap-1">
                    <IndianRupee className="w-4 h-4" />
                    <span>{amt}</span>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="relative">
              <IndianRupee className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#49454F]" />
              <input
                type="number"
                placeholder="Custom amount"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(0);
                }}
                className="w-full h-14 pl-12 pr-5 bg-white text-[#1C1B1F] placeholder:text-[#79747E] rounded-3xl border-2 border-transparent focus:border-[#6750A4] outline-none transition-colors"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={handleDonation}
              disabled={!amount || isProcessing}
              className="w-full h-14 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
            >
              {isProcessing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <CreditCard className="w-5 h-5" />
                  <span>Pay ₹{amount || 0} via UPI</span>
                </>
              )}
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={onExplain}
              className="w-full h-12 text-[#6750A4] rounded-full hover:bg-[#E8DEF8]/50 transition-colors flex items-center justify-center gap-2"
            >
              <HelpCircle className="w-4 h-4" />
              <span>Why donate?</span>
            </motion.button>
          </div>

          {/* Security Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[#79747E] text-xs text-center mt-6"
          >
            🔒 Secure payment via UPI • No card details stored
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

function Heart({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );
}
