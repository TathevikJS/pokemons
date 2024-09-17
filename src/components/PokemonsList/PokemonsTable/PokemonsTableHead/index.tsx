import { TableHead, TableRow, TableCell } from '@mui/material';
import { PokemonListText } from '@/helpers/constants';

export const PokemonsTableHead: React.FC = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell>{PokemonListText.IMAGE_HEADER}</TableCell>
                <TableCell>{PokemonListText.NAME_HEADER}</TableCell>
                <TableCell align="right">{PokemonListText.ACTION}</TableCell>
            </TableRow>
        </TableHead>
    );
};
