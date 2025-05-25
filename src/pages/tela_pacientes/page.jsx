import Header from '../../components/header';
import React, { useState, useEffect, useContext } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, InputAdornment, TextField } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import { ProfissionalContext,API_URL } from '../../App';

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
    marginTop: '7em'
});

const RoundedTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        borderRadius: '20px',
        fontFamily: 'Besley',
        width: '90%',
        paddingRight: '12px'
    }
});

const TelaPacientes = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [userData, setUserData] = useState([]);
    const { profissional, _ } = useContext(ProfissionalContext);

    useEffect(() => {
        const fetchPacientes = async () => {
            try {
                const response = await fetch(`${API_URL}/profissional/${profissional.profissional_id}/pacientes`);
                if (response.ok) {
                    const data = await response.json();
                    // Map API response to match the expected structure
                    const formattedData = data.pacientes.map(paciente => ({
                        id: paciente.id,
                        name: paciente.nome,
                        telefone: paciente.contato_emergencia,
                        convenio: paciente.convenio_medico, // Map convenio_medico to convenio
                    }));
                    setUserData(formattedData);
                } else {
                    console.error('Erro ao buscar dados dos pacientes');
                }
            } catch (error) {
                console.error('Erro ao conectar ao servidor:', error);
            }
        };

        fetchPacientes();
    }, [profissional]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    // Functions to deal with the internal search
    const filteredRows = userData.filter((row) => row.name.toLowerCase().includes(searchTerm.toLowerCase()));

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/cadastro_paciente');
    };

    return (
        <>
            <Header />
            <Box display='flex' alignItems='center' padding='16px' marginLeft='6em'>
                <RoundedTextField
                    label='Pesquisar por paciente'
                    variant='outlined'
                    fullWidth
                    margin='normal'
                    value={searchTerm}
                    onChange={handleSearch}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position='end'>
                                {' '}
                                <SearchIcon />{' '}
                            </InputAdornment>
                        )
                    }}
                />
            </Box>

            <TableContainer component={Paper} style={{ padding: '2em', maxHeight: '400px', maxWidth: '90%', marginLeft: '4em', overflowY: 'auto' }}>
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
            <RoundedButton variant='extended' color='primary' onClick={handleClick}>
                <PersonAddAltIcon sx={{ mr: 1 }} /> Adicionar Paciente
            </RoundedButton>
        </>
    );
};

export default TelaPacientes;
