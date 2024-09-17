export interface PokemonProps {
  name: string;
  image: string;
  url: string;
}

export interface PokemonSearchProps {
  searchTerm: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SearchedPokemonsProps {
  pokemons: PokemonProps[];
  total: number;
}

export interface PokemonDetailProps {
  name: string;
  id: number;
  types: string[];
  stats: { name: string; value: number }[];
  abilities: string[];
  image: string;
}

export interface PokemonCardAbilitiesProps {
  abilities: string[];
}

export interface StatProps {
  name: string;
  value: number;
}


export interface PokemonStatsProps {
  stats: StatProps[];
}

export interface PokemonCardProps {
  pokemon: {
    name: string;
    image: string;
    id: number;
    abilities: string[];
    stats: StatProps[]
  }
}

export interface ErrorMessageProps {
  message: string;
}

export interface PokemonTableBodyProps {
  pokemons: PokemonProps[] | null;
}

export interface PokemonDetailsErrorProps {
  message: string;
}
