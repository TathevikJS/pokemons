import { memo, useCallback } from 'react';
import { Table, TableContainer, Paper, TablePagination } from '@mui/material';
import { handleChangePage } from '@/services/poke.service';
import { usePoke } from '@/hooks/usePoke';
import { PokemonsTableLoading } from './PokemonsTableLoading';
import { PokemonsTableError } from './PokemonsTableError';
import { PokemonsTableHead } from './PokemonsTableHead';
import { PokemonsTableBody } from './PokemonsTableBody';
import './styles.scss'

export const PokemonTable: React.FC = memo(() => {
  const { state, dispatch } = usePoke();
  const { total, pokemons, error, loading, page } = state;

  const handlePageChange = useCallback((event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => handleChangePage(newPage, dispatch), [dispatch]);
  
  return (
    <Paper>
      <TableContainer className='table-container'>
          {loading && <PokemonsTableLoading />}
          {error && <PokemonsTableError message={error} />}
        <Table stickyHeader>
          <PokemonsTableHead />
          <PokemonsTableBody pokemons={pokemons} />
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={total}
        page={page}
        rowsPerPage={10}
        onPageChange={handlePageChange}
        rowsPerPageOptions={[]}
      />
    </Paper>
  );
});
