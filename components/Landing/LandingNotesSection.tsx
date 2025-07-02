'use client';

import React, { FC, useEffect, useState} from 'react';
import MarqueeRow from './_components/MarqueRow';
import { LandingGeneralProps } from '@/types/LandingTypes';
import { Button } from '../ui/button';

const upperCardsData = [
  {
    title: "Understanding Your University's Academic Policies",
    description:
      'A guide to GPA, grading systems, course retakes, and academic probation.',
    cardBgColor: '#FCED9C',
    triangleBgColor: '#F7D208',
    cardHeight: 206,
  },
  {
    title: 'Surviving Freshman Year',
    description:
      'Tips for adjusting to university life, making friends, and finding your place.',
    cardBgColor: '#FCCE80',
    triangleBgColor: '#E08F05',
    cardHeight: 170,
  },
  {
    title: 'Budgeting on a Student Income',
    description:
      'Smart tips for managing finances, avoiding debt, and saving money.',
    cardBgColor: '#CF94DA',
    triangleBgColor: '#AD49C0',
    cardHeight: 170,
  },
  {
    title: 'Data Structures and Algorithms',
    description: 'Core concepts for efficient problem-solving in computing.',
    cardBgColor: '#FCED9C',
    triangleBgColor: '#F7D208',
    cardHeight: 170,
  },
  {
    title: 'Scholarships and Financial Aid',
    description:
      'Where to find funding, how to apply, and common mistakes to avoid.',
    cardBgColor: '#FCED9C',
    triangleBgColor: '#F7D208',
    cardHeight: 206,
  },
  {
    title: 'Utilizing Office Hours',
    description:
      'Why visiting your professors can improve your grades and build rapport.',
    cardBgColor: '#E7ED9B',
    triangleBgColor: '#BFCB25',
    cardHeight: 170,
  },
  {
    title: 'Choosing the Right Major',
    description:
      'How to align your interests, skills, and career goals with your academic path.',
    cardBgColor: '#FFAB91',
    triangleBgColor: '#FF6333',
    cardHeight: 206,
  },
];

const lowerCardsData = [
  {
    title: "Understanding Your University's Academic Policies",
    description:
      'A guide to GPA, grading systems, course retakes, and academic probation.',
    cardBgColor: '#FCED9C',
    triangleBgColor: '#F7D208',
    cardHeight: 170,
  },
  {
    title: 'Course Registration Hacks',
    description:
      'How to plan your semester, beat registration rush, and choose the right classes.',
    cardBgColor: '#81DEEA',
    triangleBgColor: '#1EA2B3',
    cardHeight: 206,
  },
  {
    title: 'Object-Oriented Programming (OOP)',
    description: 'Key programming paradigm used in many modern languages.',
    cardBgColor: '#CF94DA',
    triangleBgColor: '#AD49C0',
    cardHeight: 170,
  },
  {
    title: 'Engineering Mechanics (Statics & Dynamics)',
    description: 'Fundamental of forces, motion, and structural behavior.',
    cardBgColor: '#FCCE80',
    triangleBgColor: '#E08F05',
    cardHeight: 170,
  },
  {
    title: 'General Chemistry',
    description: 'Foundational chemical principles, equations, and reactions.',
    cardBgColor: '#FCED9C',
    triangleBgColor: '#F7D208',
    cardHight: 206,
  },
  {
    title: 'Utilizing Office Hours',
    description:
      'Why visiting your professors can improve your grades and build rapport.',
    cardBgColor: '#E7ED9B',
    triangleBgColor: '#BFCB25',
    cardHeight: 170,
  },
  {
    title: 'Choosing the Right Major',
    description:
      'How to align your interests, skills, and career goals with your academic path.',
    cardBgColor: '#FFAB91',
    triangleBgColor: '#FF6333',
    cardHeight: 206,
  },
];


const splitCardsForMobile = (upper: any[], lower: any[]) => {
  // Combine and split into 3 nearly equal rows
  const all = [...upper, ...lower];
  const perRow = Math.ceil(all.length / 3);
  return [
    all.slice(0, perRow),
    all.slice(perRow, perRow * 2),
    all.slice(perRow * 2),
  ];
};

const LandingNotesSection: FC<LandingGeneralProps> = ({ DarkModeActive }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const [row1, row2, row3] = splitCardsForMobile(upperCardsData, lowerCardsData);

  return (
    <div
      className={`flex min-h-[600px] w-full flex-col items-center justify-center gap-8 pt-8 lg:pt-20 ${DarkModeActive ? 'bg-black' : 'bg-white'}`}
    >
      {/* Desktop: 2 rows, Mobile: 3 rows */}
      <div className="hidden lg:flex flex-col w-full gap-8">
        <MarqueeRow cards={upperCardsData} direction='left' />
        <MarqueeRow cards={lowerCardsData} direction='right' />
      </div>
      <div className="flex flex-col w-full gap-6 lg:hidden">
        <MarqueeRow cards={row1} direction='left' />
        <MarqueeRow cards={row2} direction='right' />
        <MarqueeRow cards={row3} direction='left' />
      </div>
      <Button className="mt-2 flex h-[44px]  items-center justify-center border-b-2 border-deepPrimaryBorder text-[20px] font-medium w-[128px]">
        <span >View All</span>
      </Button>
    </div>
  );
};

export default LandingNotesSection;
