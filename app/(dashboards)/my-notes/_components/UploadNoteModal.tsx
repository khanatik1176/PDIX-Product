import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import { UploadNoteModalProps } from '@/types/MyNotes.types';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { NoteSchema } from '@/schema/NoteSchema';
import { NoteFormType, Option } from '@/types/Note.types';
import StepOneInput from './StepOneInput';
import StepTwoInput from './StepTwoInput';
import StepThreeInput from './StepThreeInput';
import { useQuery } from '@tanstack/react-query';
import { getAllEducationLevels, getSubjectByClassId, getTopicSuggestions } from '@/helpers/Notes/NotesApi';

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
      title: '',
      fileUrl: '',
      topicName: '',
      educationLevel: '',
      classId: '',
      subjectName: '',
      isAnonymous: false,
      isFeedbackAllowed: false,
      isDownloadAllowed: false,
    },
  });

  const url = watch('fileUrl');
  const topic = watch('topicName');
  const educationLevel = watch('educationLevel');
  const classYear = watch('classId');
  const subject = watch('subjectName');

  const handleClose = () => {
    reset();
    setStep(1);
    onClose();
  };

  const { data: educationLevels } = useQuery<Option[]>({
    queryKey: ['educationLevels'],
    queryFn: getAllEducationLevels,
  });

  const { data: subjects } = useQuery<Option[]>({
    queryKey: ['subjects', classYear],
    queryFn: () => getSubjectByClassId(classYear),
    enabled: !!classYear,
  });

  const { data: topics } = useQuery<Option[]>({
    queryKey: ['topics', topic],
    queryFn: () => getTopicSuggestions(topic),
    enabled: !!topic,
  });

  console.log("Topic", topic);
  console.log("Education Levels", educationLevels);
  console.log("Class", classYear);
  console.log("subjects", subjects);
  console.log("topics", topics);

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
                    ? 'border-primary bg-primary text-white'
                    : step > n
                      ? 'border-primary bg-primary text-white'
                      : 'border-none bg-[#F6F6F6] text-primary'
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
            educationOptions={educationLevels ?? []}
            subjects={subjects ?? []}
            topics={topics ?? []}
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
