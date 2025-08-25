import React, { FC, useState } from 'react';
import { X, Copy, SendHorizontal, Check } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ShareNoteModalProps } from '@/types/MyNotes.types';

const ShareNoteModal: FC<ShareNoteModalProps> = ({
  open,
  onClose,
  shareLink,
}) => {
  const [email, setEmail] = useState('');
  const [copied, setCopied] = useState(false);

  if (!open) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/30'>
      <div className='fixed bottom-0 h-[330px] w-full max-w-md rounded-lg bg-white p-6 shadow-lg sm:relative'>
        {/* Title, subtitle, X icon */}
        <div className='mb-4 flex items-center justify-between'>
          <div className='pb-6'>
            <h2 className='pb-2 text-2xl font-semibold'>Share Note</h2>
            <div className='text-sm text-inputFooterColor'>
              Share the note via email or direct link.
            </div>
          </div>
          <button onClick={onClose} className='px-2 pb-8'>
            <X className='h-5 w-5 text-gray-500' />
          </button>
        </div>
        {/* Email share section */}
        <label className='mb-1 block text-sm font-medium'>Email</label>
        <div className='mb-12 flex items-center gap-2'>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email address'
            className='flex-1'
          />
          <Button type='button' className='shrink-0' size='sm'>
            {isMobile ? <SendHorizontal className='h-4 w-4' /> : 'Share'}
          </Button>
        </div>
        {/* Link copy section */}
        <label className='mb-1 block text-sm font-medium'>Link</label>
        <div className='flex items-center gap-2'>
          <Input
            value={shareLink}
            readOnly
            className='flex-1 text-inputFooterColor'
          />
          <Button
            type='button'
            variant='outline'
            className='shrink-0'
            size='sm'
            onClick={handleCopy}
          >
            {isMobile ? (
              copied ? (
                <Check className='h-4 w-4' />
              ) : (
                <Copy className='h-4 w-4' />
              )
            ) : copied ? (
              'Copied!'
            ) : (
              'Copy'
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShareNoteModal;
