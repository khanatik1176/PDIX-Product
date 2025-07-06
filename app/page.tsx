'use client';
import LandingFooter from '@/components/Landing/LandingFooter';
import LandingHeroSection from '@/components/Landing/LandingHeroSection';
import LandingNav from '@/components/Landing/LandingNav';
import { ModeContext } from '@/contexts/ModeContext';
import { useContext } from 'react';
import LandingNotesSection from '@/components/Landing/LandingNotesSection';
import LandingOverviewSection from '@/components/Landing/LandingOverviewSection';
import LandingFacilitesSection from '@/components/Landing/LandingFacilitesSection';
import LandingUpgradeSection from '@/components/Landing/LandingUpgradeSection';

export default function Home() {
  const { isDarkModeActive, setIsDarkModeActive } = useContext(
    ModeContext
  ) as ModeContextType;

  return (
    <div
      className={`min-h-screen ${
        isDarkModeActive ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      <LandingNav
        isDarkModeActive={isDarkModeActive}
        setIsDarkModeActive={setIsDarkModeActive}
      />

      <div className='mx-auto w-full max-w-[1920px]'>
        <LandingHeroSection DarkModeActive={isDarkModeActive} />
        <LandingNotesSection DarkModeActive={isDarkModeActive} />
        <LandingOverviewSection DarkModeActive={isDarkModeActive} />
        <LandingFacilitesSection DarkModeActive={isDarkModeActive} />
        <LandingUpgradeSection DarkModeActive={isDarkModeActive} />
        <LandingFooter DarkModeActive={isDarkModeActive} />
      </div>
    </div>
  );
}
