export const formatDate = (dateString: string) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  const day = date.toLocaleString('en-GB', { day: '2-digit' });
  const month = date.toLocaleString('en-GB', { month: 'long' });
  const year = date.toLocaleString('en-GB', { year: 'numeric' });
  return `${day} ${month}, ${year}`;
};

export function getInitials(name: string): string {
  if (!name) return '';
  const names = name.split(' ');
  const initials = names.map((n) => n[0]).join('');
  return initials.toUpperCase();
}

export const GoogleLogo = () => (
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
