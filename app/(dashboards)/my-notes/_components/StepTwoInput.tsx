import React, { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Controller } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FileText } from 'lucide-react';
import { Option, StepTwoInputProps } from '@/types/NoteTypes';
import {
  getClassesByEducationLevel,
  getSubjectByClassId,
} from '@/helpers/Notes/NotesApi';

const StepTwoInput: FC<StepTwoInputProps> = ({
  control,
  trigger,
  setStep,
  getValues,
  errors,
  topic,
  educationLevel,
  classYear,
  subject,
  educationOptions,
}) => {
  const { data: classYearOptions = [], isLoading: isClassLoading } = useQuery({
    queryKey: ['classes', educationLevel],
    queryFn: () => getClassesByEducationLevel(educationLevel),
    enabled: !!educationLevel,
  });

  return (
    <form
      className='flex flex-col gap-3'
      onSubmit={async (e) => {
        e.preventDefault();
        const valid = await trigger([
          'topicName',
          'educationLevel',
          'classId',
          'subjectName',
        ]);
        if (valid) setStep(3);
      }}
      autoComplete='off'
    >
      <div className='mb-2 flex items-center gap-2'>
        <FileText className='h-5 w-5 text-black' />
        <span
          className='max-w-[200px] cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap text-sm font-medium text-black'
          title={getValues('fileUrl')}
        >
          {getValues('fileUrl')}
        </span>
      </div>
      {/* Topic name */}
      <div className='relative'>
        <label className='flex items-center gap-1 text-sm font-medium'>
          Topic name <span className='text-red-500'>*</span>
        </label>
        <Controller
          name='topicName'
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="e.g., Newton's Laws of Motion"
              className='placeholder:text-inputFooterColor placeholder:italic'
              disabled={!subject}
            />
          )}
        />
        {errors.topicName && (
          <div className='absolute left-0 top-full mt-1 text-xs text-red-500'>
            {errors.topicName.message}
          </div>
        )}
      </div>
      {/* Education Level */}
      <div className='relative'>
        <label className='flex items-center gap-1 text-sm font-medium'>
          Education Level <span className='text-red-500'>*</span>
        </label>
        <Controller
          name='educationLevel'
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className='flex w-full items-center justify-between'>
                <SelectValue placeholder='Select education level' />
                <span className='ml-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4 text-gray-500'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M19 9l-7 7-7-7'
                    />
                  </svg>
                </span>
              </SelectTrigger>
              <SelectContent>
                {educationOptions
                  .filter((opt) => opt.id && opt.id.trim() !== '')
                  .map((opt) => (
                    <SelectItem key={opt.id} value={opt.id}>
                      {opt.name}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.educationLevel && (
          <div className='absolute left-0 top-full mt-1 text-xs text-red-500'>
            {errors.educationLevel.message}
          </div>
        )}
      </div>
      {/* Class/Year */}
      <div className='relative'>
        <label className='flex items-center gap-1 text-sm font-medium'>
          Class/Year <span className='text-red-500'>*</span>
        </label>
        <Controller
          name='classId'
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className='flex w-full items-center justify-between'>
                <SelectValue placeholder='Select class/year' />
                <span className='ml-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4 text-gray-500'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M19 9l-7 7-7-7'
                    />
                  </svg>
                </span>
              </SelectTrigger>
              <SelectContent>
                {isClassLoading ? (
                  <SelectItem disabled value='loading'>
                    Loading...
                  </SelectItem>
                ) : (
                  classYearOptions
                    .filter((opt: Option) => opt.id && opt.id.trim() !== '')
                    .map((opt: { id: string; name: string }) => (
                      <SelectItem key={opt.id} value={opt.id}>
                        {opt.name}
                      </SelectItem>
                    ))
                )}
              </SelectContent>
            </Select>
          )}
        />
        {errors.classId && (
          <div className='absolute left-0 top-full mt-1 text-xs text-red-500'>
            {errors.classId.message}
          </div>
        )}
      </div>
      {/* Subject */}
      <div className='relative'>
        <label className='flex items-center gap-1 text-sm font-medium'>
          Subject <span className='text-red-500'>*</span>
        </label>
        <Controller
          name='subjectName'
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder='e.g., Physics, Literature' className='mb-1 placeholder:text-inputFooterColor placeholder:italic' />
          )}
        />
        {errors.subjectName && (
          <div className='absolute left-0 top-full mt-1 text-xs text-red-500'>
            {errors.subjectName.message}
          </div>
        )}
      </div>
      <Button
        type='submit'
        className='mt-2 w-full'
        disabled={
          !topic ||
          !educationLevel ||
          !classYear ||
          !subject ||
          !!errors.topicName ||
          !!errors.educationLevel ||
          !!errors.classId ||
          !!errors.subjectName
        }
      >
        Next
      </Button>
      <Button
        type='button'
        variant='outline'
        className='mt-2 w-full'
        onClick={() => setStep(1)}
      >
        Back
      </Button>
    </form>
  );
};

export default StepTwoInput;
