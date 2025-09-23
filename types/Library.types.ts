export type LibraryCardProps = {
  title: string;
  value: string | number;
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
}

export type NotesTabListProps = {
  notes: NoteItem[];
  selectedSubjects: string[];
}

export type SubjectFilterProps = {
  subjects: string[];
  selectedSubjects: string[];
  onChange: (subject: string) => void;
}