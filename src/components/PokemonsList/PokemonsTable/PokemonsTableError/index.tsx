import { ErrorMessageProps } from '@/types/pokemons.d';
import { Box, Typography } from '@mui/material';
import './styles.scss'

export const PokemonsTableError: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <Box className='error-container'>
      <Typography color="error">{message}</Typography>
    </Box>
  );
};
