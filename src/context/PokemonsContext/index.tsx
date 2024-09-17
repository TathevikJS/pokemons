'use client'

import React, { createContext, useReducer, ReactNode } from 'react';
import { pokemonReducer } from './reducers';
import { PokemonState, PokemonAction } from './types';


const initialPokemonState: PokemonState = {
  pokemons: [],
  total: 0,
  selectedPokemon: null,
  loading: false,
  error: null,
  page: 0
};

export const PokemonsContext = createContext<{ state: PokemonState; dispatch: React.Dispatch<PokemonAction> } | undefined>(undefined);

export const PokemonProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(pokemonReducer, initialPokemonState);

  return (
    <PokemonsContext.Provider value={{ state, dispatch }}>
      {children}
    </PokemonsContext.Provider>
  );
};

