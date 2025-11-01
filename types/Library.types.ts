export type LibraryCardProps = {
  title: string;
  value: string | number;
  isAnalyticsLoading?: boolean;
}

export type LibraryTopicCardProps = {
  title: string;
  subtitle: string;
}

export type NoteItem = {
  id: number;
  subject: string;
  name: string;
  date: string;
  views: number;
  downloads: number;
  feedback?: number;
  likes?: number;
  rating?: number;
  previewUrl?: string;
  uploadedBy?: string;
}

export type NotesTabListProps = {
  notes?: NoteItem[];
  selectedSubjects: string[];
  isLoading?: boolean;
}

export type SubjectFilterProps = {
  subjects: string[];
  selectedSubjects: string[];
  onChange: (subject: string) => void;
  isTopicsLoading?: boolean;
}

export type ILibraryNoteHeadingProps = {
  title: string;
  subTitle?: string;
  titleclassName?: string;
  subTitleClassName?: string;
  className?: string;
  subject?: string;
  classYear?: string;
  totalNotes?: number;
  isTopicLoading?: boolean;
};

export type NoteModalProps = {
  open: boolean;
  onClose: () => void;
  note: any;
}
