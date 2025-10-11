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
