import { Button, TextField, Typography, CircularProgress } from '@mui/material';
import { useForm } from 'react-hook-form';
import { FormValuesProps, LoginFormProps } from '@/types/form';
import { LoginPageText } from '@/helpers/constants';
import './styles.scss'; 

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, isPending, error }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValuesProps>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
      <TextField
        label={LoginPageText.USERNAME_LABEL}
        variant="outlined"
        className="text-field"
        {...register('username', { required: LoginPageText.USERNAME_REQUIRED })}
        error={!!errors.username}
        helperText={errors?.username?.message || ''}
      />
      <TextField
        label={LoginPageText.PASSWORD_LABEL}
        type="password"
        variant="outlined"
        className="text-field"
        {...register('password', { required: LoginPageText.PASSWORD_REQUIRED })}
        error={!!errors.password}
        helperText={errors?.password?.message || ''}
      />
      {error && (
        <Typography variant="body2" color="error">
          {error}
        </Typography>
      )}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        className="submit-button"
        disabled={isPending}
      >
        {isPending ? <CircularProgress size={24} className="spinner" /> : LoginPageText.SUBMIT_BUTTON}
      </Button>
    </form>
  );
};
