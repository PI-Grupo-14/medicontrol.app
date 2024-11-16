import Header from "../../components/header";
import React, { useState } from 'react';
import TablePacientes from "../../components/tabela_pacientes";
import AddIcon from '@mui/icons-material/Add';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SearchIcon from '@mui/icons-material/Search';
import {Box, Button, Stack, InputAdornment, TextField} from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from "react-router-dom";




const RoundedButton = styled(Button)({
    borderRadius: '20px',
    fontFamily: 'Besley',
    backgroundColor: '#1C9CE5',
    color: 'white',
    fontWeight: '700',
    marginLeft: '8px',
    marginRight: '16px',
    height: '50px',
    width: '15%'
});

const RoundedTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        borderRadius: '20px',
        fontFamily: 'Besley',
        width: '90%',
        paddingRight: '12px'
    },
});


const PrincipalPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => { setSearchTerm(event.target.value); };

    const navigate = useNavigate();

    return (
        <>
        <Stack spacing={5}>
            <Header />
            <Box display="flex" alignItems="center" padding="16px">
                <RoundedTextField label="Pesquisar por paciente"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={searchTerm}
                    onChange={handleSearch}
                    InputProps={{ endAdornment: (<InputAdornment position="end"> <SearchIcon /> </InputAdornment>), }} />
                <RoundedButton variant="contained" color="primary" disableRipple onClick = {() => {navigate('/pacientes')}}>
                    <PermIdentityIcon sx={{ mr: 1 }} />
                    Visualizar pacientes
                </RoundedButton>
            </Box>
            <TablePacientes searchTerm={searchTerm}/>
            <Box display="flex" justifyContent="center" padding="16px">
                <RoundedButton variant="extended" color="primary" onClick={() => {navigate('/atividades')}}>
                    <AddIcon sx={{ mr: 1 }} /> Criar atividade
                </RoundedButton>
            </Box>
        </Stack>
        </>

    )




}

export default PrincipalPage;