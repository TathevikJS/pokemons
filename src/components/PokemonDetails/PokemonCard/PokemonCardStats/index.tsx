import { PokemonDetailText } from '@/helpers/constants';
import { PokemonStatsProps } from '@/types/pokemons.d';
import { Box, Typography } from '@mui/material';

export const PokemonCardStats: React.FC<PokemonStatsProps> = ({ stats }) => {
  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
        {PokemonDetailText.STATS_HEADER}
      </Typography>
      <Box display="flex" flexDirection="column" gap={1}>
        {stats.map((stat) => (
          <Typography key={stat.name} variant="body1">
            <strong>{stat.name}:</strong> {stat.value}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};
