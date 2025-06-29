/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React, { FC } from 'react';
import Project1 from '@/public/Images/projects1.svg';
import Project2 from '@/public/Images/projects2.svg';
import Project3 from '@/public/Images/projects3.svg';
import { Button } from '../ui/button';
import RecentProjectCard from './_components/RecentProjectCard';
import { CaseStudies, LandingGeneralProps } from '@/types/LandingTypes';
import { useQuery } from '@tanstack/react-query';
import { GetCaseStudies } from '@/helpers/Landing/LandingApi';
import Link from 'next/link';
import CardSkeleton from './_components/CardSkeleton';

const LandingProjectsSection: FC<LandingGeneralProps> = ({
  DarkModeActive,
}) => {
  const {
    data: caseStudies,
    isFetching: isCaseStudiesFetching,
    refetch: refetchCaseStudies,
  } = useQuery<CaseStudies[]>({
    queryKey: ['caseStudies'],
    queryFn: () => GetCaseStudies(),
    refetchOnWindowFocus: false,
  });

  // console.log('caseStudies', caseStudies);

  return (
    <div className='px-12 py-8 lg:px-36 lg:py-10 2xl:px-[384px]'>
      <h1 className='text-3xl font-semibold lg:text-5xl'>
        Recent <span className='text-primary'>Projects</span>
      </h1>
      <div className='mt-8 grid grid-cols-1 gap-8 grid-col-2 lg:grid-cols-3 lg:gap-6 xl:gap-10 2xl:gap-12'>
        {isCaseStudiesFetching
          ? Array.from({ length: 3 }).map((_, idx) => (
              <CardSkeleton DarkModeActive={DarkModeActive} key={idx} />
            ))
          : caseStudies?.slice(0, 3).map((project) => (
              <Link
                href={`/casestudies/${project?.slug}`}
                key={project?.case_study_id}
              >
                <RecentProjectCard
                  src={project?.thumbnail_url}
                  alt={project?.project_title}
                  title={project?.project_title}
                  description={project?.summary}
                  DarkModeActive={DarkModeActive}
                />
              </Link>
            ))}
      </div>
      <div
        className={`${
          DarkModeActive
            ? 'my-12 flex w-full flex-col rounded-xl border border-[#87BFF2] border-opacity-50 bg-black p-6 lg:flex-row lg:justify-between xl:max-w-[1609px]'
            : 'my-12 flex w-full flex-col rounded-xl border border-[#87BFF2] border-opacity-50 bg-white p-6 lg:flex-row lg:justify-between xl:max-w-[1609px]'
        }`}
      >
        <div>
          <h1 className='text-2xl font-bold'>Discover More of Our Work</h1>
          <p
            className={`${
              DarkModeActive
                ? 'pt-3 text-base font-normal text-textLight'
                : 'pt-3 text-base font-normal text-textSecondary'
            }`}
          >
            Explore real-world solutions we&apos;ve built using cutting-edge
            technologies and thoughtful design principles.
          </p>
        </div>
        <Link href='/casestudies'>
          <Button
            variant='priamryex'
            size={'mdex'}
            className='mt-2 w-full max-w-[174px] text-xl font-semibold'
          >
            Explore Projects
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingProjectsSection;
