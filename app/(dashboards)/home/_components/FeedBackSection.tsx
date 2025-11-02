'use client';
import React, { FC, useMemo, useState } from 'react';
import {
  SendHorizontal,
  MoreHorizontal,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import Image from 'next/image';
import DummyAvatar from '../../../../public/Images/DummyAvatar.png';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FeedbackItem, feedbackProps } from '@/types/Home.types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { submitNoteFeedback } from '@/helpers/Home/HomeApi';
import { UserDetails } from '@/contexts/UserContext';


const FeedBackSection: FC<feedbackProps> = ({ feedbacks = [], individualNoteData   }) => {
  // local list state (initialized from prop)
  const [items, setItems] = useState<FeedbackItem[]>(() =>
    feedbacks.map((f: any) => ({ ...f }))
  );

  const [newFeedback, setNewFeedback] = useState('');
  const [isFeedbackAreaOpen, setIsFeedbackAreaOpen] = useState(true);
  const [showAllFeedbacks, setShowAllFeedbacks] = useState(false);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const { user } = UserDetails();

  console.log("User in Feedback Section:", user);

  const mutation = useMutation({
    mutationFn: async ({ content, anonymous }: { content: string; anonymous?: boolean }) =>
      submitNoteFeedback(individualNoteData?.noteId, content, !!anonymous),
  });

  const handleSendFeedback = () => {
    const trimmed = newFeedback.trim();
    if (!trimmed) return;

    // create optimistic item
    const optimistic: FeedbackItem = {
      id: individualNoteData?.noteId,
      userName: 'You',
      avatar: DummyAvatar,
      content: trimmed,
      time: Date.now(),
      timeAgo: 'Just now',
    };

    // optimistic update
    setItems((prev) => [optimistic, ...prev]);
    setNewFeedback('');

    // send mutation
    mutation.mutate({ content: trimmed, anonymous: false });
  };

  const toggleFeedbackArea = () => {
    setIsFeedbackAreaOpen((prev) => !prev);
  };

  const toggleShowMore = () => {
    setShowAllFeedbacks((prev) => !prev);
  };

  const handleSortChange = (order: 'asc' | 'desc') => {
    setSortOrder(order);
    setItems((prev) =>
      [...prev].sort((a, b) =>
        order === 'asc' ? a.time - b.time : b.time - a.time
      )
    );
  };

  const visibleFeedbacks = useMemo(
    () => (showAllFeedbacks ? items : items.slice(0, 3)),
    [items, showAllFeedbacks]
  );

  return (
    <div className='my-8 px-3 lg:px-6'>
      {/* Title Section */}
      <div className='flex items-center justify-between'>
        <div className='flex flex-col gap-4 md:flex-row md:items-center'>
          <h2 className='text-2xl font-semibold md:text-2xl'>
            Feedbacks ({items.length})
          </h2>
          <Select
            value={sortOrder}
            onValueChange={(value) => handleSortChange(value as 'asc' | 'desc')}
          >
            <SelectTrigger className='flex w-48 items-center justify-between'>
              <SelectValue placeholder='Sort by Time' />
              <ChevronDown className='h-4 w-4 text-gray-500' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='asc'>Sort by Time (Asc)</SelectItem>
              <SelectItem value='desc'>Sort by Time (Desc)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <button
          className='flex items-center text-gray-700 hover:text-gray-900'
          onClick={toggleFeedbackArea}
        >
          {isFeedbackAreaOpen ? (
            <ChevronUp className='h-5 w-5 text-black' />
          ) : (
            <ChevronDown className='h-5 w-5' />
          )}
        </button>
      </div>

      {/* Feedback Input Section */}
      {isFeedbackAreaOpen && (
        <div className='my-6'>
          <div className='mb-4 flex items-center gap-2'>
            <div className='relative h-10 w-10'>
              <Image
                src={DummyAvatar}
                alt='Your Avatar'
                className='rounded-lg border'
                fill
              />
            </div>
            <span className='font-medium text-gray-800'>You</span>
          </div>
          <div className='flex items-start gap-3 md:gap-12'>
            <textarea
              className='min-h-24 w-full flex-1 resize-y rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary'
              rows={2}
              placeholder='Type your feedback here.'
              value={newFeedback}
              onChange={(e) => setNewFeedback(e.target.value)}
            />
            <button
              className='flex items-center justify-center rounded-lg border border-gray-300 bg-white p-2 hover:bg-gray-100 disabled:opacity-50'
              onClick={handleSendFeedback}
              disabled={mutation.isPending}
            >
              <SendHorizontal className='h-5 w-5 text-gray-700' />
            </button>
          </div>
        </div>
      )}

      {/* Feedback List / Empty State */}
      {isFeedbackAreaOpen && (
        <div className='space-y-4'>
          {items.length === 0 ? (
            <div className='flex flex-col items-center justify-center gap-4 py-12'>
              <div className='relative h-24 w-24'>
                <Image
                  src={DummyAvatar}
                  alt='No feedbacks'
                  className='rounded-lg'
                  fill
                />
              </div>
              <p className='text-center text-gray-600'>
                No feedbacks available.
              </p>
            </div>
          ) : (
            <>
              {visibleFeedbacks.map((feedback) => (
                <div
                  key={feedback.id}
                  className='relative flex items-center rounded-lg px-1 py-4'
                >
                  {/* Feedback Content */}
                  <div className='flex-1 pr-12'>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-2'>
                        <div className='relative h-10 w-10'>
                          <Image
                            src={DummyAvatar}
                            alt={`${feedback.userName}'s Avatar`}
                            className='rounded-lg border'
                            fill
                          />
                        </div>
                        <span className='font-medium text-gray-800'>
                          {feedback.userName}
                        </span>
                      </div>
                      <span className='text-sm text-black'>
                        {feedback.timeAgo}
                      </span>
                    </div>
                    <p className='mt-2 text-gray-700'>{feedback.content}</p>
                  </div>
                  {/* MoreHorizontal Icon */}
                  <MoreHorizontal className='ml-4 h-5 w-5 cursor-pointer text-gray-500 hover:text-gray-700' />
                </div>
              ))}

              {/* Show More/Show Less Button */}
              {items.length > 3 && (
                <div className='flex justify-center pb-8'>
                  <button
                    className='mt-4 rounded-lg border border-gray-300 bg-lightAquaBg px-4 py-2 text-black hover:bg-gray-100'
                    onClick={toggleShowMore}
                  >
                    {showAllFeedbacks ? 'Show Less' : 'Show More'}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default FeedBackSection;
