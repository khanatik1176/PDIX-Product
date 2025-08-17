import { z } from 'zod';

export const NoteSchema = z.object({
  fileUrl: z
    .string()
    .trim()
    .min(1, { message: 'URL is required.' })
    .refine(
      (val) => {
        try {
          const url = new URL(val);
          return url.protocol === 'http:' || url.protocol === 'https:';
        } catch {
          return false;
        }
      },
      { message: 'Valid URL is required.' }
    ),
  topicName: z.string().min(1, { message: 'Topic name is required.' }),
  educationLevel: z
    .string()
    .min(1, { message: 'Education level is required.' }),
  classId: z.string().min(1, { message: 'Class/year is required.' }),
  subjectName: z.string().min(1, { message: 'Subject is required.' }),
  isAnonymous: z.boolean().optional(),
  isFeedbackAllowed: z.boolean().optional(),
  isDownloadAllowed: z.boolean().optional(),
});
