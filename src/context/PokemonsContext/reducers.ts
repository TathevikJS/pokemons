import { PokemonState, PokemonAction } from './types';

const initialPokemonState: PokemonState = {
  pokemons: [],
  total: 0,
  selectedPokemon: null,
  loading: false,
  error: null,
  page: 0
};

export const pokemonReducer = (state = initialPokemonState, action: PokemonAction): PokemonState => {
  switch (action.type) {
    case 'FETCH_POKEMONS_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_POKEMONS_SUCCESS':
      return { ...state, loading: false, pokemons: action.payload.pokemons, total: action.payload.total };
    case 'FETCH_POKEMONS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'FETCH_POKEMON_BY_ID_SUCCESS':
      return { ...state, loading: false, selectedPokemon: action.payload };
    case 'FETCH_POKEMON_BY_ID_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'SEARCH_POKEMON_SUCCESS':
      return { ...state, loading: false, pokemons: action.payload.pokemons };
    case 'SEARCH_POKEMON_FAILURE':
      return { ...state, loading: false, error: action.payload, pokemons: [] };
    case 'SET_PAGE':
      return {...state, page: action.payload}
    default:
      return state;
  }
};
