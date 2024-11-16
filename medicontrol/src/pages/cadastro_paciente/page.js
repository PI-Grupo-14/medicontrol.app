import Header from "../../components/header"
import styled from "styled-components";
import CampoDigitacao from "../../components/campoDigitacao/index";
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Stack } from '@mui/material'
import React, { useState } from "react";
import TextoExpansivel from "../../components/textoExpansivel";


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
font-weight: 900;
font-size: 30px;
line-height: 25px;
color: #0097B2;
font-family: Besley;
`
const AreaBotoes = styled.div`
display: flex; 
justify-content: flex-end;
align-items: flex-end;
width: 95%;
padding: 1em;
`
const BotaoCustomizado = styled.button`
width: 5%;
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
width: 5%;
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

const CadastroPaciente = () => {
    const [nomePaciente, setNomePaciente] = useState('');
    const [nascimentoPaciente, setNascimentoPaciente] = useState('');
    const [contatoEmg, setContatoEmg] = useState('');
    const [convenio, setConvenio] = useState('');
    const [numConvenio, setNumConvenio] = useState('');
    const [hospital, setHospital] = useState('');

    return (
        <>
            <Header />
            <ContainerPrincipal>
                <Container>
                    <TituloEstilizado>Informações do Paciente</TituloEstilizado>
                    <Stack
                        direction="row"
                        spacing={40}
                        sx={{
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "70%",
                            padding: "2em 5em",
                        }}>
                        <Stack spacing={2}
                            sx={{
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: "60%",
                            }}>
                            <CampoDigitacao
                                valor={nomePaciente}
                                tipo="text"
                                placeholder="Insira o nome do paciente"
                                onChange={setNomePaciente}
                                label="Nome" />

                            <CampoDigitacao
                                valor={nascimentoPaciente}
                                tipo="text"
                                placeholder="Insira dia/mês/ano"
                                onChange={setNascimentoPaciente}
                                label="Data de Nascimento" />

                            <CampoDigitacao
                                valor={contatoEmg}
                                tipo="text"
                                placeholder="(DDD) XXXXX-XXXX"
                                onChange={setContatoEmg}
                                label="Contato de emergência" />

                            <CampoDigitacao
                                valor={convenio}
                                tipo="text"
                                placeholder="Nome do convênio"
                                onChange={setConvenio}
                                label="Nome do Convênio Médico" />

                            <CampoDigitacao
                                valor={numConvenio}
                                tipo="text"
                                placeholder="Insira o Número da carterinha do convênio"
                                onChange={setNumConvenio}
                                label="Número da Carterinha do Convênio" />


                            <CampoDigitacao
                                valor={hospital}
                                tipo="text"
                                placeholder="Hospital para casos de emergência"
                                onChange={setHospital}
                                label="Hospital Conveniado" />

                        </Stack>
                        <Stack spacing={10}
                            sx={{
                                justifyContent: "flex-start",
                                alignItems: "center",
                                width: "60%",
                            }}
                        >
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">Gênero</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="female" control={<Radio />} label="Feminino" />
                                    <FormControlLabel value="male" control={<Radio />} label="Masculino" />
                                    <FormControlLabel value="other" control={<Radio />} label="Outro" />
                                </RadioGroup>
                            </FormControl>
                            <TextoExpansivel
                                buttonName="Adicionar alergia"
                                label="Descreva" />
                            <TextoExpansivel
                                buttonName="Adicionar observação"
                                label="Descreva" />
                             
                        </Stack>

                    </Stack>
                    <AreaBotoes>
                    <BotaoCustomizado2 onClick={() => {}} type="submit">Cancelar</BotaoCustomizado2>
                    <BotaoCustomizado onClick={() => {}} type="submit">Salvar</BotaoCustomizado>
                    </AreaBotoes>
                   
                </Container>

            </ContainerPrincipal>

        </>

    )
}

export default CadastroPaciente;