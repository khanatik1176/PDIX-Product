import React, { FC } from 'react';
import { Button } from '@/components/ui/button';
import { GoogleSignInButtonProps } from '@/types/Auth.types';
import { GoogleLogo } from '@/constants/globalFunctions';



const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({
  onClick,
  className,
}) => (
  <Button
    type='button'
    variant='outline'
    className={`mt-2 flex w-full items-center justify-center gap-2 border border-gray-300 ${className || ''}`}
    onClick={onClick}
  >
    <span className='inline-block h-5 w-5'>
      <GoogleLogo />
    </span>
    Continue with Google
  </Button>
);

export default GoogleSignInButton;
