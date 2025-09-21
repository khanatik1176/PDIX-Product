'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { Checkbox } from '@/components/ui/checkbox';
import { Circle, Eye, EyeOff } from 'lucide-react';
import { GoogleLogo } from '@/constants/globalFunctions';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TBasicSignupFormInputs } from '@/types/Auth.types';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpSchema } from '@/schema/AuthSchema';
import { useMutation } from '@tanstack/react-query';
import { handleBasicSignup, handleGoogleSignIn } from '@/helpers/Auth/AuthApi';
import { BaseInput } from '@/components/BaseInput';
import GoogleSignInButton from '@/components/GoogleSignInButton';

const SignUp = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TBasicSignupFormInputs>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: '',
      password: '',
      confirm: '',
    },
  });

  const basicSignUpMutation = useMutation({
    mutationFn: handleBasicSignup,
    onSuccess: () => {
      router.push('/sign-in');
    },
    onError: (error: any) => {
      if (error.message) {
        setErrorMessage('Email already exists.');
      }
    },
  });

  const handleSubmission: SubmitHandler<TBasicSignupFormInputs> = (data) => {
    setErrorMessage(null);
    if (!acceptTerms) {
      setErrorMessage('You must accept the terms and conditions.');
      return;
    }
    const refinePayload = {
      email: data?.email,
      password: data?.password,
    };
    basicSignUpMutation.mutate(refinePayload);
  };

  return (
    <div className='flex min-h-screen items-center justify-center bg-bgSecondary px-6 md:px-0'>
      <div className='relative w-full max-w-md rounded-lg bg-white p-8 shadow-lg'>
        <h1 className='mb-2 text-start text-2xl font-bold text-black'>
          Sign Up
        </h1>
        <div className='mb-6 text-start text-sm text-inputFooterColor'>
          Join now to start taking notes!
        </div>
        <form
          className='flex flex-col gap-4'
          onSubmit={handleSubmit(handleSubmission)}
        >
          <div className='relative mb-2'>
            <Label
              htmlFor='email'
              className='mb-1 flex items-center gap-1 text-sm font-medium'
            >
              Email <span className='text-red-500'>*</span>
            </Label>
            <BaseInput
              id='email'
              name='email'
              type='email'
              control={control}
              errors={errors}
              placeholder='Enter your email'
              className='w-full'
            />
          </div>
          <div className='relative mb-2'>
            <Label
              htmlFor='password'
              className='mb-1 flex items-center gap-1 text-sm font-medium'
            >
              Password <span className='text-red-500'>*</span>
            </Label>
            <div className='relative'>
              <BaseInput
                id='password'
                name='password'
                type={showPassword ? 'text' : 'password'}
                control={control}
                errors={errors}
                placeholder='Create a password'
                className='w-full pr-10'
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
          <div className='relative mb-3'>
            <Label
              htmlFor='confirm'
              className='mb-1 flex items-center gap-1 text-sm font-medium'
            >
              Confirm Password <span className='text-red-500'>*</span>
            </Label>
            <div className='relative'>
              <BaseInput
                id='confirm'
                name='confirm'
                type={showConfirm ? 'text' : 'password'}
                control={control}
                errors={errors}
                placeholder='Confirm your password'
                className='w-full pr-10'
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
          <div className='relative mb-3'>
            <div className='flex items-center gap-2'>
              <Checkbox
                id='acceptTerms'
                checked={acceptTerms}
                onCheckedChange={(checked) => setAcceptTerms(checked === true)}
                className='h-4 w-4 text-white accent-primary'
              />
              <Label
                htmlFor='acceptTerms'
                className='flex items-center gap-1 text-sm'
              >
                I accept the{' '}
                <Link href='/terms' className='text-primary underline'>
                  terms and conditions
                </Link>
              </Label>
            </div>
            {errorMessage && (
              <div className='text-medium absolute mt-1 text-sm text-destructive'>
                {errorMessage}
              </div>
            )}
          </div>
          <Button type='submit' className='w-full'>
            {basicSignUpMutation.isPending ? (
              <Circle className='animate-spin' />
            ) : (
              'Sign up'
            )}
          </Button>
        </form>
        <GoogleSignInButton onClick={handleGoogleSignIn} />
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
