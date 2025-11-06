import { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { KeyboardSelection } from './components/KeyboardSelection';
import { ThankYouScreen } from './components/ThankYouScreen';
import { DonationScreen } from './components/DonationScreen';
import { DonationThankYou } from './components/DonationThankYou';
import { DonationExplanation } from './components/DonationExplanation';
import { SettingsScreen } from './components/SettingsScreen';

type Screen = 'welcome' | 'keyboard-selection' | 'thank-you' | 'donation' | 'donation-thank-you' | 'donation-explanation' | 'settings';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');

  return (
    <div className="min-h-screen bg-[#FEF7FF]">
      {currentScreen === 'welcome' && (
        <WelcomeScreen onNext={() => setCurrentScreen('keyboard-selection')} />
      )}
      {currentScreen === 'keyboard-selection' && (
        <KeyboardSelection onNext={() => setCurrentScreen('thank-you')} />
      )}
      {currentScreen === 'thank-you' && (
        <ThankYouScreen 
          onDonate={() => setCurrentScreen('donation')}
          onSettings={() => setCurrentScreen('settings')}
        />
      )}
      {currentScreen === 'donation' && (
        <DonationScreen 
          onSuccess={() => setCurrentScreen('donation-thank-you')}
          onExplain={() => setCurrentScreen('donation-explanation')}
        />
      )}
      {currentScreen === 'donation-thank-you' && (
        <DonationThankYou onContinue={() => setCurrentScreen('settings')} />
      )}
      {currentScreen === 'donation-explanation' && (
        <DonationExplanation 
          onDonate={() => setCurrentScreen('donation')}
          onSettings={() => setCurrentScreen('settings')}
        />
      )}
      {currentScreen === 'settings' && (
        <SettingsScreen />
      )}
    </div>
  );
}
