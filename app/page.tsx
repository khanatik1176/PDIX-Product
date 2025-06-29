'use client';
import LandingAchievementSection from '@/components/Landing/LandingAchievementSection';
import LandingBlogSection from '@/components/Landing/LandingBlogSection';
import LandingClientSection from '@/components/Landing/LandingClientSection';
import LandingContactSection from '@/components/Landing/LandingContactSection';
import LandingFooter from '@/components/Landing/LandingFooter';
import LandingHeroSection from '@/components/Landing/LandingHeroSection';
import LandingNav from '@/components/Landing/LandingNav';
import LandingProjectsSection from '@/components/Landing/LandingProjects';
import LandingServicesSection from '@/components/Landing/LandingServicesSection';
import LandingTechSection from '@/components/Landing/LandingTechSection';
import LandingWhoSection from '@/components/Landing/LandingWhoSection';
import { ModeContext } from '@/contexts/ModeContext';
import { useContext } from 'react';

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
        <LandingWhoSection DarkModeActive={isDarkModeActive} />
        <LandingAchievementSection DarkModeActive={isDarkModeActive} />
        <LandingServicesSection DarkModeActive={isDarkModeActive} />
        <LandingTechSection DarkModeActive={isDarkModeActive} />
        <LandingProjectsSection DarkModeActive={isDarkModeActive} />
        <LandingBlogSection DarkModeActive={isDarkModeActive} />
        <LandingClientSection DarkModeActive={isDarkModeActive} />
        <div id='contact-section'>
          <LandingContactSection DarkModeActive={isDarkModeActive} />
        </div>
        <LandingFooter DarkModeActive={isDarkModeActive} />
      </div>
    </div>
  );
}
