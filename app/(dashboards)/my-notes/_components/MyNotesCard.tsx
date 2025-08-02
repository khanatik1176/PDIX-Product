import React, { FC, useState } from 'react';
import { FileText, MoreHorizontal, Link } from 'lucide-react';
import { MyNotesCardProps } from '@/types/MyNotesType';
import Image from 'next/image';
import CardMenu from './CardMenu';
import RenameFileModal from './RenameFileModal';
import { toast } from '@/hooks/use-toast';

const MyNotesCard: FC<MyNotesCardProps> = ({ title, imageSrc, iconType }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [renameOpen, setRenameOpen] = useState(false);
  const [filename, setFilename] = useState(title);

  const handleRenameClick = () => {
    setMenuOpen(false);
    setRenameOpen(true);
  };

  const handleUpdate = () => {
    // Your update logic here
    setRenameOpen(false);
    toast({
      title: 'File renamed successfully',
      description: 'Your file name has been updated.',
      variant: 'default',
    });
  };

  return (
    <div className='mb-5 flex w-full flex-col gap-2 rounded-lg border bg-[#E7E7E799] p-4 shadow-sm md:h-[310px] 2xl:h-[350px]'>
      <div className='flex items-center justify-between pb-6'>
        <div className='flex items-center gap-2'>
          {iconType === 'file' ? (
            <FileText className='h-5 w-5 text-black' />
          ) : (
            <Link className='h-5 w-5 text-black' />
          )}
          <span className='max-w-[60px] truncate text-base font-semibold md:max-w-[100px] lg:max-w-[150px] xl:max-w-[180px] 2xl:max-w-[220px]'>
            {title}
          </span>
        </div>
        <div className='relative'>
          <MoreHorizontal
            className='h-5 w-5 cursor-pointer text-black'
            onClick={() => setMenuOpen((prev) => !prev)}
          />
          <CardMenu
            open={menuOpen}
            onClose={() => setMenuOpen(false)}
            onRename={handleRenameClick}
          />
          <RenameFileModal
            open={renameOpen}
            onClose={() => setRenameOpen(false)}
            filename={filename}
            onFilenameChange={setFilename}
            onUpdate={handleUpdate}
          />
        </div>
      </div>
      <div className='my-2 flex items-center justify-center rounded-2xl border'>
        <Image
          src={imageSrc}
          alt='Note preview'
          width={300}
          height={188}
          className='h-32 w-full rounded-2xl object-cover md:h-52 2xl:h-64'
        />
      </div>
    </div>
  );
};

export default MyNotesCard;
