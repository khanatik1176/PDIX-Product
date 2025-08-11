import { passwordRegex } from '@/constants/globalConstants';
import { z } from 'zod';

export const SignUpSchema = z
  .object({
    email: z
      .string({ required_error: 'Email is required' })
      .min(1, { message: 'Email is required.' })
      .email({ message: 'Invalid email address' }),
    password: z
      .string({ required_error: 'Password is required.' })
      .min(8, 'Minimum 8 characters.')
      .regex(passwordRegex, 'Use uppercase, lowercase & special character.'),
    confirm: z
      .string({ required_error: 'Confirm password is required.' })
      .min(1, { message: 'Confirm password is required.' })
      .optional(),
  })
  .refine((data) => data.password === data.confirm, {
    message: 'Passwords do not match.',
    path: ['confirm'],
  });

  export const SignInSchema = z
  .object({
    username: z
      .string({ required_error: 'Email is required' })
      .min(1, { message: 'Email is required.' })
      .email({ message: 'Invalid email address' }),
    password: z
      .string({ required_error: 'Password is required.' })
      .min(8, 'Minimum 8 characters.')
      .regex(passwordRegex, 'Use uppercase, lowercase & special character.'),
  });
