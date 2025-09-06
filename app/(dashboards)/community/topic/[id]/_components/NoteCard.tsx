import React from "react";
import { Star, ThumbsUp, MessageCircle } from "lucide-react";
import { NoteCardProps } from "@/types/Note.types";



const NoteCard: React.FC<NoteCardProps> = ({ note, isLiked, onLike }) => (
  <div className="mb-3 w-full max-w-[400px] flex-shrink-0 rounded-lg border border-gray-300 bg-white p-4 shadow-md sm:mt-6 sm:h-[500px] sm:w-[600px]">
    {/* Top Section: Ratings */}
    <div className="mb-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        {note.icon}
        <span className="text-sm font-medium text-gray-700">{note.type}</span>
      </div>
      <div className="flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 text-gray-700">
        <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
        <span className="text-sm font-medium">{note.ratings}</span>
      </div>
    </div>

    {/* Preview Section: always placeholder now */}
    <div className="mb-3">
      <div className="flex h-[280px] w-full max-w-[365px] items-center justify-center rounded-lg bg-gray-100 lg:h-[330px]">
        <p className="text-sm italic text-gray-400">No preview available</p>
      </div>
    </div>

    {/* Note Name */}
    <div className="mb-3">
      <p className="text-md truncate font-medium text-gray-800">{note.name}</p>
    </div>

    {/* Bottom Section: time, feedbacks, likes */}
    <div className="flex items-center gap-2">
      <span className="flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-700">
        {note.uploadedTime}
      </span>
      <span className="flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-700">
        <MessageCircle className="h-4 w-4" />
        {note.feedbacks}
      </span>
      <button
        onClick={() => onLike(note.id)}
        className={`flex items-center gap-1 rounded-md px-2 py-1 text-xs ${
          isLiked ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
        }`}
      >
        <ThumbsUp
          className={`h-4 w-4 transition-colors ${
            isLiked ? "text-green-700" : "text-gray-700"
          }`}
        />
        {note.likes + (isLiked ? 1 : 0)}
      </button>
    </div>
  </div>
);

export default NoteCard;