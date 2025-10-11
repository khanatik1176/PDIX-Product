'use client';
import React, { useState } from 'react';
import { X, Download, Eye, ThumbsUp, Share2 } from 'lucide-react';
import FeedBackSection from './FeedBackSection';
import { NoteModalProps } from '@/types/Library.types';
import { formatDate } from '@/constants/globalFunctions';

const NoteModal: React.FC<NoteModalProps> = ({ open, onClose, note }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(note?.likes ?? 0);

  if (!open || !note) return null;

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
    if (navigator.share && note?.previewUrl) {
      navigator.share({
        title: note.name,
        url: note.previewUrl,
      });
    } else if (note?.previewUrl) {
      navigator.clipboard.writeText(note.previewUrl);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="relative w-full max-w-[380px] md:max-w-2xl lg:max-w-4xl xl:max-w-7xl xl:min-h-[400px] rounded-lg bg-white p-0 shadow-lg flex flex-col">
        {/* Close Button */}
        <button
          className="absolute right-4 top-4 z-100"
          onClick={onClose}
        >
          <X className="h-5 w-5 text-red-600" />
        </button>
        {/* Main Content: Preview + Details side by side */}
        <div className="flex-1 overflow-y-auto flex flex-col md:flex-row p-4">
          {/* Left Section: Preview */}
          <div className="flex flex-1 items-center justify-center pt-6 md:p-6">
            <div className="flex h-64 w-full items-center justify-center rounded-lg bg-gray-100">
              <span className="text-gray-400">No preview available</span>
            </div>
          </div>
          {/* Right Section: Details */}
          <div className="flex flex-1 flex-col gap-4 p-2 md:p-6">
            <div>
              <h2 className="text-xl font-bold text-black">{note?.name}</h2>
              <div className="mt-1 flex flex-wrap items-center gap-2">
                <span className="rounded bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-700">
                  {note?.subject}
                </span>
                <span className="text-xs text-gray-500">
                  Uploaded by: <span className="font-semibold text-gray-700">{note?.uploadedBy ?? 'Unknown'}</span>
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">
                  {note?.views}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  className="p-0 m-0"
                  onClick={handleLike}
                  aria-label="Like"
                >
                  <ThumbsUp
                    className={`h-4 w-4 transition-colors ${liked ? 'text-blue-500' : 'text-gray-500'}`}
                    fill={liked ? '#3b82f6' : 'none'}
                  />
                </button>
                <span className="ml-1 text-sm font-medium text-gray-700">
                  {likeCount}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-sm text-gray-500">Uploaded:</span>
                <span className="text-sm font-medium text-gray-700">
                  {formatDate(note?.date)}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-sm text-gray-500">Rating:</span>
                <span className="text-sm font-medium text-gray-700">
                  {note.rating ?? 0}
                </span>
              </div>
            </div>
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2 mt-2">
              <button
                className="flex items-center gap-1 rounded bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 hover:bg-blue-100 transition"
                onClick={handleDownload}
                aria-label="Download"
              >
                <Download className="h-4 w-4" />
                Download
              </button>
              <button
                className="flex items-center gap-1 rounded bg-gray-50 px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
                onClick={handleShare}
                aria-label="Share"
              >
                <Share2 className="h-4 w-4" />
                Share
              </button>
            </div>
          </div>
        </div>
        {/* Feedback Section below both columns */}
        <div className="overflow-y-auto max-h-64 px-4 border-t border-gray-200">
          <FeedBackSection />
        </div>
      </div>
    </div>
  );
};

export default NoteModal;