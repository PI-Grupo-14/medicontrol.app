import { useState } from "react";
import styled from "styled-components";
import CampoDigitacao from "../../components/campoDigitacao/index";

import React from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../App";


const ContainerPrincipal = styled.div`
background-color: #F1EBEB;
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
`

const Container = styled.div`
background-color: white;
width: 50vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
`
const Imagem = styled.img`
width: 250px;
height: 184px;

`
const Formulario = styled.form`
width: 80%;
display: flex;
flex-direction: column;
align-items: center;
`
const AreaBotoes = styled.div`
display: flex; 
justify-content: space-between;
width: 70%;
`
const BotaoCustomizado = styled.button`
width: 40%;
background-color: #1C9CE5;
border-radius: 8px;
color: #FFFFFF;
border: none;
font-weight: 700;
line-height: 25px;
font-family: Besley;
margin: 15px; 
padding: 10px 50px;
font-size: 20px;

`
const BotaoCustomizado2 = styled.button`
width: 30%;
background-color: #EDEDED;
color: #828282;
border-radius: 8px;
border: none;
font-weight: 700;
line-height: 19px;
font-family: Besley;
margin: 15px; 
padding: 10px 30px;

`

export default function CadastroProfissional(){
    const[nome, setNome] = useState('');
    const[nascimento, setNascimento] = useState('');
    const[telefone, setTelefone] = useState('');
    const[email, setEmail] = useState('');
    const[profissao, setProfissao] = useState('')
    const[registro, setRegistro] = useState('')
    const[senha, setSenha] = useState('');
    const[senhaVerificada, setSenhaVerificada] = useState('');

    const navigate = useNavigate()

    // TODO: Implement handle backend call here
    const handleCadastroClick = async () => {
        if (senha !== senhaVerificada) {
            alert('Erro: As senhas não coincidem.');
            return;
        }

        try {
            const response = await fetch(`${API_URL}/profissional`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nome:nome,
                    nascimento:nascimento,
                    telefone: telefone,
                    email: email,
                    profissao: profissao,
                    numero_registro: registro,
                    senha:senha,
                }),
            });

            if (response.ok) {
                alert('Cadatro realizado com sucesso!');
                navigate(navigate(-1));
            } else {
                const errorData = await response.json();
                alert(`Erro: ${errorData.message || 'Falha ao realizar o cadastro'}`);
            }
        } catch (error) {
            alert('Erro: Não foi possível conectar ao servidor.');
        }
    };


    return(
        <>
            <ContainerPrincipal>
                <Container>

                    <Imagem src='logomedi.png'alt="logo medi"/>
                    <Formulario>
                        <CampoDigitacao 
                        valor={nome} 
                        tipo="text"
                        placeholder="Insira seu nome completo" 
                        onChange={setNome} 
                        label="Nome"/>

                        <CampoDigitacao 
                        valor={nascimento} 
                        tipo="text"
                        placeholder="Insira dia/mês/ano" 
                        onChange={setNascimento} 
                        label="Data de Nascimento"/>

                        <CampoDigitacao 
                        valor={telefone} 
                        tipo="text"
                        placeholder="(DDD) XXXXX-XXXX" 
                        onChange={setTelefone} 
                        label="Telefone"/>

                        <CampoDigitacao 
                        valor={email} 
                        tipo="text"
                        placeholder="Insira o endereço de e-mail para login" 
                        onChange={setEmail} 
                        label="Email"/>

                        <CampoDigitacao 
                        valor={profissao} 
                        tipo="text"
                        placeholder="Insira sua profissão" 
                        onChange={setProfissao} 
                        label="Profissão"/>

                        <CampoDigitacao 
                        valor={registro} 
                        tipo="text"
                        placeholder="Insira o número de registro" 
                        onChange={setRegistro} 
                        label="Nº de Registro"/>
                    
                        <CampoDigitacao
                        valor={senha}
                        tipo="password"
                        placeholder="Digite sua senha"
                        onChange={setSenha}
                        label="Crie uma senha"/>

                    
                    </Formulario>
                    <AreaBotoes>
                        <BotaoCustomizado2 onClick={() => {navigate(-1)}} type="submit">Cancelar</BotaoCustomizado2>
                        <BotaoCustomizado onClick={handleCadastroClick} type="submit">Cadastrar</BotaoCustomizado>
                        
                    </AreaBotoes>
            </Container>
        </ContainerPrincipal>
        </>

    )
}