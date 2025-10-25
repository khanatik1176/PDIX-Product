export type NoteFormType = {
  title: string;
  fileUrl: string;
  classId: string;
  subjectName: string;
  topicName: string;
  educationLevel: string;
  isFeedbackAllowed?: boolean;
  isDownloadAllowed?: boolean;
  isAnonymous?: boolean;
};

export type StepOneInputProps = {
  control: any;
  trigger: any;
  setStep: (step: number) => void;
  setValue: any;
  errors: any;
  url: string;
}

export type StepTwoInputProps = {
  control: any;
  trigger: any;
  setStep: (step: number) => void;
  getValues: any;
  errors: any;
  topic: string;
  educationLevel: string;
  classYear: string;
  subject: string;
  educationOptions: EducationLevel[];
  classYearOptions?: { value: string; label: string }[];
  subjects?: Option[];
  topics?: Option[];
}


export type StepThreeInputProps = {
  control: any;
  handleSubmit: any;
  onClose: () => void;
  setStep: (step: number) => void;
  handleClose: () => void;
  reset: () => void;
}

export type EducationLevel = {
  id: string;
  name: string;
};

export type Option = {
  id: string;
  name: string;
};

export type NoteUploadMutationProps = {
  fileUrl: string;
  classId: string;
  subjectName: string;
  topicName: string;
  educationLevel?: string;
  isFeedbackAllowed?: boolean;
  isDownloadAllowed?: boolean;
  isAnonymous?: boolean;
};

export type NoteUploadPayload = Omit<NoteFormType, 'educationLevel'>;


export type INoteHeadingProps = {
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

export type NoteType = 
{
  noteId: string;
  title: string;
  fileName: string;
  totalRatings: number;
  totalFeedbacks: string;
  uploadedBy: string;
  uploadDate: string;
}

export type TopicNoteUploadType = 
{
  notes: NoteType[];
  topicNoteLoading: boolean

}

export type NoteCardProps = {
  note: any;
  isLiked: boolean;
  onLike: (id: number) => void;
}

export type NoteFiltersProps = {
  filterType: string;
  setFilterType: (value: string) => void;
  filterSort: string;
  setFilterSort: (value: string) => void;
}

export type ViewModeToggleProps = {
  viewMode: 'card' | 'table';
  setViewMode: (mode: 'card' | 'table') => void;
  handleScrollLeft?: () => void;
  handleScrollRight?: () => void;
  isAtStart?: boolean;
  isAtEnd?: boolean;
  showArrows?: boolean;
}