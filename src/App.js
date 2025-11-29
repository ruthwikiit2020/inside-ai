import React from 'react';
import './App.css';
import { BeamsBackground } from './components/BeamsBackground';
import { EtherealShadow } from './components/EtherealShadow';
import InteractiveCursor from './components/InteractiveCursor';
import ScrollIndicator from './components/ScrollIndicator';
import MouseGlow from './components/MouseGlow';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhatIsInsideAI from './components/WhatIsInsideAI';
import CharacterReality from './components/CharacterReality';
import KnowCharacters from './components/KnowCharacters';
import WhatCanDo from './components/WhatCanDo';
import TargetAudience from './components/TargetAudience';
import EarlyAccess from './components/EarlyAccess';
import SignUp from './components/SignUp';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <ScrollIndicator />
      <InteractiveCursor />
      <MouseGlow />
      <EtherealShadow
        color="rgba(99, 102, 241, 0.6)"
        animation={{ scale: 80, speed: 85 }}
        noise={{ opacity: 0.6, scale: 1.5 }}
        sizing="fill"
      />
      <BeamsBackground intensity="medium" />
      <div className="app-content">
        <Header />
        <Hero />
        <HowItWorks />
        <WhatIsInsideAI />
        <CharacterReality />
        <KnowCharacters />
        <WhatCanDo />
        <TargetAudience />
        <EarlyAccess />
        <SignUp />
        <Footer />
      </div>
    </div>
  );
}

export default App;

