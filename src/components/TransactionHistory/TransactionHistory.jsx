/* eslint-disable no-undef */
import PropTypes from 'prop-types';
import { Box } from 'components/Box';

import {Table, TableHead, RowHead, TableRow, TableData,} from './TransactionHistory.styled.jsx'

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const TransactionHistory = ({items}) => {
    return(
        <Box 
    width="30vw" 
    mx="auto" 
    as="section">
<Table>
<TableHead>
<tr>
    <RowHead>Type</RowHead>
    <RowHead>Amount</RowHead>
    <RowHead>Currency</RowHead>
</tr>
</TableHead>
<tbody>
    {items.map(({id, type, amount, currency}) => (
    <TableRow key={id} backgroundColor={getRandomHexColor()}>
        <TableData>{type}</TableData>
        <TableData>{amount}</TableData>
        <TableData>{currency}</TableData>
    </TableRow>
    ))}
</tbody>
</Table>
</Box>
    )
} 

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ),
  };