import React, { useState, useEffect, useContext } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox } from '@mui/material';
import { styled } from '@mui/system';
import { ProfissionalContext, API_URL } from "../../App";

const StyledTableCell = styled(TableCell)({
    fontFamily: 'Besley',
    fontSize: '20px'
});

const TablePacientes = ({searchTerm, profissional}) => {
     
    // React states
    // Manage rows and allow search
    const [rows, setRows] = useState([]);
    if(!profissional) {
        profissional = useContext(ProfissionalContext)[0];
    }
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${API_URL}/profissional/${profissional.profissional_id}/atividades-nao-concluidas`);
                if (response.ok) {
                    const data = await response.json();
                    // Map API response to match table structure
                    const formattedData = data.atividades.map(item => ({
                        id: item.atividade_id,
                        name: item.nome_paciente,
                        activity: item.nome_atividade,
                        time: item.data + " | " + item.horario,
                    }));
                    setRows(formattedData);
                } else {
                    console.error('Erro ao buscar dados da API');
                }
            } catch (error) {
                console.error('Erro ao conectar ao servidor:', error);
            }
        };

        fetchData();
    }, [profissional]);

    // Function to remove a concluded row
    const handleRemoveRow = async (id) => {
        try {
            const response = await fetch(`${API_URL}/atividade/concluir`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    profissional_id: profissional.profissional_id, // Assuming profissional is available in context or props
                    atividade_id: id,
                }),
            });

            if (response.ok) {
                // Remove the row from the table after successful API call
                setRows(rows.filter(row => row.id !== id));
            } else {
                const errorData = await response.json();
                console.error(`Erro ao concluir atividade: ${errorData.message || 'Erro desconhecido'}`);
            }
        } catch (error) {
            console.error('Erro ao conectar ao servidor:', error);
        }
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

