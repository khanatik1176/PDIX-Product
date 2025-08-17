export type NoteFormType = {
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
