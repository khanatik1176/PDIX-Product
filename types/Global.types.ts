export type IHeadingProps = {
  title: string;
  subTitle?: string;
  titleclassName?: string;
  subTitleClassName?: string;
  className?: string;
};
export type BreadcrumbWithAvatarProps = {
  initialData?: string;
  initialLink?: string;
  secondaryData?: string;
  secondaryLink?: string;
  userData?: any;
};

export type AvatarMenuProps = {
  userData?: any;
};

export type ViewType = 'table' | 'card';

export type ViewToggleProps = {
  viewType: ViewType;
  setViewType: (type: ViewType) => void;
}


export type SearchFilterProps = {
  topics: string[];
  selectedTopic: string;
  setSelectedTopic: (topic: string) => void;
  sortBy?: string;
  setSortBy: (sort: string) => void;
  sortOrder?: 'asc' | 'desc';
  setSortOrder: (order: 'asc' | 'desc') => void;
}

export type Note = {
    name: string;
    subject: string;
    downloads: number;
    views: number;
    likes: number;
    date: string;
}

export type SortBy = 'downloads' | 'views' | 'popularity' | 'date';
export type SortOrder = 'asc' | 'desc';
