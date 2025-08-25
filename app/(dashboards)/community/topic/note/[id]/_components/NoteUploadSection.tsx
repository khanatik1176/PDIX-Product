'use client';
import React, { useState, useRef, useEffect } from 'react';
import {
  FileText,
  File,
  ThumbsUp,
  Download,
  Share2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import Image from 'next/image';
import Preview1 from '../../../../../../../public/Images/Preview-1.svg';

const NoteUploadSection = () => {
  const [upvoted, setUpvoted] = useState<{ [key: number]: boolean }>({});
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  // Temporary data for uploaded notes with dummy images
  const notes = [
    {
      id: 1,
      type: 'PDF',
      icon: <FileText className='h-5 w-5 text-gray-700' />,
      upvotes: 63000,
      previewImage: Preview1,
      name: "Newton's Laws of Motion - Detailed Explanation",
      uploadedTime: '12 min ago',
      downloads: 34000,
    },
    {
      id: 2,
      type: 'DOC',
      icon: <File className='h-5 w-5 text-gray-700' />,
      upvotes: 45000,
      previewImage: null,
      name: 'Physics Notes - Grade 10',
      uploadedTime: '1 hour ago',
      downloads: 12000,
    },
    {
      id: 3,
      type: 'PDF',
      icon: <FileText className='h-5 w-5 text-gray-700' />,
      upvotes: 32000,
      previewImage: Preview1,
      name: 'Chemistry Notes - Grade 11',
      uploadedTime: '30 min ago',
      downloads: 15000,
    },
    {
      id: 4,
      type: 'DOC',
      icon: <File className='h-5 w-5 text-gray-700' />,
      upvotes: 22000,
      previewImage: null,
      name: 'Biology Notes - Grade 12',
      uploadedTime: '2 hours ago',
      downloads: 8000,
    },
    {
      id: 5,
      type: 'PDF',
      icon: <FileText className='h-5 w-5 text-gray-700' />,
      upvotes: 50000,
      previewImage: Preview1,
      name: 'Mathematics Notes - Grade 9',
      uploadedTime: '1 day ago',
      downloads: 20000,
    },
  ];

  const handleScrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -370, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 370, behavior: 'smooth' });
    }
  };

  const updateScrollState = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  useEffect(() => {
    updateScrollState();
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', updateScrollState);
      return () => carousel.removeEventListener('scroll', updateScrollState);
    }
  }, []);

  const toggleUpvote = (id: number) => {
    setUpvoted((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className='px-3 lg:px-6'>
      {/* Title Section */}
      <div className='mb-4 flex items-center justify-between'>
        <h1 className='text-2xl font-semibold md:text-2xl'>Uploads</h1>
        <div className='flex items-center gap-2'>
          <button
            onClick={handleScrollLeft}
            disabled={isAtStart}
            className={`rounded-full p-2 ${
              isAtStart
                ? 'cursor-not-allowed bg-gray-300 text-gray-500'
                : 'bg-primary text-white'
            }`}
          >
            <ChevronLeft className='h-5 w-5' />
          </button>
          <button
            onClick={handleScrollRight}
            disabled={isAtEnd}
            className={`rounded-full p-2 ${
              isAtEnd
                ? 'cursor-not-allowed bg-gray-300 text-gray-500'
                : 'bg-primary text-white'
            }`}
          >
            <ChevronRight className='h-5 w-5' />
          </button>
        </div>
      </div>

      {/* Carousel Section */}
      <div className='overflow-hidden'>
        <div
          ref={carouselRef}
          className='flex gap-4 overflow-x-auto scroll-smooth'
        >
          {notes.map((note) => (
            <div
              key={note.id}
              className='mb-3 w-full max-w-[400px] flex-shrink-0 rounded-lg border border-gray-300 bg-white p-4 shadow-md sm:w-[400px]'
            >
              {/* Top Section */}
              <div className='mb-3 flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  {note.icon}
                  <span className='text-sm font-medium text-gray-700'>
                    {note.type}
                  </span>
                </div>
                <button
                  className='flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 text-gray-700'
                  onClick={() => toggleUpvote(note.id)}
                >
                  <ThumbsUp
                    className={`h-4 w-4 transition-colors ${
                      upvoted[note.id] ? 'text-green-700' : 'text-gray-700'
                    }`}
                  />
                  <span className='text-sm font-medium'>
                    {note.upvotes.toLocaleString()}
                  </span>
                </button>
              </div>

              {/* Preview Section */}
              <div className='mb-3'>
                {note.previewImage ? (
                  <Image
                    src={note.previewImage}
                    alt={note.name}
                    width={400}
                    height={150}
                    className='rounded-md object-cover'
                  />
                ) : (
                  <div className='flex h-[280px] w-full max-w-[365px] items-center justify-center rounded-lg bg-gray-100'>
                    <p className='text-sm italic text-gray-400'>
                      No preview available
                    </p>
                  </div>
                )}
              </div>

              {/* Note Name */}
              <div className='mb-3'>
                <p className='text-md truncate font-medium text-gray-800'>
                  {note.name}
                </p>
              </div>

              {/* Bottom Section */}
              <div className='flex items-center gap-2'>
                <span className='flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-700'>
                  {note.uploadedTime}
                </span>
                <span className='flex cursor-pointer items-center gap-1 rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-700'>
                  <Download className='h-4 w-4' />
                  {note.downloads.toLocaleString()}
                </span>
                <button className='flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-700'>
                  <Share2 className='h-4 w-4' />
                  Share
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoteUploadSection;
