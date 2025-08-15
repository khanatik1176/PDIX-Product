import { Controller } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { X, FileText } from 'lucide-react';
import { StepOneInputProps } from '@/types/NoteTypes';

const StepOneInput: React.FC<StepOneInputProps> = ({
  control,
  trigger,
  setStep,
  setValue,
  errors,
  url,
}) => {
  return (
    <>
      <div className='mb-4 flex rounded-lg bg-[#f3f4f6] p-1'>
        <button
          className='pointer-events-none flex-1 cursor-not-allowed rounded-lg bg-transparent py-2 font-medium text-gray-400 opacity-50 transition-colors'
          type='button'
          disabled
        >
          Upload PDF
        </button>
        <button
          className={`flex-1 rounded-lg bg-white py-2 font-medium text-black shadow transition-colors`}
          type='button'
        >
          Enter URL
        </button>
      </div>
      <form
        className='mt-2'
        onSubmit={async (e) => {
          e.preventDefault();
          const valid = await trigger('file_url');
          if (valid) setStep(2);
        }}
        autoComplete='off'
      >
        <div className='relative mb-2'>
          <label className='mb-1 flex items-center gap-1 text-sm font-medium'>
            URL <span className='text-red-500'>*</span>
          </label>
          <Controller
            name='file_url'
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder='Enter URL'
                className='mb-1'
                value={field.value}
                onChange={(e) => {
                  field.onChange(e.target.value);
                }}
              />
            )}
          />
        </div>
        {url && (
          <div className='relative mb-7'>
            <div className='flex w-full items-center justify-between rounded bg-[#F1F5F9] px-2 py-2'>
              <span
                className='flex max-w-[400px] items-center gap-2 overflow-x-auto whitespace-nowrap text-sm font-medium text-black'
                style={{ scrollbarWidth: 'thin' }}
              >
                <FileText className='h-4 w-4 text-black' />
                {url}
              </span>
              <button
                type='button'
                onClick={() => setValue('file_url', '')}
                className='ml-2'
              >
                <X className='h-4 w-4 text-black' />
              </button>
            </div>
            {errors.file_url && (
              <div className='absolute left-0 top-full mt-1 text-xs text-red-500'>
                {errors.file_url.message}
              </div>
            )}
          </div>
        )}
        <Button
          type='submit'
          className='w-full'
          disabled={!url || !!errors.file_url}
        >
          Next
        </Button>
      </form>
    </>
  );
};

export default StepOneInput;
