import { Dispatch } from 'react';
import { baseURL, imageURL } from '@/api/pokeapi';
import { PokemonAction } from '@/context/PokemonsContext/types';
import { PokemonListText } from '@/helpers/constants';

export const fetchPokemons = async (page: number, limit: number, dispatch: Dispatch<PokemonAction>) => {
  dispatch({ type: 'FETCH_POKEMONS_REQUEST' });

  try {
    const offset = page * limit;
    const response = await fetch(`${baseURL}?offset=${offset}&limit=${limit}`);
    const data = await response.json();
    dispatch({
      type: 'FETCH_POKEMONS_SUCCESS',
      payload: {
        loading: data.loading,
        pokemons: data.results.map((pokemon: any) => ({
          name: pokemon.name,
          image: `${imageURL}/${pokemon.url.split('/')[6]}.png`,
          url: pokemon.url,
        })),
        total: data.count,
      },
    });
    return data
  } catch (error) {
    dispatch({
      type: 'FETCH_POKEMONS_FAILURE',
      payload: PokemonListText.ERROR_TEXT,
    });
  }
};

export const fetchPokemonBySearch = async (search: string, dispatch: Dispatch<PokemonAction>) => {
  dispatch({ type: 'FETCH_POKEMONS_REQUEST' });

  try {
    const response = await fetch(`${baseURL}/${search.toLowerCase()}`);
    const pokemon = await response.json();

    dispatch({
      type: 'SEARCH_POKEMON_SUCCESS',
      payload: {
        pokemons: [{
          name: pokemon.name,
          image: `${imageURL}/${pokemon.id}.png`,
          url: pokemon.url
        }],
      },
    });
  } catch (error) {
    dispatch({
      type: 'SEARCH_POKEMON_FAILURE',
      payload: PokemonListText.NO_DATA_FOUND,
    });
  }
};

export const fetchPokemonById = async (name: string, dispatch: Dispatch<PokemonAction>) => {
  dispatch({ type: 'FETCH_POKEMONS_REQUEST' });

  try {
    const response = await fetch(`${baseURL}/${name.toLowerCase()}`);
    const pokemon = await response.json();

    dispatch({
      type: 'FETCH_POKEMON_BY_ID_SUCCESS',
      payload: {
        name: pokemon.name,
        id: pokemon.id,
        types: pokemon.types.map((typeInfo: any) => typeInfo.type.name),
        stats: pokemon.stats.map((stat: any) => ({
          name: stat.stat.name,
          value: stat.base_stat,
        })),
        abilities: pokemon.abilities.map((abilityInfo: any) => abilityInfo.ability.name),
        image: pokemon.sprites?.dream_world?.front_default || pokemon.sprites.front_default,
        url: `${baseURL}/${pokemon.id}/`,
      },
    });
  } catch (error) {
    dispatch({
      type: 'FETCH_POKEMON_BY_ID_FAILURE',
      payload: PokemonListText.NO_DATA_FOUND,
    });
  }
};
export const handleChangePage = (newPage: number, dispatch: Dispatch<PokemonAction>) => {
  dispatch({ type: 'SET_PAGE', payload: newPage });
};