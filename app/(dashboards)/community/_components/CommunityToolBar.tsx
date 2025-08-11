'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ChevronDown, ChevronUp } from 'lucide-react';

const CommunityToolBar = () => {
  // Desktop dropdown open states
  const [subjectOpen, setSubjectOpen] = useState(false);
  const [educationOpen, setEducationOpen] = useState(false);

  // Mobile dropdown open states
  const [mobileSubjectOpen, setMobileSubjectOpen] = useState(false);
  const [mobileEducationOpen, setMobileEducationOpen] = useState(false);

  // Mobile filter logic (unchanged)
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const mobileFilterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mobileFilterOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileFilterRef.current &&
        !mobileFilterRef.current.contains(event.target as Node)
      ) {
        setMobileFilterOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileFilterOpen]);

  return (
    <div className='w-full pt-6 px-6'>
      {/* Desktop/Tablet */}
      <div className='hidden w-full items-center justify-between gap-4 sm:flex'>
        {/* Left: Search input */}
        <Input placeholder='Search' className='w-full max-w-md' />

        {/* Right: Two dropdowns */}
        <div className='flex items-center gap-4'>
          {/* All Subject Dropdown */}
          <Select open={subjectOpen} onOpenChange={setSubjectOpen}>
            <SelectTrigger className='w-[160px] bg-[#F1F5F9] flex items-center justify-between'>
              <SelectValue placeholder='All subject' />
              {subjectOpen ? (
                <ChevronUp className='h-4 w-4 text-gray-400' />
              ) : (
                <ChevronDown className='h-4 w-4 text-gray-400' />
              )}
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='all'>All</SelectItem>
              <SelectItem value='math'>Math</SelectItem>
              <SelectItem value='science'>Science</SelectItem>
              <SelectItem value='history'>History</SelectItem>
              {/* Add more subjects as needed */}
            </SelectContent>
          </Select>
          {/* All Education Level Dropdown */}
          <Select open={educationOpen} onOpenChange={setEducationOpen}>
            <SelectTrigger className='w-[160px] bg-[#F1F5F9] flex items-center justify-between'>
              <SelectValue placeholder='All education level' />
              {educationOpen ? (
                <ChevronUp className='h-4 w-4 text-gray-400' />
              ) : (
                <ChevronDown className='h-4 w-4 text-gray-400' />
              )}
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='all'>All</SelectItem>
              <SelectItem value='high-school'>High School</SelectItem>
              <SelectItem value='university'>University</SelectItem>
              {/* Add more levels as needed */}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Mobile */}
      <div className='flex w-full flex-col gap-3 sm:hidden'>
        {/* Search input */}
        <Input placeholder='Search' className='w-full' />
        {/* Dropdowns stacked vertically */}
        <div className='flex w-full flex-col gap-3'>
          {/* All Subject Dropdown */}
          <Select open={mobileSubjectOpen} onOpenChange={setMobileSubjectOpen}>
            <SelectTrigger className='w-full bg-[#F1F5F9] flex items-center justify-between'>
              <SelectValue placeholder='All subject' />
              {mobileSubjectOpen ? (
                <ChevronUp className='h-4 w-4 text-gray-400' />
              ) : (
                <ChevronDown className='h-4 w-4 text-gray-400' />
              )}
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='all'>All</SelectItem>
              <SelectItem value='math'>Math</SelectItem>
              <SelectItem value='science'>Science</SelectItem>
              <SelectItem value='history'>History</SelectItem>
              {/* Add more subjects as needed */}
            </SelectContent>
          </Select>
          {/* All Education Level Dropdown */}
          <Select open={mobileEducationOpen} onOpenChange={setMobileEducationOpen}>
            <SelectTrigger className='w-full bg-[#F1F5F9] flex items-center justify-between'>
              <SelectValue placeholder='All education level' />
              {mobileEducationOpen ? (
                <ChevronUp className='h-4 w-4 text-gray-400' />
              ) : (
                <ChevronDown className='h-4 w-4 text-gray-400' />
              )}
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='all'>All</SelectItem>
              <SelectItem value='high-school'>High School</SelectItem>
              <SelectItem value='university'>University</SelectItem>
              {/* Add more levels as needed */}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default CommunityToolBar;