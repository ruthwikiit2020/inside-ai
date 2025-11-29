import React from 'react';
import {
  Home,
  Zap,
  Lightbulb,
  Theater,
  Brain,
  Target,
  Users,
  Rocket,
  Sparkles,
} from 'lucide-react';
import { Dock, DockIcon, DockItem, DockLabel } from './Dock';
import './DockNavigation.css';

const DockNavigation = ({ isHeader = false }) => {
  const navigationData = [
    {
      id: 0,
      title: 'Home',
      icon: <Home className="dock-nav-icon" />,
    },
    {
      id: 1,
      title: 'How It Works',
      icon: <Zap className="dock-nav-icon" />,
    },
    {
      id: 2,
      title: 'What Is It',
      icon: <Lightbulb className="dock-nav-icon" />,
    },
    {
      id: 3,
      title: 'Reality',
      icon: <Theater className="dock-nav-icon" />,
    },
    {
      id: 4,
      title: 'Know Them',
      icon: <Brain className="dock-nav-icon" />,
    },
    {
      id: 5,
      title: 'Use Cases',
      icon: <Target className="dock-nav-icon" />,
    },
    {
      id: 6,
      title: 'Audience',
      icon: <Users className="dock-nav-icon" />,
    },
    {
      id: 7,
      title: 'Status',
      icon: <Rocket className="dock-nav-icon" />,
    },
    {
      id: 8,
      title: 'Join',
      icon: <Sparkles className="dock-nav-icon" />,
    },
  ];

  const scrollToScreen = (index) => {
    const sections = document.querySelectorAll('section');
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={`dock-navigation ${isHeader ? 'dock-navigation-header' : ''}`}>
      <Dock 
        className="dock-navigation-items"
        magnification={isHeader ? 50 : 80}
        distance={isHeader ? 100 : 150}
        panelHeight={isHeader ? 40 : 64}
      >
        {navigationData.map((item) => (
          <DockItem
            key={item.id}
            className="dock-navigation-item"
          >
            <DockLabel>{item.title}</DockLabel>
            <DockIcon>
              <div onClick={() => scrollToScreen(item.id)}>
                {item.icon}
              </div>
            </DockIcon>
          </DockItem>
        ))}
      </Dock>
    </div>
  );
};

export default DockNavigation;

