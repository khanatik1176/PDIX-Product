import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import { UploadNoteModalProps } from '@/types/MyNotesType';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { NoteSchema } from '@/schema/NoteSchema';
import { NoteFormType } from '@/types/NoteTypes';

// Import your step components
import StepOneInput from './StepOneInput';
import StepTwoInput from './StepTwoInput';
import StepThreeInput from './StepThreeInput';

const educationOptions = [
  { value: 'high-school', label: 'High School' },
  { value: 'university', label: 'University' },
];

const classYearOptions = [
  { value: 'grade-1', label: 'Grade 1' },
  { value: 'grade-2', label: 'Grade 2' },
  { value: 'grade-10', label: 'Grade 10' },
  { value: 'bsc', label: 'BSc' },
];

const UploadNoteModal: React.FC<UploadNoteModalProps> = ({ open, onClose }) => {
  const [step, setStep] = useState(1);

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    trigger,
    reset,
    formState: { errors },
    watch,
  } = useForm<NoteFormType>({
    resolver: zodResolver(NoteSchema),
    defaultValues: {
      file_url: '',
      topicName: '',
      educationLevel: '',
      classId: '',
      subjectName: '',
      anonymous: false,
      allow_feedback: false,
      allow_downloads: false,
    },
  });

  const url = watch('file_url');
  const topic = watch('topicName');
  const educationLevel = watch('educationLevel');
  const classYear = watch('classId');
  const subject = watch('subjectName');


    const handleClose = () => {
    reset();
    setStep(1);
    onClose();
  };

  if (!open) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/30'>
      <div className='fixed bottom-0 w-full max-w-md rounded-lg bg-white p-6 shadow-lg md:relative'>
        {/* Title, subtitle, X icon */}
        <div className='mb-4 flex items-center justify-between'>
          <div>
            <h2 className='pb-2 text-2xl font-semibold'>Upload your note</h2>
            <div className='text-sm text-inputFooterColor'>
              Upload your note as a PDF or URL
            </div>
          </div>
          <button onClick={handleClose} className='p-2'>
            <X className='h-5 w-5 text-gray-500' />
          </button>
        </div>
        {/* Stepper with lines */}
        <div className='mb-6 flex items-center justify-center'>
          {[1, 2, 3].map((n, idx) => (
            <React.Fragment key={n}>
              <div
                className={`mt-4 flex h-7 w-7 items-center justify-center rounded-full border-2 font-semibold ${
                  step === n
                    ? 'bg-primary border-primary text-white'
                    : step > n
                    ? 'bg-primary border-primary text-white'
                    : 'bg-[#F6F6F6] text-primary border-none'
                }`}
              >
                {step > n ? <Check className='h-4 w-4 text-white' /> : n}
              </div>
              {idx < 2 && (
                <div
                  className={`mx-1 mt-4 h-[2px] w-full max-w-[110px] rounded ${
                    step > n ? 'bg-primary' : 'bg-black'
                  } md:max-w-[145px]`}
                />
              )}
            </React.Fragment>
          ))}
        </div>
        {/* Step Content */}
        {step === 1 && (
          <StepOneInput
            control={control}
            trigger={trigger}
            setStep={setStep}
            setValue={setValue}
            errors={errors}
            url={url}
          />
        )}
        {step === 2 && (
          <StepTwoInput
            control={control}
            trigger={trigger}
            setStep={setStep}
            getValues={getValues}
            errors={errors}
            topic={topic}
            educationLevel={educationLevel}
            classYear={classYear}
            subject={subject}
            educationOptions={educationOptions}
            classYearOptions={classYearOptions}
          />
        )}
        {step === 3 && (
          <StepThreeInput
            control={control}
            handleSubmit={handleSubmit}
            onClose={onClose}
            setStep={setStep}
            handleClose={handleClose}
            reset={reset}
          />
        )}
      </div>
    </div>
  );
};

export default UploadNoteModal;