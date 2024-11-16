import Header from "../../components/header"
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {Box, Button, InputAdornment, TextField} from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { styled } from '@mui/system';

const StyledTableCell = styled(TableCell)({
    fontFamily: 'Besley',
    fontSize: '20px'
});
const RoundedButton = styled(Button)({
    borderRadius: '20px',
    fontFamily: 'Besley',
    backgroundColor: '#1C9CE5',
    color: 'white',
    fontWeight: '700',
    marginLeft: '8px',
    marginRight: '16px',
    height: '50px',
    width: '15%',
    marginTop: '7em',

});

const RoundedTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        borderRadius: '20px',
        fontFamily: 'Besley',
        width: '90%',
        paddingRight: '12px'
    },
});


const TelaPacientes = () =>{
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => { setSearchTerm(event.target.value); };

    const userData = [
        { id: 1, name: 'Lucas', telefone: '(11)95673-7635', convenio: 'Amil' },
        { id: 2, name: 'João', telefone: '(11)95673-7635', convenio: 'Bradesco' },
        { id: 3, name: 'Maria', telefone: '(11)95673-7635', convenio: 'Amil' },
        { id: 4, name: 'Pedro', telefone: '(11)95673-7635', convenio: 'Bradesco' },
        { id: 5, name: 'Kleber', telefone: '(11)95673-7635', convenio: 'Bradesco' },
        { id: 6, name: 'José', telefone: '(11)95673-7635', convenio: 'Amil' },
        { id: 7, name: 'Recebec', telefone: '(11)95673-7635', convenio: 'Bradesco' },
    ];
    const [rows, setRows] = useState(userData);

    // Will be a backend call instead of this delay
   
   
    // Functions to deal with the internal search
    const filteredRows = rows.filter(row =>
        row.name.toLowerCase().includes(searchTerm.toLowerCase()),);



    return(
        <>
        <Header/>
        <Box display="flex" alignItems="center" padding="16px" marginLeft="6em">
                <RoundedTextField label="Pesquisar por paciente"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={searchTerm}
                    onChange={handleSearch}
                    InputProps={{ endAdornment: (<InputAdornment position="end"> <SearchIcon /> </InputAdornment>), }} />
        </Box>

    
        <TableContainer component={Paper}  style={{padding: "2em", maxHeight: '400px',maxWidth: '90%',marginLeft: '4em', overflowY: 'auto'}}>
            <Table>
                <TableHead>
                    <TableRow style={{ backgroundColor: '#5CCEEE' }}>
                        <StyledTableCell>Id</StyledTableCell>
                        <StyledTableCell>Nome</StyledTableCell>
                        <StyledTableCell>Contato SOS</StyledTableCell>
                        <StyledTableCell>Convênio</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredRows.map((row) => (
                        <TableRow key={row.id}>
                            <StyledTableCell>{row.id}</StyledTableCell>
                            <StyledTableCell>{row.name}</StyledTableCell>
                            <StyledTableCell>{row.telefone}</StyledTableCell>
                            <StyledTableCell>{row.convenio}</StyledTableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <RoundedButton variant="extended" color="primary">
                    <PersonAddAltIcon sx={{ mr: 1 }} /> Adicionar Paciente
                </RoundedButton>
        </>
    )
}

export default TelaPacientes;