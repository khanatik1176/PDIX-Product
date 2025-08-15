export type NoteFormType = {
  file_url: string;
  classId: string;
  subjectName: string;
  topicName: string;
  educationLevel: string;
  allow_feedback?: boolean;
  allow_downloads?: boolean;
  anonymous?: boolean;
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
  educationOptions: { value: string; label: string }[];
  classYearOptions: { value: string; label: string }[];
}


export type StepThreeInputProps = {
  control: any;
  handleSubmit: any;
  onClose: () => void;
  setStep: (step: number) => void;
  handleClose: () => void;
  reset: () => void;
}
