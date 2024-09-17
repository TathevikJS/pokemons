export type FormValuesProps = {
  username: string;
  password: string;
};

export interface LoginFormProps {
  onSubmit: (data: FormValues) => void;
  isPending: boolean;
  error: string | null;
}

export interface LoginCardProps {
  children: React.ReactNode;
}