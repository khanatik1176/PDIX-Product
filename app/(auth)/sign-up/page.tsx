'use client';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { Checkbox } from '@/components/ui/checkbox';
import { Eye, EyeOff } from 'lucide-react';

// You can use a Google SVG or an image. Here is a simple SVG for the Google logo:
const GoogleLogo = () => (
  <svg className='mr-2 h-5 w-5' viewBox='0 0 24 24'>
    <g>
      <path
        fill='#4285F4'
        d='M21.6 12.227c0-.818-.073-1.604-.209-2.364H12v4.482h5.406a4.62 4.62 0 01-2.004 3.034v2.522h3.24c1.895-1.747 2.988-4.32 2.988-7.674z'
      />
      <path
        fill='#34A853'
        d='M12 22c2.43 0 4.47-.805 5.96-2.188l-3.24-2.522c-.9.604-2.05.963-3.32.963-2.553 0-4.72-1.724-5.495-4.043H2.56v2.54A10 10 0 0012 22z'
      />
      <path
        fill='#FBBC05'
        d='M6.505 14.21A5.996 5.996 0 016.13 12c0-.76.13-1.495.375-2.21V7.25H2.56A10 10 0 002 12c0 1.64.395 3.195 1.095 4.545l3.41-2.335z'
      />
      <path
        fill='#EA4335'
        d='M12 6.438c1.32 0 2.5.454 3.43 1.345l2.57-2.57C16.47 3.805 14.43 3 12 3A10 10 0 002.56 7.25l3.41 2.54C7.28 8.162 9.447 6.438 12 6.438z'
      />
    </g>
  </svg>
);

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirm: '',
    acceptTerms: false,
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (checked: boolean) => {
    setForm({ ...form, acceptTerms: checked });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.email || !form.password || !form.confirm) {
      setError('Please fill all fields.');
      return;
    }
    if (form.password !== form.confirm) {
      setError('Passwords do not match.');
      return;
    }
    if (!form.acceptTerms) {
      setError('You must accept the terms and conditions.');
      return;
    }
    // Registration logic here
  };

  return (
    <div className='flex min-h-screen items-center justify-center bg-bgSecondary px-6 md:px-0'>
      <div className='w-full max-w-md rounded-lg bg-white p-8 shadow-lg'>
        <h1 className='mb-2 text-start text-2xl font-bold text-black'>
          Sign Up
        </h1>
        <div className='mb-6 text-start text-sm text-inputFooterColor'>
          Join now to start taking notes!
        </div>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <div>
            <Label htmlFor='email' className='mb-1 block text-sm font-medium'>
              Email
            </Label>
            <Input
              id='email'
              name='email'
              type='email'
              placeholder='Enter your email'
              className='w-full'
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label
              htmlFor='password'
              className='mb-1 block text-sm font-medium'
            >
              Password
            </Label>
            <div className='relative'>
              <Input
                id='password'
                name='password'
                type={showPassword ? 'text' : 'password'}
                placeholder='Create a password'
                className='w-full pr-10'
                value={form.password}
                onChange={handleChange}
                required
              />
              <button
                type='button'
                className='absolute right-2 top-2'
                onClick={() => setShowPassword((v) => !v)}
                tabIndex={-1}
              >
                {showPassword ? (
                  <EyeOff className='h-5 w-5 text-inputFooterColor' />
                ) : (
                  <Eye className='h-5 w-5 text-inputFooterColor' />
                )}
              </button>
            </div>
          </div>
          <div>
            <Label htmlFor='confirm' className='mb-1 block text-sm font-medium'>
              Confirm Password
            </Label>
            <div className='relative'>
              <Input
                id='confirm'
                name='confirm'
                type={showConfirm ? 'text' : 'password'}
                placeholder='Confirm your password'
                className='w-full pr-10'
                value={form.confirm}
                onChange={handleChange}
                required
              />
              <button
                type='button'
                className='absolute right-2 top-2'
                onClick={() => setShowConfirm((v) => !v)}
                tabIndex={-1}
              >
                {showConfirm ? (
                  <EyeOff className='h-5 w-5 text-inputFooterColor' />
                ) : (
                  <Eye className='h-5 w-5 text-inputFooterColor' />
                )}
              </button>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <Checkbox
              id='acceptTerms'
              checked={form.acceptTerms}
              onCheckedChange={handleCheckbox}
              className='h-4 w-4 accent-primary'
              required
            />
            <Label htmlFor='acceptTerms' className='text-sm'>
              I accept the{' '}
              <Link href='/terms' className='text-primary underline'>
                terms and conditions
              </Link>
            </Label>
          </div>
          {error && <div className='text-sm text-red-500'>{error}</div>}
          <Button type='submit' className='mt-2 w-full'>
            Sign Up
          </Button>
        </form>
        <Button
          variant='outline'
          className='mt-4 flex w-full items-center justify-center gap-2'
        >
          <GoogleLogo />
          Continue with Google
        </Button>
        <div className='mt-6 text-center text-sm'>
          Already have an account?{' '}
          <Link href='/sign-in' className='text-primary underline'>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
