import React, { useState } from 'react';
import { FileText, MoreHorizontal, Link } from 'lucide-react';
import { MyNotesCardProps } from '@/types/MyNotesType';
import Image from 'next/image';
import CardMenu from './CardMenu';

const MyNotesCard: React.FC<MyNotesCardProps> = ({ title, imageSrc, iconType }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='flex md:h-[310px] 2xl:h-[350px] w-full flex-col gap-2 rounded-lg border bg-[#E7E7E799] p-4 shadow-sm mb-5'>
      <div className='flex items-center justify-between pb-6'>
        <div className='flex items-center gap-2'>
          {iconType === 'file' ? (
            <FileText className='h-5 w-5 text-black' />
          ) : (
            <Link className='h-5 w-5 text-black' />
          )}
          <span className='max-w-[60px] md:max-w-[100px] truncate text-base font-semibold lg:max-w-[150px] xl:max-w-[180px] 2xl:max-w-[220px]'>
            {title}
          </span>
        </div>
        <div className="relative">
          <MoreHorizontal
            className='h-5 w-5 cursor-pointer text-black'
            onClick={() => setMenuOpen((prev) => !prev)}
          />
          <CardMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
        </div>
      </div>
      <div className='my-2 flex items-center justify-center rounded-2xl border'>
        <Image
          src={imageSrc}
          alt='Note preview'
          width={300}
          height={188}
          className='h-32 md:h-52 2xl:h-64 w-full rounded-2xl object-cover'
        />
      </div>
    </div>
  );
};

export default MyNotesCard;