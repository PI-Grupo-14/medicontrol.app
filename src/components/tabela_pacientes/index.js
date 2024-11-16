import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox } from '@mui/material';
import { styled } from '@mui/system';


const StyledTableCell = styled(TableCell)({
    fontFamily: 'Besley',
    fontSize: '20px'
});

const TablePacientes = ({searchTerm}) => {
    // TODO: Get this data from get API.
    const userData = [
        { id: 1, name: 'Lucas', activity: 'Atividade 1', time: '00:00' },
        { id: 2, name: 'João', activity: 'Atividade 2', time: '00:00' },
        { id: 3, name: 'Maria', activity: 'Atividade 1', time: '00:00' },
        { id: 4, name: 'Lucas', activity: 'Atividade 2', time: '00:00' },
        { id: 5, name: 'João', activity: 'Atividade 1', time: '00:00' },
        { id: 6, name: 'Maria', activity: 'Atividade 2', time: '00:00' },
        { id: 7, name: 'Lucas', activity: 'Atividade 1', time: '00:00' },
        { id: 8, name: 'João', activity: 'Atividade 2', time: '00:00' },
        { id: 9, name: 'Maria', activity: 'Atividade 1', time: '00:00' },
        { id: 10, name: 'Lucas', activity: 'Atividade 2', time: '00:00' },
        { id: 11, name: 'João', activity: 'Atividade 1', time: '00:00' },
        { id: 12, name: 'Maria', activity: 'Atividade 2', time: '00:00' }
    ];

    // React states
    // Manage rows and allow search
    const [rows, setRows] = useState(userData);

    // Will be a backend call instead of this delay
    // Function to remove a concluded row
    const handleRemoveRow = (id) => {
        setTimeout(() => { setRows(rows.filter(row => row.id !== id)); }, 300);
    };

    // Functions to deal with the internal search
    const filteredRows = rows.filter(row =>
        row.name.toLowerCase().includes(searchTerm.toLowerCase())
        || row.activity.toLowerCase().includes(searchTerm.toLowerCase()),);

    return (
        <TableContainer component={Paper}  style={{padding: "16px", maxHeight: '400px', overflowY: 'auto'}}>
            <Table>
                <TableHead>
                    <TableRow style={{ backgroundColor: '#5CCEEE' }}>
                        <StyledTableCell>Id</StyledTableCell>
                        <StyledTableCell>Nome</StyledTableCell>
                        <StyledTableCell>Atividade</StyledTableCell>
                        <StyledTableCell>Horário</StyledTableCell>
                        <StyledTableCell>Concluido</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredRows.map((row) => (
                        <TableRow key={row.id}>
                            <StyledTableCell>{row.id}</StyledTableCell>
                            <StyledTableCell>{row.name}</StyledTableCell>
                            <StyledTableCell>{row.activity}</StyledTableCell>
                            <StyledTableCell>{row.time}</StyledTableCell>
                            <StyledTableCell>
                                <Checkbox sx={{
                                    color: 'black', '&.Mui-checked': {
                                        color: '#1C9CE5',

                                    },
                                }} onClick={() => handleRemoveRow(row.id)} />
                            </StyledTableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TablePacientes;

