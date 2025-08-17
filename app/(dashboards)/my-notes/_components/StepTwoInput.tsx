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
import { StepTwoInputProps } from '@/types/NoteTypes';

const StepTwoInput: React.FC<StepTwoInputProps> = ({
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
  classYearOptions,
}) => {
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
          className='max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap text-sm font-medium text-black cursor-pointer'
          title={getValues('file_url')}
        >
          {getValues('file_url')}
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
            <Input {...field} placeholder='Enter topic name' />
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
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Select education level' />
              </SelectTrigger>
              <SelectContent>
                {educationOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
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
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Select class/year' />
              </SelectTrigger>
              <SelectContent>
                {classYearOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
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
            <Input {...field} placeholder='Enter subject' />
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
