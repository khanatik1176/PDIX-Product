import React, { FC, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ChevronDown, FileText, Upload, X } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { EditNoteModalProps } from '@/types/MyNotesType';

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

const EditNoteModal: FC<EditNoteModalProps> = ({
  open,
  onClose,
  filename,
  onFileUpload,
  onFileRemove,
  topic,
  onTopicChange,
  educationLevel,
  onEducationLevelChange,
  classYear,
  onClassYearChange,
  subject,
  onSubjectChange,
  onUpdate,
  setFilename,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileUpload(file);
      setFilename(file.name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate();
  };

  if (!open) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/30'>
      <div className='fixed bottom-0 mx-2 flex w-full max-w-full flex-col items-start gap-3 rounded-lg rounded-t-2xl bg-white p-6 shadow-lg sm:fixed sm:inset-0 sm:bottom-auto sm:left-1/2 sm:top-1/2 sm:mx-0 sm:max-w-md sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-lg sm:p-6'>
        <h2 className='text-2xl font-semibold'>Edit Note</h2>
        <div className='mb-2 text-sm font-normal text-inputFooterColor'>
          Update the note details.
        </div>
        <form className='w-full' onSubmit={handleSubmit}>
          <div className='mb-4 flex w-full items-center justify-between gap-2'>
            <span className='flex items-center gap-2'>
              <FileText className='h-6 w-6 text-black' />
              <span className='break-words text-twelve font-normal'>
                {filename}
              </span>
            </span>
            <div className='flex items-center gap-2'>
              <Button
                variant='outline'
                className='border-none'
                size='icon'
                type='button'
                onClick={handleUploadClick}
              >
                <Upload className='h-5 w-5' />
              </Button>
              <Input
                type='file'
                ref={fileInputRef}
                className='hidden'
                onChange={handleFileChange}
                title='Upload file'
                placeholder='Choose a file to upload'
              />
              <Button
                variant='outline'
                className='border-none'
                size='icon'
                type='button'
                onClick={onFileRemove}
              >
                <X className='h-5 w-5 text-black' />
              </Button>
            </div>
          </div>
          <div className='mb-4'>
            <label className='mb-1 flex items-center gap-1 text-sm font-medium'>
              Topic name <span className='text-red-500'>*</span>
            </label>
            <Input
              value={topic}
              onChange={(e) => onTopicChange(e.target.value)}
              placeholder='Enter topic name'
            />
          </div>
          <div className='mb-4'>
            <label className='mb-1 flex items-center gap-1 text-sm font-medium'>
              Education level <span className='text-red-500'>*</span>
            </label>
            <Select
              value={educationLevel}
              onValueChange={onEducationLevelChange}
            >
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Select education level' />
                <ChevronDown className='ml-2 h-4 w-4 text-gray-400' />
              </SelectTrigger>
              <SelectContent>
                {educationOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className='mb-4'>
            <label className='mb-1 flex items-center gap-1 text-sm font-medium'>
              Class/year <span className='text-red-500'>*</span>
            </label>
            <Select value={classYear} onValueChange={onClassYearChange}>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Select class/year' />
                <ChevronDown className='ml-2 h-4 w-4 text-gray-400' />
              </SelectTrigger>
              <SelectContent>
                {classYearOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className='mb-4'>
            <label className='mb-1 flex items-center gap-1 text-sm font-medium'>
              Subject <span className='text-red-500'>*</span>
            </label>
            <Input
              value={subject}
              onChange={(e) => onSubjectChange(e.target.value)}
              placeholder='Enter subject'
            />
          </div>
          <Button className='my-2 w-full' type='submit'>
            Update
          </Button>
        </form>
        <Button variant='outline' className='w-full' onClick={onClose}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default EditNoteModal;
