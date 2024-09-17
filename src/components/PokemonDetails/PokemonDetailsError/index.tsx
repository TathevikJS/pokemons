import { Typography } from '@mui/material';
import { PokemonDetailsErrorProps } from '@/types/pokemons.d';
import './styles.scss'; 

export const PokemonDetailsError: React.FC<PokemonDetailsErrorProps> = ({ message }) => {
  return (
    <div className="error-container">
      <Typography variant="h6" color="error">
        {message}
      </Typography>
    </div>
  );
};
