'use client'

import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Box } from '@mui/material';
import { fetchPokemonById } from '@/services/poke.service';
import { usePoke } from '@/hooks/usePoke';
import { PokemonDetailsLoading } from './PokemonDetailsLoading';
import { PokemonDetailsError } from './PokemonDetailsError';
import { PokemonCard } from './PokemonCard';
import './styles.scss'

export const PokemonDetails = () => {
  const { name } = useParams();
  const { dispatch, state } = usePoke();
  const { selectedPokemon, loading, error } = state;

  useEffect(() => {
    if (name) {
      const pokemonName = Array.isArray(name) ? name[0] : name;
      fetchPokemonById(pokemonName, dispatch);
    }
  }, [name, dispatch]);

  return (
    <Box className='pokemon-details-container'>
      {loading && <PokemonDetailsLoading />}

      {error && <PokemonDetailsError message={error} />}

      {selectedPokemon && !loading && !error && (
        <PokemonCard pokemon={selectedPokemon} />
      )}
    </Box>
  );
};
