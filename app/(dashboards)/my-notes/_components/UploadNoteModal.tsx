import React, { useState, useRef } from 'react';
import { X, FileUp, FileText, Check } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { UploadNoteModalProps } from '@/types/MyNotesType';

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
  const [tab, setTab] = useState<'pdf' | 'url'>('pdf');
  const [url, setUrl] = useState('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [topic, setTopic] = useState('');
  const [educationLevel, setEducationLevel] = useState('');
  const [classYear, setClassYear] = useState('');
  const [subject, setSubject] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [anonymous, setAnonymous] = useState(false);
  const [allowFeedback, setAllowFeedback] = useState(false);
  const [enableDownload, setEnableDownload] = useState(false);
  if (!open) return null;

  // Colors: adjust these to match your Tailwind config
  const primaryBg = 'bg-primary';
  const primaryText = 'text-primary';

  // Get file name for step 2
  const fileName = tab === 'pdf' ? uploadedFile?.name : url ? url : '';

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
          <button onClick={onClose} className='p-2'>
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
                    ? `${primaryBg} border-primary text-white`
                    : step > n
                      ? `${primaryBg} border-primary text-white`
                      : `bg-[#F6F6F6] ${primaryText} border-none`
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
        {/* Step 1 Content */}
        {step === 1 && (
          <>
            <div className='mb-4 flex rounded-lg bg-[#f3f4f6] p-1'>
              <button
                className={`flex-1 rounded-lg py-2 font-medium transition-colors ${
                  tab === 'pdf'
                    ? 'bg-white text-black shadow'
                    : 'bg-transparent text-gray-400'
                }`}
                onClick={() => setTab('pdf')}
                type='button'
              >
                Upload PDF
              </button>
              <button
                className={`flex-1 rounded-lg py-2 font-medium transition-colors ${
                  tab === 'url'
                    ? 'bg-white text-black shadow'
                    : 'bg-transparent text-gray-400'
                }`}
                onClick={() => setTab('url')}
                type='button'
              >
                Enter URL
              </button>
            </div>
            {/* PDF Upload Area */}
            {tab === 'pdf' && (
              <>
                <div
                  className='flex h-[256px] w-full max-w-[400px] cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 bg-[#F1F5F9] py-8'
                  onClick={() => fileInputRef.current?.click()}
                >
                  <FileUp
                    size={40}
                    strokeWidth={1}
                    className='mb-2 text-gray-400'
                  />
                  <div className='mb-2 text-twelve italic text-inputFooterColor md:text-sm'>
                    Drag n drop files here or click to select file
                  </div>
                  <Input
                    type='file'
                    accept='application/pdf'
                    ref={fileInputRef}
                    className='hidden'
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) setUploadedFile(file);
                    }}
                  />
                </div>
                {uploadedFile && (
                  <div className='mt-4 flex w-full items-center justify-between rounded px-2 py-2'>
                    <span className='flex items-center gap-2 text-sm font-medium text-black'>
                      <FileText className='h-4 w-4 text-black' />
                      {uploadedFile.name}
                    </span>
                    <button
                      type='button'
                      onClick={() => setUploadedFile(null)}
                      className='ml-2'
                    >
                      <X className='h-4 w-4 text-black' />
                    </button>
                  </div>
                )}
                <Button className='mt-4 w-full' onClick={() => setStep(2)}>
                  Next
                </Button>
              </>
            )}
            {/* URL Input Area */}
            {tab === 'url' && (
              <form
                className='mt-2'
                onSubmit={(e) => {
                  e.preventDefault();
                  setStep(2);
                }}
              >
                <label className='mb-1 flex items-center gap-1 text-sm font-medium'>
                  URL <span className='text-red-500'>*</span>
                </label>
                <Input
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder='Enter URL'
                  className='mb-4'
                />
                {url && (
                  <div className='mb-4 flex w-full items-center justify-between rounded bg-[#F1F5F9] px-2 py-2'>
                    <span className='flex items-center gap-2 text-sm font-medium text-black'>
                      <FileText className='h-4 w-4 text-black' />
                      {url}
                    </span>
                    <button
                      type='button'
                      onClick={() => setUrl('')}
                      className='ml-2'
                    >
                      <X className='h-4 w-4 text-black' />
                    </button>
                  </div>
                )}
                <Button type='submit' className='w-full'>
                  Next
                </Button>
              </form>
            )}
          </>
        )}
        {/* Step 2 Content */}
        {step === 2 && (
          <form
            className='flex flex-col gap-3'
            onSubmit={(e) => {
              e.preventDefault();
              setStep(3);
            }}
          >
            {/* File name with icon */}
            <div className='mb-2 flex items-center gap-2'>
              <FileText className='h-5 w-5 text-black' />
              <span className='break-all text-sm font-medium text-black'>
                {fileName}
              </span>
            </div>
            {/* Topic name */}
            <label className='flex items-center gap-1 text-sm font-medium'>
              Topic name <span className='text-red-500'>*</span>
            </label>
            <Input
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder='Enter topic name'
            />
            {/* Education Level */}
            <label className='flex items-center gap-1 text-sm font-medium'>
              Education Level <span className='text-red-500'>*</span>
            </label>
            <Select value={educationLevel} onValueChange={setEducationLevel}>
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
            {/* Class/Year */}
            <label className='flex items-center gap-1 text-sm font-medium'>
              Class/Year <span className='text-red-500'>*</span>
            </label>
            <Select value={classYear} onValueChange={setClassYear}>
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
            {/* Subject */}
            <label className='flex items-center gap-1 text-sm font-medium'>
              Subject <span className='text-red-500'>*</span>
            </label>
            <Input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder='Enter subject'
            />
            {/* Buttons */}
            <Button type='submit' className='mt-2 w-full'>
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
        )}
        {/* Step 3 Content */}
        {step === 3 && (
          <form
            className='flex h-full flex-col gap-4'
            onSubmit={(e) => {
              e.preventDefault();
              // handle upload logic here
              onClose();
            }}
          >
            {/* Post anonymously */}
            <div>
              <h3 className='mb-2 text-base font-semibold'>Post anonymously</h3>
              <label className='flex items-center gap-2'>
                <input
                  type='checkbox'
                  className='h-4 w-4 accent-primary'
                  checked={anonymous}
                  onChange={(e) => setAnonymous(e.target.checked)}
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
                <input
                  type='checkbox'
                  className='h-4 w-4 accent-primary'
                  checked={allowFeedback}
                  onChange={(e) => setAllowFeedback(e.target.checked)}
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
                <input
                  type='checkbox'
                  className='h-4 w-4 accent-primary'
                  checked={enableDownload}
                  onChange={(e) => setEnableDownload(e.target.checked)}
                />
                <span className='text-sm'>
                  Allow others to download the uploaded file
                </span>
              </label>
            </div>
            {/* Buttons */}
            <Button type='submit' className='mt-4 w-full'>
              Upload note
            </Button>
            <Button
              type='button'
              variant='outline'
              className='mt-2 w-full'
              onClick={() => setStep(2)}
            >
              Back
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default UploadNoteModal;
