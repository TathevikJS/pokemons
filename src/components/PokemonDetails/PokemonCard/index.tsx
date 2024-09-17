import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { PokemonCardStats } from './PokemonCardStats';
import { PokemonCardAbilities } from './PokemonCardAbilities';
import { PokemonCardProps } from '@/types/pokemons.d';
import './styles.scss';

export const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const { name, image, id, abilities, stats } = pokemon;

  const router = useRouter();
  const handleBackBtnClick = useCallback(() => {
    router.push('/pokemons');
  }, []);

  return (
    <Card className="pokemon-card">
      <Box position="relative">
        <CardMedia
          component="img"
          height="300"
          image={image}
          alt={name}
          className="pokemon-card-media"
        />
        <IconButton
          onClick={handleBackBtnClick}
          className="back-button"
          color="primary"
          aria-label="back"
          size="large"
        >
          <ArrowBack />
        </IconButton>
      </Box>
      <CardContent>
        <Typography variant="h4" component="div" className="pokemon-card-title">
          {name} (#{id})
        </Typography>
        <Box className="pokemon-card-content">
          <Box className="pokemon-card-stats">
            <PokemonCardStats stats={stats} />
          </Box>
          <Box className="pokemon-card-abilities">
            <PokemonCardAbilities abilities={abilities} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
