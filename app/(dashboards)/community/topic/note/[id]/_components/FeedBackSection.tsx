'use client';
import React, { useState } from 'react';
import { SendHorizontal, MoreHorizontal } from 'lucide-react';
import Image from 'next/image';

const FeedBackSection = () => {
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      avatar: '/avatar-placeholder.png', // Correct path to the placeholder image
      userName: 'John Doe',
      content: 'This is a great note! Very helpful.',
      timeAgo: '10 mins ago',
    },
    {
      id: 2,
      avatar: '/avatar-placeholder.png', // Correct path to the placeholder image
      userName: 'Jane Smith',
      content: 'I found this note very informative. Thanks!',
      timeAgo: '1 hour ago',
    },
  ]);

  const [newFeedback, setNewFeedback] = useState('');

  const handleSendFeedback = () => {
    if (newFeedback.trim()) {
      const newFeedbackEntry = {
        id: feedbacks.length + 1,
        avatar: '/avatar-placeholder.png', // Correct path to the placeholder image
        userName: 'You',
        content: newFeedback,
        timeAgo: 'Just now',
      };
      setFeedbacks([newFeedbackEntry, ...feedbacks]);
      setNewFeedback('');
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      {/* Title Section */}
      <h2 className="text-xl font-semibold mb-4">
        Feedbacks ({feedbacks.length})
      </h2>

      {/* Feedback Input Section */}
      <div className="mb-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-10 h-10">
            <Image
              src="/avatar-placeholder.png" // Correct path to the placeholder image
              alt="Your Avatar"
              className="rounded-full"
              fill
            />
          </div>
          <span className="font-medium text-gray-800">You</span>
        </div>
        <div className="flex items-start gap-4">
          <textarea
            className="flex-1 w-full p-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary"
            rows={2}
            placeholder="Write your feedback..."
            value={newFeedback}
            onChange={(e) => setNewFeedback(e.target.value)}
          />
          <button
            className="flex items-center justify-center p-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-100"
            onClick={handleSendFeedback}
          >
            <SendHorizontal className="h-5 w-5 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Feedback List */}
      <div className="space-y-4">
        {feedbacks.map((feedback) => (
          <div
            key={feedback.id}
            className="p-4 border border-gray-200 rounded-lg bg-gray-50"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative w-10 h-10">
                  <Image
                    src={feedback.avatar}
                    alt={`${feedback.userName}'s Avatar`}
                    className="rounded-full"
                    fill
                  />
                </div>
                <span className="font-medium text-gray-800">
                  {feedback.userName}
                </span>
              </div>
              <span className="text-sm text-gray-500">{feedback.timeAgo}</span>
            </div>
            <p className="mt-2 text-gray-700">{feedback.content}</p>
            <div className="flex justify-end mt-2">
              <MoreHorizontal className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-700" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedBackSection;