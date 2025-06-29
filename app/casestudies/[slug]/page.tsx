/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import LandingFooter from '@/components/Landing/LandingFooter';
import LandingNav from '@/components/Landing/LandingNav';
import React, { useContext, useState } from 'react';
import CaseStudiesBanner from '../_components/CaseStudiesBanner';
import CaseStudiesTitle from '../_components/CaseStudiesTitle';
import CaseStudiesAuthor from '../_components/CaseStudiesAuthor';
import CaseStudiesTopSocialShare from '../_components/CaseStudiesTopSocialShare';
import CaseStudiesFooterSocials from '../_components/CaseStudiesFooterSocials';
import CustomContactArea from '@/components/CustomContactArea';
import { ModeContext } from '@/contexts/ModeContext';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { GetCaseStudiesBySlug } from '@/helpers/CaseStudies/CaseStudiesApi';
import { formatDate } from '@/constants/globalFunctions';
import Loader from '@/components/loader';

const CaseStudiesDetails = () => {
  const { isDarkModeActive, setIsDarkModeActive } = useContext(
    ModeContext
  ) as ModeContextType;

  const { slug } = useParams();

  const {
    data: singleProject,
    isFetching: isSingleProjectFetching,
    refetch: refetchSingleProject,
  } = useQuery<any>({
    queryKey: ['caseStudies'],
    queryFn: () =>
      GetCaseStudiesBySlug(
        typeof slug === 'string'
          ? slug
          : Array.isArray(slug)
            ? (slug[0] ?? '')
            : ''
      ),
    refetchOnWindowFocus: false,
  });

  const authorDetails = {
    name: singleProject?.created_by?.full_name ?? '',
    date: formatDate(singleProject?.published_at ?? ''),
    avatar: singleProject?.created_by?.picture
      ? singleProject?.created_by?.picture
      : '/Images/DummyFIgure.svg',
  };

  // Copy Link state and handler
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async (e?: React.MouseEvent) => {
    e?.preventDefault();
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      setCopied(false);
    }
  };

  const socialLinks = [
    {
      icon: '/logo/facebook.svg',
      alt: 'Facebook',
      href: 'https://facebook.com',
    },
    { icon: '/logo/X .svg', alt: 'X', href: 'https://twitter.com' },
    {
      icon: null,
      alt:'Copy Link',
      // Use typeof window !== 'undefined' to avoid SSR issues
      href: typeof window !== 'undefined' ? window.location.href : '',
      label:'Copy Link',
      onClick: handleCopyLink,
      isCopy: true,
    },
  ];

  const FootersocialLinks = [
    {
      icon: '/logo/facebook.svg',
      alt: 'Facebook',
      href: 'https://facebook.com',
    },
    { icon: '/logo/X .svg', alt: 'X', href: 'https://twitter.com' },
  ];

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
        {isSingleProjectFetching ? (
          <Loader />
        ) : (
          singleProject && (
            <>
              {singleProject.thumbnail_url && (
                <CaseStudiesBanner images={singleProject?.thumbnail_url} />
              )}
              <div className='px-6 lg:px-[150px] xl:px-[300px] 2xl:px-[500px]'>
                <CaseStudiesTitle title={singleProject?.project_title ?? ''} />
                <div className='flex w-full items-center'>
                  <div className='flex w-full flex-col gap-6 pb-12 pt-6 lg:flex-row lg:items-center lg:gap-[300px] lg:pb-16 xl:gap-[480px]'>
                    <CaseStudiesAuthor
                      author={authorDetails}
                      isDarkModeActive={isDarkModeActive}
                    />
                    <CaseStudiesTopSocialShare
                      links={socialLinks}
                      isDarkModeActive={isDarkModeActive}
                    />
                  </div>
                </div>

                {/* Problem Statement */}
                {singleProject?.problem_statement && (
                  <div className='mb-8'>
                    <h2 className='mb-2 text-2xl font-bold'>
                      Problem Statement
                    </h2>
                    <div
                      className={`prose prose-lg max-w-none ${
                        isDarkModeActive ? 'prose-invert' : ''
                      }`}
                      dangerouslySetInnerHTML={{
                        __html: singleProject.problem_statement,
                      }}
                    />
                  </div>
                )}

                {/* Solution */}
                {singleProject?.solution && (
                  <div className='mb-8'>
                    <h2 className='mb-2 text-2xl font-bold'>Solution</h2>
                    <div
                      className={`prose prose-lg max-w-none ${
                        isDarkModeActive ? 'prose-invert' : ''
                      }`}
                      dangerouslySetInnerHTML={{
                        __html: singleProject.solution,
                      }}
                    />
                  </div>
                )}

                {/* Outcome */}
                {singleProject?.outcome && (
                  <div className='mb-8'>
                    <h2 className='mb-2 text-2xl font-bold'>Outcome</h2>
                    <div
                      className={`prose prose-lg max-w-none ${
                        isDarkModeActive ? 'prose-invert' : ''
                      }`}
                      dangerouslySetInnerHTML={{
                        __html: singleProject.outcome,
                      }}
                    />
                  </div>
                )}

                {/* Technologies Used */}
                {singleProject?.technologies_used && (
                  <div className='mb-8'>
                    <h2 className='mb-2 text-2xl font-bold'>
                      Technologies Used
                    </h2>
                    <div
                      className={`prose prose-lg max-w-none ${
                        isDarkModeActive ? 'prose-invert' : ''
                      }`}
                    >
                      <ul className='list-inside list-disc marker:text-black'>
                        {singleProject.technologies_used
                          .split(',')
                          .map((tech: string, idx: number) => (
                            <li key={idx} className='pl-1'>
                              {tech.trim()}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                )}

                <div>
                  <CaseStudiesFooterSocials
                    socialLinks={FootersocialLinks}
                    isDarkModeActive={isDarkModeActive}
                  />
                </div>
              </div>
              <div>
                <CustomContactArea isDarkModeActive={isDarkModeActive} />
              </div>
            </>
          )
        )}
        <LandingFooter DarkModeActive={isDarkModeActive} />
      </div>
    </div>
  );
};

export default CaseStudiesDetails;
