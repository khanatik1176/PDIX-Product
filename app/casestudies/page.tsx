/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import LandingFooter from '@/components/Landing/LandingFooter';
import LandingNav from '@/components/Landing/LandingNav';
import React, { useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CaseStudiesCard from '@/components/CaseStudies/CaseStudiesCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ModeContext } from '@/contexts/ModeContext';
import { useQuery } from '@tanstack/react-query';
import { GetCaseStudies } from '@/helpers/Landing/LandingApi';
import type { CaseStudies } from '@/types/LandingTypes';
import Loader from '@/components/loader';

// Custom hook to show 4 cards on lg, 3 otherwise
function useLgShowFour() {
  const [showFour, setShowFour] = useState(false);

  useEffect(() => {
    function handleResize() {
      setShowFour(window.innerWidth >= 1024 && window.innerWidth < 1280); // lg only
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return showFour;
}

const CaseStudies = () => {
  const { isDarkModeActive, setIsDarkModeActive } = useContext(
    ModeContext
  ) as ModeContextType;
  const [showMore, setShowMore] = useState(false); // State to toggle additional cards

  const handleViewMore = () => {
    setShowMore((prev) => !prev);
  };

  const {
    data: caseStudies,
    isFetching: isCaseStudiesFetching,
    refetch: refetchCaseStudies,
  } = useQuery<CaseStudies[]>({
    queryKey: ['caseStudies'],
    queryFn: () => GetCaseStudies(),
    refetchOnWindowFocus: false,
  });

  const showFour = useLgShowFour();

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
        <div className='flex items-center justify-center px-12 pt-20 lg:px-36'>
          <div className='flex flex-col items-center justify-center gap-6'>
            <span className='w-full max-w-[130px] rounded-full bg-[#BFDBF8] px-4 py-2 text-center text-twelve font-normal text-congressBlue'>
              Case Studies
            </span>
            <h1
              className={`w-full text-center text-3xl font-semibold lg:max-w-[600px] lg:text-5xl ${isDarkModeActive ? 'text-[#F6F6F6]' : 'text-[#000000]'}`}
            >
              Client <span className='text-primary'>Wins</span> That Speak
              Volumes
            </h1>
            <p
              className={`w-full text-center text-[16px] font-normal lg:max-w-[1200px] lg:text-3xl ${isDarkModeActive ? 'text-textLight' : 'text-textSecondary'}`}
            >
              From startups to enterprises, see how we&apos;ve empowered our
              clients to achieve outstanding outcomes through smart strategy and
              tailored digital solutions.
            </p>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center 2xl:px-[240px]'>
          {isCaseStudiesFetching ? (
            <Loader />
          ) : caseStudies ? (
            <div className='grid grid-cols-1 gap-6 px-12 lg:mx-36 lg:grid-cols-2 xl:grid-cols-3 lg:gap-12 lg:px-0 xl:gap-16'>
              {/* Initial Cards: 4 on lg, 3 otherwise */}
              {caseStudies.slice(0, showFour ? 4 : 3).map((project) => (
                <Link
                  href={`/casestudies/${project?.slug}`}
                  key={project?.case_study_id}
                >
                  <CaseStudiesCard
                    src={project?.thumbnail_url}
                    alt={project?.project_title}
                    title={project?.project_title}
                    description={project?.summary}
                    DarkModeActive={isDarkModeActive}
                  />
                </Link>
              ))}

              {/* Additional Cards (Lazy Loaded with Animation) */}
              <AnimatePresence>
                {showMore && (
                  <>
                    {caseStudies
                      .slice(showFour ? 4 : 3, (showFour ? 4 : 3) + 3)
                      .map((project, idx) => (
                        <motion.div
                          key={project?.case_study_id ?? idx}
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 50 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Link href={`/casestudies/${project?.slug}`}>
                            <CaseStudiesCard
                              src={project?.thumbnail_url}
                              alt={project?.project_title}
                              title={project?.project_title}
                              description={project?.summary}
                              DarkModeActive={isDarkModeActive}
                            />
                          </Link>
                        </motion.div>
                      ))}
                  </>
                )}
              </AnimatePresence>
            </div>
          ) : null}

          {/* View More Button */}
          {caseStudies && caseStudies.length > (showFour ? 4 : 3) && (
            <Button
              className='mt-12 w-full max-w-[130px] rounded-lg'
              onClick={handleViewMore}
            >
              {showMore ? 'View less' : 'View more'}
            </Button>
          )}
        </div>

        <LandingFooter DarkModeActive={isDarkModeActive} />
      </div>
    </div>
  );
};

export default CaseStudies;