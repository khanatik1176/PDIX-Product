import React from 'react';
import { FileText, MessageCircle, Eye, Download } from 'lucide-react';
import { formatDate } from '@/constants/globalFunctions';
import { NoteItemProps } from '@/types/Home.types';

const NotesListItem: React.FC<NoteItemProps> = ({ note, activeTab, onClick }) => {

    console.log('Rendering Note:', note);
  return (
    <li
      key={note.noteId}
      className="flex w-full cursor-pointer items-center justify-between rounded-md border bg-white p-2 hover:shadow"
      onClick={() => onClick(note.noteId)}
    >
      <div className="flex min-w-0 flex-1 items-center gap-x-4">
        <div className="flex flex-col items-center gap-2 md:flex-row">
          <FileText className="h-6 w-6 text-gray-600" />
          <span className="min-w-[80px] flex-shrink-0 rounded-md border border-gray-300 bg-white px-2 py-0.5 text-center text-xs font-semibold text-black">
            {note?.subjectName}
          </span>
        </div>
        <div className="min-w-0">
          <div className="w-full max-w-[200px] truncate font-medium md:max-w-full">
            {note?.title}
          </div>
          <div className="flex flex-col gap-2 text-xs text-gray-400 md:flex-row md:items-center">
            {formatDate(note?.uploadDate)}
            <div className="flex items-center gap-1">
              <MessageCircle className="h-4 w-4 text-gray-400" />
              <span className="font-medium text-gray-600">{note?.totalFeedbacks ?? 0}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1">
        {activeTab === 0 ? (
          <Eye className="h-4 w-4 text-secondary" />
        ) : (
          <Download className="h-4 w-4 text-secondary" />
        )}
        <span className="text-right font-semibold tabular-nums text-gray-700 md:w-10">
          {activeTab === 0 ? note?.totalViews : note?.totalDownloads}
        </span>
      </div>
    </li>
  );
};

export default NotesListItem;