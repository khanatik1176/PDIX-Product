// app/(dashboards)/library/_components/TopicCard.tsx
import { LibraryTopicCardProps } from '@/types/Library.types';
import React from 'react';

const LibraryTopicCard: React.FC<LibraryTopicCardProps> = ({ title, subtitle }) => (
  <div className='mb-2 w-full rounded-lg bg-[#FEFAEC]  border p-6 shadow-md'>
    <h2 className='text-2xl font-bold text-black'>{title}</h2>
    <p className='mt-1 text-sm text-gray-500'>{subtitle}</p>
  </div>
);

export default LibraryTopicCard;
