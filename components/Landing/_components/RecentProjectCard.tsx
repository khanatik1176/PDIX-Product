import React, { FC } from 'react';
import Image from 'next/image';

type RecentProjectCardProps = {
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

const RecentProjectCard: FC<RecentProjectCardProps> = ({
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
          ? 'mt-8 flex h-[400px] lg:h-[430px] xl:h-[410px] 2xl:h-[400px] w-full max-w-[1000px] cursor-pointer flex-col items-center justify-start rounded-lg border border-[#87BFF2] border-opacity-50 bg-black'
          : 'mt-8 flex h-[400px] lg:h-[430px] xl:h-[410px] 2xl:h-[400px]  w-full max-w-[1000px] cursor-pointer flex-col items-center justify-start rounded-lg border border-[#87BFF2] border-opacity-50 bg-white'
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
      <div className="w-full px-6 flex flex-col">
        <h2
          className={`lg:min-h-[44px] 2xl:min-h-[36px] ${
            DarkModeActive
              ? 'text-[20px] 2xl:text-[16px] font-semibold text-[#F6F6F6] mb-2'
              : 'text-[20px] 2xl:text-[16px] font-semibold text-black mb-2'
          }`}
          style={{ lineHeight: '1.2' }}
        >
          {title}
        </h2>
        <p
          className={`${
            DarkModeActive
              ? 'line-clamp-4 pb-0 pr-2 text-justify text-base font-normal text-textLight'
              : 'line-clamp-4 pb-0 pr-2 text-justify text-base font-normal text-textSecondary'
          }`}
        >
          {hasPTag ? stripHtml(description) : description}
        </p>
      </div>
    </div>
  );
};

export default RecentProjectCard;