'use client'

import { useEffect, useState, useCallback } from 'react';
import { Box } from '@mui/material';
import { PokemonSearch } from './PokemonSearch';
import { PokemonTable } from './PokemonsTable';
import { usePoke } from '@/hooks/usePoke';
import { debounce } from 'lodash';
import { fetchPokemonBySearch, fetchPokemons } from '@/services/poke.service';
import './styles.scss';

const LIMIT = 10;

export const PokemonsList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { dispatch, state } = usePoke();
  const { page } = state;

  const debouncedFetchPokemons = useCallback(
    debounce((search: string) => {
      if (search) {
        fetchPokemonBySearch(search, dispatch);
      } else {
        fetchPokemons(page, LIMIT, dispatch);
      }
    }, 300), 
    [dispatch, page]
  );

  useEffect(() => {
    debouncedFetchPokemons(searchTerm);
  }, [searchTerm, debouncedFetchPokemons]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    return () => {
      debouncedFetchPokemons.cancel();
    };
  }, [debouncedFetchPokemons]);

  return (
    <Box className="pokemons-list-container">
      <PokemonSearch searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <PokemonTable />
    </Box>
  );
};
