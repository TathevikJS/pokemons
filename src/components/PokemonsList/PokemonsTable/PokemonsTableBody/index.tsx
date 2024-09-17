import { memo } from 'react';
import { TableBody, TableCell, TableRow, Button } from '@mui/material';
import Link from 'next/link';
import { PokemonTableBodyProps } from '@/types/pokemons.d';
import { PokemonListText } from '@/helpers/constants';
import './styles.scss';

export const PokemonsTableBody: React.FC<PokemonTableBodyProps> = memo(({ pokemons }) => {
  return (
    <TableBody>
      {pokemons?.map((pokemon) => (
        <TableRow key={pokemon.name}>
          <TableCell className='table-cell'>
            <img src={pokemon.image} alt={pokemon.name} className='pokemon-image' />
          </TableCell>
          <TableCell className='table-cell'>{pokemon.name}</TableCell>
          <TableCell align="right" className='table-cell'>
            <Link href={`/pokemons/${pokemon.name}`} passHref>
              <Button variant="contained" color="primary" className='table-button'>
                {PokemonListText.DETAILS_BUTTON}
              </Button>
            </Link>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
});
