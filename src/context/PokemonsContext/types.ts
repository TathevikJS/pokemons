export interface PokemonState {
  pokemons: any[];
  total: number;
  selectedPokemon: any | null;
  loading: boolean;
  error: string | null;
  page: number
}

interface FETCH_POKEMONS_SUCCESS_TYPE {
  pokemons: any[], 
  total: number, 
  loading: boolean
}

export type PokemonAction =
  | { type: 'FETCH_POKEMONS_REQUEST' }
  | { type: 'FETCH_POKEMONS_SUCCESS'; payload: FETCH_POKEMONS_SUCCESS_TYPE }
  | { type: 'FETCH_POKEMONS_FAILURE'; payload: string }
  | { type: 'FETCH_POKEMON_BY_ID_SUCCESS'; payload: any }
  | { type: 'FETCH_POKEMON_BY_ID_FAILURE'; payload: string }
  | { type: 'SEARCH_POKEMON_SUCCESS'; payload: any }
  | { type: 'SEARCH_POKEMON_FAILURE'; payload: string }
  | { type: 'SET_PAGE'; payload: number }


