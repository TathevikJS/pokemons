import { Box } from '@mui/material';
import { LoginCard } from '@/components/LoginCard';
import './styles.scss'

export default function LoginPage() {

  return (
    <Box className='login-page-container'>
      <LoginCard />
    </Box>
  );
}
