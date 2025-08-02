export type MyNotesToolbarProps = {
  filterValue: string;
  onFilterChange: (value: string) => void;
  onUpload: () => void;
  open: boolean;
  setOpen: (open: boolean) => void;
};

export type MyNotesCardProps = {
  title: string;
  imageSrc: string;
  iconType: 'file' | 'link';
};

export type CardMenuProps = {
  open: boolean;
  onClose: () => void;
  onRename: () => void;
  onEdit: () => void;
  onDownload: () => void;
  onShare: () => void;
  onRemove?: () => void;
};

export type RenameFileModalProps = {
  open: boolean;
  onClose: () => void;
  filename: string;
  onFilenameChange: (val: string) => void;
  onUpdate: () => void;
};

export type EditNoteModalProps = {
  open: boolean;
  onClose: () => void;
  filename: string;
  onFileUpload: (file: File) => void;
  onFileRemove: () => void;
  topic: string;
  onTopicChange: (val: string) => void;
  educationLevel: string;
  onEducationLevelChange: (val: string) => void;
  classYear: string;
  onClassYearChange: (val: string) => void;
  subject: string;
  onSubjectChange: (val: string) => void;
  onUpdate: () => void;
  setFilename: (val: string) => void;
}

export type ShareNoteModalProps = {
  open: boolean;
  onClose: () => void;
  shareLink: string;
}

export type RemoveNoteDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onRemove: () => void;
}

