import React, { FC } from 'react';
import Image from 'next/image';

type CaseStudiesCardProps = {
  src: string;
  alt: string;
  title: string;
  description?: string;
  DarkModeActive?: boolean;
};

function stripHtml(html?: string) {
  if (!html) return '';
  return html.replace(/<[^>]+>/g, '');
}

const CaseStudiesCard: FC<CaseStudiesCardProps> = ({
  src,
  alt,
  title,
  description,
  DarkModeActive,
}) => {
  const hasPTag = description?.includes('<p>');

  return (
    <div
      className={`${
        DarkModeActive
          ? 'mt-8 flex h-[450px] lg:h-[420px] xl:h-[410px] 2xl:h-[420px] w-full max-w-[1000px] cursor-pointer flex-col items-center justify-start rounded-lg border border-[#87BFF2] border-opacity-50 bg-black'
          : 'mt-8 flex h-[450px] lg:h-[420px] xl:h-[410px] 2xl:h-[420px] w-full max-w-[1000px] cursor-pointer flex-col items-center justify-start rounded-lg border border-[#87BFF2] border-opacity-50 bg-white'
      }`}
    >
      <div className="p-6 w-full flex justify-center items-center">
        <div className="relative w-full max-w-[450px] h-[200px]">
          <Image
            src={src}
            alt={alt}
            fill
            style={{ objectFit: 'cover', borderRadius: '12px' }}
            priority={false}
          />
        </div>
      </div>
      <div className='w-full px-6'>
        <h2
          className={`lg:min-h-[40px] xl:min-h-[40px] 2xl:min-h-[36px] ${
            DarkModeActive
              ? 'text-[15px] font-semibold text-[#F6F6F6]'
              : 'text-[15px] font-semibold text-black'
          }`}
        >
          {title}
        </h2>
        <p
          className={`${
            DarkModeActive
              ? 'line-clamp-4 pb-0 pr-2 pt-3 text-justify text-base font-normal text-textLight'
              : 'line-clamp-4 pb-0 pr-2 pt-3 text-justify text-base font-normal text-textSecondary'
          }`}
        >
          {hasPTag ? stripHtml(description) : description}
        </p>
      </div>
    </div>
  );
};

export default CaseStudiesCard;