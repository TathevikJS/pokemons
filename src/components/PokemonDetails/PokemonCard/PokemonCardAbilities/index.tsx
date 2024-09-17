import { PokemonDetailText } from '@/helpers/constants';
import { PokemonCardAbilitiesProps } from '@/types/pokemons.d';
import { Box, Typography } from '@mui/material';

export const PokemonCardAbilities: React.FC<PokemonCardAbilitiesProps> = ({ abilities }) => {
  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
        {PokemonDetailText.ABILITIES_HEADER}
      </Typography>
      <Box>
        {abilities.map((ability) => (
          <Typography key={ability} variant="body1" sx={{ mb: 0.5 }}>
            {ability}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};
