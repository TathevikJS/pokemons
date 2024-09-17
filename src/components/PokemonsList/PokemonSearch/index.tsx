import { PokemonSearchProps } from '@/types/pokemons.d';
import { TextField } from '@mui/material';

export const PokemonSearch: React.FC<PokemonSearchProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <TextField
      label="Search Pokémon"
      variant="outlined"
      fullWidth
      margin="normal"
      onChange={onSearchChange}
      value={searchTerm}
    />
  );
};