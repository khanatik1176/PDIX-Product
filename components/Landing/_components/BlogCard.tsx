import React, { FC, useRef, useLayoutEffect, useState } from 'react';
import Image from 'next/image';
import { BlogCardProps } from '@/types/BlogTypes';

const BlogCards: FC<BlogCardProps> = ({
  src,
  alt,
  title,
  summary,
  category,
  date,
  DarkModeActive,
}) => {
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const day = date.toLocaleString('en-GB', { day: '2-digit' });
    const month = date.toLocaleString('en-GB', { month: 'long' });
    const year = date.toLocaleString('en-GB', { year: 'numeric' });
    return `${month} ${day}, ${year}`;
  };

  // Check if description contains HTML tags
  const hasHtml = /<\/?[a-z][\s\S]*>/i.test(summary);

  // --- Title line count logic ---
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [isOneLine, setIsOneLine] = useState(true);

  useLayoutEffect(() => {
    if (titleRef.current) {
      const lineHeight = parseFloat(getComputedStyle(titleRef.current).lineHeight);
      const height = titleRef.current.offsetHeight;
      setIsOneLine(height <= lineHeight + 1); // +1 for rounding
    }
  }, [title]);

  // Dynamic pt for description
  const descPt = isOneLine ? 'pt-0' : '';

  return (
    <div
      className={`${
        DarkModeActive
          ? 'mt-8 flex lg:h-[500px] w-full max-w-[1000px] cursor-pointer flex-col items-center justify-start rounded-lg bg-black'
          : 'mt-8 flex lg:h-[500px] w-full max-w-[1000px] cursor-pointer flex-col items-center justify-start rounded-lg bg-white'
      }`}
    >
      <div className='py-3 pt-6 lg:py-6 lg:px-0 2xl:py-6 2xl:px-0'>
        <Image src={src} alt={alt} width={400} height={400} className='rounded-xl' />
      </div>
      <div className="flex flex-col flex-1 w-full px-0">
        <h2
          ref={titleRef}
          className={`lg:min-h-[68px] xl:min-h-[68px] 2xl:min-h-[36px] ${
            DarkModeActive
              ? 'text-[20px] font-semibold text-[#F6F6F6]'
              : 'text-[20px] font-semibold text-black'
          }`}
        >
          {title}
        </h2>
        {/* Description with clamp and no overlap */}
        {hasHtml ? (
          <div
            className={`prose prose-sm max-w-none pb-0 pr-2 text-justify text-base font-normal line-clamp-4 overflow-hidden ${descPt} ${
              DarkModeActive ? 'prose-invert text-textLight' : 'text-textSecondary'
            }`}
            dangerouslySetInnerHTML={{ __html: summary }}
          />
        ) : (
          <p
            className={`pb-0 pr-2 text-justify text-base font-normal line-clamp-4 overflow-hidden ${descPt} ${
              DarkModeActive ? 'text-textLight' : 'text-textSecondary'
            }`}
          >
            {summary}
          </p>
        )}
        {/* Footer always at the bottom */}
        <div className="flex w-full items-center justify-between pt-6 lg:pb-6">
          <span className='rounded-full bg-[#BFDBF8] px-6 py-2 text-twelve text-[#133B67]'>
            {category}
          </span>
          <p
            className={`${
              DarkModeActive
                ? 'text-twelve font-normal text-textLight'
                : 'text-twelve font-normal text-textSecondary'
            }`}
          >
            {formatDate(date)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCards;