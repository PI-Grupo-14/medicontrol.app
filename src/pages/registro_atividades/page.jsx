import Header from "../../components/header"
import ControlledComponent from "../../components/campoData"
import BasicTimePicker from "../../components/campoHora"
import styled from "styled-components";
import { Stack, TextField, InputLabel, MenuItem, FormControl, Select } from '@mui/material'
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProfissionalContext , API_URL} from "../../App";

const ContainerPrincipal = styled.div`
background-color: #F1EBEB;
background-size: cover;
width: 100vw;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`
const Container = styled.div`
background-color: white;
width: 95vw;
height: 89vh;
display: flex;
flex-direction: column;
margin: 1em;
`
const TituloEstilizado = styled.h1`
font-weight: 600;
font-size: 25px;
line-height: 15px;
color: #0097B2;
font-family: Besley;
margin: 1em;

`
const CampoEstilizado = styled(TextField)`
background-color: #D9D9D9;
width: 90%;

`
const AreaBotoes = styled.div`
display: flex; 
justify-content: flex-end;
align-items: flex-end;
width: 95%;
padding: 1em;
`
const BotaoCustomizado = styled.button`
width: 10%;
background-color: #1C9CE5;
border-radius: 8px;
color: #FFFFFF;
border: none;
font-weight: 700;
line-height: 15px;
font-family: Besley;
margin: 10px; 
padding: 10px 10px;
font-size: 15px;

`
const BotaoCustomizado2 = styled.button`
width: 10%;
background-color: #EDEDED;
color: #828282;
border-radius: 8px;
border: none;
font-weight: 700;
line-height: 15px;
font-family: Besley;
margin: 10px; 
padding: 10px 20px;

`

const RegistroAtividades = () => {
    const [pacientes, setPacientes] = useState([]);
    const [id, setId] = useState("");
    const [nomeAtividade, setNomeAtividade] = useState("");
    const [data, setData] = useState("");
    const [horario, setHorario] = useState("");
    const { profissional, _ } = React.useContext(ProfissionalContext);
    const navigate = useNavigate();

    function formatDate(dateString) {
        const date = new Date(dateString); // Convert the string to a Date object
        const day = String(date.getDate()).padStart(2, '0'); // Get the day and pad with 0 if needed
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Get the month (0-indexed) and pad with 0
        const year = date.getFullYear(); // Get the full year
    
        return `${day}/${month}/${year}`; // Return the formatted date
    }

    function formatTime(dateString) {
        const date = new Date(dateString); // Convert the string to a Date object
        let hours = date.getHours(); // Get the hours
        const minutes = String(date.getMinutes()).padStart(2, '0'); // Get the minutes and pad with 0 if needed
        const ampm = hours >= 12 ? 'PM' : 'AM'; // Determine AM or PM
        hours = hours % 12 || 12; // Convert to 12-hour format (0 becomes 12)
    
        return `${hours}:${minutes} ${ampm}`; // Return the formatted time
    }

    useEffect(() => {
        const fetchPacientes = async () => {
            try {
                const response = await fetch(`${API_URL}/profissional/${profissional.profissional_id}/pacientes`);
                if (response.ok) {
                    const data = await response.json();
                    // Map API response to match the expected structure
                    const formattedPacientes = data.pacientes.map(paciente => ({
                        id: paciente.id, // Map paciente_id to id
                        nome: paciente.nome,
                        telefone: paciente.telefone,
                    }));
                    setPacientes(formattedPacientes);
                } else {
                    console.error('Erro ao buscar dados dos pacientes');
                }
            } catch (error) {
                console.error('Erro ao conectar ao servidor:', error);
            }
        };

        fetchPacientes();
    }, [profissional]);

    const handleChange = (event) => {
        let selectedId = event.target.value;
        setId(selectedId); // Atualiza o id com o valor selecionado
    };

    const salvarButtonClickHandler = async () => {
        try {
            const requestBody = JSON.stringify({
                paciente_id: id,
                nome: nomeAtividade,
                data: data,
                horario: horario,
                concluido: false, // Sempre definido como false
            })
            const response = await fetch(`${API_URL}/atividade`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: requestBody,
            });

            if (response.ok) {
                alert('Atividade salva com sucesso!');
                navigate('/home'); // Navega para a página inicial após salvar
            } else {
                const errorData = await response.json();
                alert(`Erro: ${errorData.message || 'Falha ao salvar atividade'}`);
            }
        } catch (error) {
            alert('Erro: Não foi possível conectar ao servidor.');
        }
    };

    return (
        <>
            <Header />
            <ContainerPrincipal>
                <Container>
                    <Stack spacing={5}
                        sx={{

                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            width: "100%",
                            padding: "3em",
                            margin: "2em",
                        }}
                    >
                        <TituloEstilizado>Atividade</TituloEstilizado>
                        <CampoEstilizado
                            required
                            id="outlined-required"
                            label=""
                            defaultValue=""
                            multiline
                            onChange={(e) => setNomeAtividade(e.target.value)}
                            rows={2}

                        />
                        <Stack
                            direction="row"
                            spacing={4}
                            sx={{
                                justifyContent: "space-evenly",
                                alignItems: "center",
                            }}
                        >
                            <TituloEstilizado>Escolha o Paciente: </TituloEstilizado>
                            <FormControl sx={{ m: 1, minWidth: 150 }}>
                                <InputLabel id="demo-simple-select-label">Paciente</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={id}
                                    label="Paciente"
                                    onChange={handleChange}
                                >
                                    {pacientes.map((paciente) => (
                                        <MenuItem value={paciente.id}>{paciente.nome}</MenuItem>))}
                                </Select>
                            </FormControl>
                        </Stack>

                        <Stack
                            direction="row"
                            spacing={4}
                            sx={{
                                justifyContent: "space-evenly",
                                alignItems: "center",
                            }}
                        >
                            <TituloEstilizado>Defina o alarme: </TituloEstilizado>
                            <ControlledComponent value={data} onChange={(e) => setData(formatDate(e.$d))} />
                            <BasicTimePicker onChange={(e) => setHorario(formatTime(e.$d))} />
                        </Stack>
                        <TituloEstilizado>Anotações</TituloEstilizado>
                        <CampoEstilizado
                            required
                            id="outlined-required"
                            label=""
                            defaultValue=""
                            multiline
                            rows={2}

                        />
                    </Stack>
                    <AreaBotoes>
                        <BotaoCustomizado2 onClick={() => navigate(-1)} type="submit">Cancelar</BotaoCustomizado2>
                        <BotaoCustomizado onClick={salvarButtonClickHandler} type="submit">Salvar</BotaoCustomizado>
                    </AreaBotoes>


                </Container>
            </ContainerPrincipal>

        </>
    )
}

export default RegistroAtividades;