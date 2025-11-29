import React from 'react';
import './App.css';
import { DepthLayers } from './components/DepthLayers';
import { BeamsBackground } from './components/BeamsBackground';
import { EtherealShadow } from './components/EtherealShadow';
import InteractiveCursor from './components/InteractiveCursor';
import ScrollIndicator from './components/ScrollIndicator';
import MouseGlow from './components/MouseGlow';
import WhatsAppButton from './components/WhatsAppButton';
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
      <WhatsAppButton />
      <DepthLayers />
      <EtherealShadow
        color="rgba(99, 102, 241, 0.8)"
        animation={{ scale: 100, speed: 90 }}
        noise={{ opacity: 1, scale: 1.2 }}
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

