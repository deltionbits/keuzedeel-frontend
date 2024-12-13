"use client"

import React, { useState, useEffect } from 'react';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './Mobile/MobileNavbar';
import DesktopFooter from './DesktopFooter';
import MobileFooter from './Mobile/MobileFooter';

interface ResponsiveComponentProps {
  desktopComponent: React.ComponentType;
  mobileComponent: React.ComponentType;
  breakpoint?: number;
}

export const ResponsiveComponent: React.FC<ResponsiveComponentProps> = ({
  desktopComponent: DesktopComponent,
  mobileComponent: MobileComponent,
  breakpoint = 850
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobileView = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    checkMobileView();

    window.addEventListener('resize', checkMobileView);

    return () => window.removeEventListener('resize', checkMobileView);
  }, [breakpoint]);

  return isMobile ? <MobileComponent /> : <DesktopComponent />;
};

export const ResponsiveNavbar = () => (
  <ResponsiveComponent 
    desktopComponent={DesktopNavbar} 
    mobileComponent={MobileNavbar} 
  />
);

export const ResponsiveFooter = () => (
  <ResponsiveComponent 
    desktopComponent={DesktopFooter} 
    mobileComponent={MobileFooter} 
  />
);