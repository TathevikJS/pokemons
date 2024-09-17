import { Box } from '@mui/material';
import { Spinner } from '@/shared/Spinner';
import './styles.scss'

export const PokemonsTableLoading: React.FC = () => {
  return (
    <Box className='loading-container'>
      <Spinner />
    </Box>
  );
};
