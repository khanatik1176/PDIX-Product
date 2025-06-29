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
