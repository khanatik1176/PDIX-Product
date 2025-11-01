'use client';
import React, { useState } from 'react';
import { X, Download, Eye, ThumbsUp, Share2 } from 'lucide-react';
import FeedBackSection from './FeedBackSection';
import { NoteModalProps } from '@/types/Library.types';
import { formatDate } from '@/constants/globalFunctions';
import { useQuery } from '@tanstack/react-query';
import { fetchIndividualNote } from '@/helpers/Home/HomeApi';

const NoteModal: React.FC<NoteModalProps> = ({ open, onClose, note }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(note?.likes ?? 0);

  const {
    data: individualNoteData,
    isLoading: isIndividualNoteLoading,
    isFetching: isIndividualNoteFetching,
  } = useQuery({
    queryKey: ['individualNote', note?.noteId],
    queryFn: () => fetchIndividualNote(note?.noteId),
    enabled: !!note?.noteId,
  });

  console.log('NoteModal Rendered with note:', individualNoteData);
  if (!open || !individualNoteData) return null;

  const handleLike = () => {
    if (!liked) {
      setLikeCount(likeCount + 1);
      setLiked(true);
    } else {
      setLikeCount(likeCount - 1);
      setLiked(false);
    }
  };

  const handleDownload = () => {
    if (note?.previewUrl) {
      window.open(note.previewUrl, '_blank');
    }
  };

  const handleShare = () => {
    if (navigator.share && individualNoteData?.fileUrl) {
      navigator.share({
        title: individualNoteData.title,
        url: individualNoteData.fileUrl,
      });
    } else if (individualNoteData?.fileUrl) {
      navigator.clipboard.writeText(individualNoteData.fileUrl);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40'>
      <div className='relative flex w-full max-w-[380px] flex-col rounded-lg bg-white p-0 shadow-lg md:max-w-2xl lg:max-w-4xl xl:min-h-[400px] xl:max-w-7xl'>
        {/* Close Button */}
        <button className='z-100 absolute right-4 top-4' onClick={onClose}>
          <X className='h-5 w-5 text-red-600' />
        </button>
        {/* Main Content: Preview + Details side by side */}
        <div className='flex flex-1 flex-col overflow-y-auto p-4 md:flex-row'>
          {/* Left Section: Preview */}
          <div className='flex flex-1 items-center justify-center pt-6 md:p-6'>
            <div className='flex h-64 w-full items-center justify-center rounded-lg bg-gray-100'>
              <span className='text-gray-400'>No preview available</span>
            </div>
          </div>
          {/* Right Section: Details */}
          <div className='flex flex-1 flex-col gap-4 p-2 md:p-6'>
            <div>
              <h2 className='text-xl font-bold text-black'>{individualNoteData?.title}</h2>
              <div className='mt-1 flex flex-wrap items-center gap-2'>
                <span className='rounded bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-700'>
                  {individualNoteData?.topic?.subjectName}
                </span>
                <span className='text-xs text-gray-500'>
                  Uploaded by:{' '}
                  <span className='font-semibold text-gray-700'>
                    {individualNoteData?.uploadedBy ?? 'Unknown'}
                  </span>
                </span>
              </div>
            </div>
            <div className='flex flex-wrap gap-4'>
              <div className='flex items-center gap-1'>
                <Eye className='h-4 w-4 text-gray-500' />
                <span className='text-sm font-medium text-gray-700'>
                  {note?.totalViews}
                </span>
              </div>
              <div className='flex items-center gap-1'>
                <button
                  className='m-0 p-0'
                  onClick={handleLike}
                  aria-label='Like'
                >
                  <ThumbsUp
                    className={`h-4 w-4 transition-colors ${liked ? 'text-blue-500' : 'text-gray-500'}`}
                    fill={liked ? '#3b82f6' : 'none'}
                  />
                </button>
                <span className='ml-1 text-sm font-medium text-gray-700'>
                  {individualNoteData?.likeCount}
                </span>
              </div>
              <div className='flex items-center gap-1'>
                <span className='text-sm text-gray-500'>Uploaded:</span>
                <span className='text-sm font-medium text-gray-700'>
                  {formatDate(individualNoteData?.uploadDate)}
                </span>
              </div>
              <div className='flex items-center gap-1'>
                <span className='text-sm text-gray-500'>Rating:</span>
                <span className='text-sm font-medium text-gray-700'>
                  {individualNoteData.rating ?? 0}
                </span>
              </div>
            </div>
            {/* Action Buttons */}
            <div className='mt-2 flex flex-wrap gap-2'>
              <button
                className='flex items-center gap-1 rounded bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 transition hover:bg-blue-100'
                onClick={handleDownload}
                aria-label='Download'
              >
                <Download className='h-4 w-4' />
                Download
              </button>
              <button
                className='flex items-center gap-1 rounded bg-gray-50 px-3 py-1 text-sm font-medium text-gray-700 transition hover:bg-gray-100'
                onClick={handleShare}
                aria-label='Share'
              >
                <Share2 className='h-4 w-4' />
                Share
              </button>
            </div>
          </div>
        </div>
        {/* Feedback Section below both columns */}
        <div className='max-h-64 overflow-y-auto border-t border-gray-200 px-4'>
          <FeedBackSection feedbacks={individualNoteData?.feedbacks} />
        </div>
      </div>
    </div>
  );
};

export default NoteModal;
