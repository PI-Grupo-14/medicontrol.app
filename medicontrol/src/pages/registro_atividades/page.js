import Header from "../../components/header"
import ControlledComponent from "../../components/campoData"
import BasicTimePicker from "../../components/campoHora"
import styled from "styled-components";
import { Stack, TextField, InputLabel, MenuItem, FormControl, Select } from '@mui/material'
import React, { useState } from "react";




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

    const pacientes = [{ id: 1, name: "Lucas" }, { id: 2, name: "Maria" }, { id: 3, name: "Geovanna" }];
    const [nome, setNome] = useState("")

    const handleChange = (event) => {
        setNome(event.target.value);
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
                                    value={nome}
                                    label="Paciente"
                                    onChange={handleChange}
                                >
                                    {pacientes.map((paciente) => (

                                        <MenuItem value={paciente.id}>{paciente.name}</MenuItem>

                                    ))}
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
                            <ControlledComponent />
                            <BasicTimePicker />
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
                        <BotaoCustomizado2 onClick={() => { }} type="submit">Cancelar</BotaoCustomizado2>
                        <BotaoCustomizado onClick={() => { }} type="submit">Salvar</BotaoCustomizado>
                    </AreaBotoes>


                </Container>
            </ContainerPrincipal>

        </>
    )
}

export default RegistroAtividades;