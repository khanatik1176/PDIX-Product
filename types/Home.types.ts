import { StaticImageData } from "next/image";

export type HomeCardProps = {
  title: string;
  description: string;
  actionText: string;
  image: StaticImageData;
  imageAlt: string;
  backgroundColor?: string;
}

export type NoteShape = {
  noteId?: string;
  title?: string;
  topicName?: string;
  subjectName?: string;
  uploadDate?: string;
  totalViews?: string | number;
  totalDownloads?: string | number;
  totalFeedbacks?: string | number;
  // fallback fields (if any)
  id?: number | string;
  name?: string;
  subject?: string;
  date?: string;
  views?: number;
  downloads?: number;
  feedback?: number;
};

export type NoteItemProps = {
  note: NoteShape;
  activeTab: number;
  onClick: (id: string | number) => void;
};

export type feedbackProps= 
{
  feedbacks?: any[];
}


export type Notification = {
  id: string;
  title: string;
  body?: string;
  date?: string;
  unread?: boolean;
};

export type NotificationProps = {
  notifications?: Notification[];
  onClose?: () => void;
  className?: string;
  onMarkAllRead?: () => void;
};