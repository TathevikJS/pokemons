'use client'

import { Card, CardContent, Typography } from '@mui/material';
import { LoginForm } from '@/forms/LoginForm';
import { LoginPageText } from '@/helpers/constants';
import { FormValuesProps } from '@/types/form';
import { useRouter } from 'next/navigation';
import { login } from '@/services/auth.service';
import { useAuth } from '@/hooks/useAuth';
import './styles.scss'

export const LoginCard: React.FC = () => {
  const router = useRouter();

  const { dispatch, state } = useAuth();
  const { loading, error } = state;
  
  const onSubmit = async (data: FormValuesProps) => {
    try {
      await login(data.username, data.password, dispatch);
      router.push('/pokemons');
    } catch (error: any) {
      console.error(error)
    }
  };

  return (
    <Card className='login-card'>
      <CardContent>
        <Typography variant="h4" gutterBottom className='login-title'>
          {LoginPageText.TITLE}
        </Typography>
        <LoginForm
          onSubmit={onSubmit}
          isPending={loading}
          error={error}
        />
      </CardContent>
    </Card>
  );
};
