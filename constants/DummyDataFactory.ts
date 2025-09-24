import { NoteItem } from "@/types/Library.types";

export const educationOptions = [
  { value: 'd4f8a2b3-5c6e-4f7a-9b8c-2e3d4f5a6b7c', label: 'High School' },
  { value: 'e7a9b8c6-4d5f-3a2b-1c0e-9f8d7a6b5c4e', label: 'University' },
];

export const classYearOptions = [
  { value: 'f1c2b3a4-5d6e-7f8a-9b0c-2e3d4f5a6b7c', label: 'Grade 1' },
  { value: 'a9b8c7d6-5e4f-3a2b-1c0e-9f8d7a6b5c4e', label: 'Grade 2' },
  { value: 'b3a2c1d0-9e8f-7a6b-5c4d-3e2f1a0b9c8d', label: 'Grade 10' },
  { value: 'cafc8e19-40b5-4635-a875-19eba162ecb8', label: 'BSc' },
];

export const DUMMY_NOTES: NoteItem[] = [
  {
    id: 1,
    subject: 'Physics',
    name: "Newton's Laws Summary",
    date: '2025-09-20',
    views: 120,
    downloads: 80,
    feedback: 15,
  },
  {
    id: 2,
    subject: 'Chemistry',
    name: 'Organic Chemistry Basics',
    date: '2025-09-19',
    views: 110,
    downloads: 90,
    feedback: 10,
  },
  {
    id: 3,
    subject: 'Physics',
    name: 'Thermodynamics Notes',
    date: '2025-09-18',
    views: 95,
    downloads: 60,
    feedback: 5,
  },
  {
    id: 4,
    subject: 'Math',
    name: 'Calculus Quick Guide',
    date: '2025-09-17',
    views: 130,
    downloads: 100,
    feedback: 20,
  },
  {
    id: 5,
    subject: 'Chemistry',
    name: 'Periodic Table Tricks',
    date: '2025-09-16',
    views: 80,
    downloads: 70,
    feedback: 8,
  },
  {
    id: 6,
    subject: 'Physics',
    name: 'Waves and Oscillations',
    date: '2025-09-15',
    views: 140,
    downloads: 110,
    feedback: 12,
  },
  {
    id: 7,
    subject: 'Math',
    name: 'Probability Essentials',
    date: '2025-09-14',
    views: 100,
    downloads: 85,
    feedback: 7,
  },
  {
    id: 8,
    subject: 'Chemistry',
    name: 'Acids and Bases',
    date: '2025-09-13',
    views: 75,
    downloads: 60,
    feedback: 4,
  },
  {
    id: 9,
    subject: 'Physics',
    name: 'Electromagnetism',
    date: '2025-09-12',
    views: 125,
    downloads: 95,
    feedback: 9,
  },
  {
    id: 10,
    subject: 'Math',
    name: 'Algebra Refresher',
    date: '2025-09-11',
    views: 90,
    downloads: 70,
    feedback: 6,
  },
    {
    id: 11,
    subject: 'Physics',
    name: "Newton's Laws Summary 2",
    date: '2025-09-20',
    views: 150,
    downloads: 80,
    feedback: 0,
  },
];

export const SUBJECTS = ['Physics', 'Chemistry', 'Math'];

export const SUBJECT_TOPIC_INFO: Record<string, { title: string; subtitle: string }> =
  {
    Physics: {
      title: 'Physics Notes for HSC Students',
      subtitle:
        'A comprehensive collection of physics notes covering all major topics for Higher Secondary Certificate (HSC) students.',
    },
    Chemistry: {
      title: 'Chemistry Notes for HSC Students',
      subtitle:
        'Detailed chemistry notes and explanations for HSC students, covering organic, inorganic, and physical chemistry.',
    },
    Math: {
      title: 'Math Notes for HSC Students',
      subtitle:
        'Essential math notes and problem-solving strategies for Higher Secondary Certificate (HSC) students.',
    },
  };