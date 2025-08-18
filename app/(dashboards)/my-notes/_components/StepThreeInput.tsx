'use client';
import React from 'react';
import { Controller } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { StepThreeInputProps } from '@/types/NoteTypes';
import { useMutation } from '@tanstack/react-query';
import { handleNoteUpload } from '@/helpers/Notes/NotesApi';
import { toast } from '@/hooks/use-toast';

const StepThreeInput: React.FC<StepThreeInputProps> = ({
  control,
  handleSubmit,
  setStep,
  reset,
  onClose,
}) => {
  // Mutation for note upload
  const noteUploadMutation = useMutation({
    mutationFn: handleNoteUpload,
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Note uploaded successfully!',
        variant: 'default',
      });
      reset();
      setStep(1);
      onClose();
    },
    onError: (error: any) => {
      toast({
        title: 'Error',
        description: error?.response?.data?.message || 'Failed to upload note.',
        variant: 'destructive',
      });
    },
  });

  const handleSubmission = (data: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { educationLevel, ...filteredData } = data;
    noteUploadMutation.mutate(filteredData);
  };

  return (
    <form
      className='flex h-full flex-col gap-4'
      onSubmit={handleSubmit(handleSubmission)}
    >
      {/* Post anonymously */}
      <div>
        <h3 className='mb-2 text-base font-semibold'>Post anonymously</h3>
        <label className='flex items-center gap-2'>
          <Controller
            name='isAnonymous'
            control={control}
            render={({ field }) => (
              <input
                type='checkbox'
                className='h-4 w-4 accent-primary'
                checked={field.value}
                onChange={e => field.onChange(e.target.checked)}
              />
            )}
          />
          <span className='text-sm'>
            Hide your name and identity when sharing this note.
          </span>
        </label>
      </div>
      {/* Allow feedback */}
      <div>
        <h3 className='mb-2 text-base font-semibold'>Allow feedback</h3>
        <label className='flex items-center gap-2'>
          <Controller
            name='isFeedbackAllowed'
            control={control}
            render={({ field }) => (
              <input
                type='checkbox'
                className='h-4 w-4 accent-primary'
                checked={field.value}
                onChange={e => field.onChange(e.target.checked)}
              />
            )}
          />
          <span className='text-sm'>
            Let others comment or provide feedback on your note.
          </span>
        </label>
      </div>
      {/* Enable downloads */}
      <div>
        <h3 className='mb-2 text-base font-semibold'>Enable downloads</h3>
        <label className='flex items-center gap-2'>
          <Controller
            name='isDownloadAllowed'
            control={control}
            render={({ field }) => (
              <input
                type='checkbox'
                className='h-4 w-4 accent-primary'
                checked={field.value}
                onChange={e => field.onChange(e.target.checked)}
              />
            )}
          />
          <span className='text-sm'>
            Allow others to download the uploaded file
          </span>
        </label>
      </div>
      <Button type='submit' className='mt-4 w-full' disabled={noteUploadMutation.isPending}>
        {noteUploadMutation.isPending ? 'Uploading...' : 'Upload note'}
      </Button>
      <Button
        type='button'
        variant='outline'
        className='mt-2 w-full'
        onClick={() => setStep(2)}
        disabled={noteUploadMutation.isPending}
      >
        Back
      </Button>
    </form>
  );
};

export default StepThreeInput;