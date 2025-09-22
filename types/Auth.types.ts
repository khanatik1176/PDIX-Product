export type TBasicSignupFormInputs = {
  email: string;
  password: string;
  confirm?: string;
};

export type TSignInFormInputs = {
  username: string;
  password: string;
};

export type GoogleSignInButtonProps = {
  onClick?: () => void;
  className?: string;
};


