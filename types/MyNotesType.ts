
export type MyNotesToolbarProps = {
  filterValue: string;
  onFilterChange: (value: string) => void;
  onUpload: () => void;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export type MyNotesCardProps = {
  title: string;
  imageSrc: string;
  iconType: 'file' | 'link';
}

export type CardMenuProps = {
  open: boolean;
  onClose: () => void;
}
