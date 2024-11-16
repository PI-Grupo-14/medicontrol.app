import styled from "styled-components";
import CampoDigitacao from "../../components/campoDigitacao/index";
import { useState } from "react";

import React from "react";
import { useNavigate } from "react-router-dom";


const ContainerPrincipal = styled.div`
background-color: #F1EBEB;
background-size: cover;
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
`


const ContainerLogin = styled.div`
background-color: white;
width: 50vw;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

const Imagem = styled.img`
width: 300px;
height: 234px;
padding: 2em 2em;
`

const Paragrafo = styled.p`
font-size: 18px;
font-weight: 400;
color: #1C9CE5;
line-height: 19px;
font-family: Besley;
margin-top: 1em;
`
const ParagrafoCadastro = styled(Paragrafo)`
color: #1C9CE5;
`
const LinkEstilizado = styled.a`
font-weight: 700;
color: #CD1E27;
text-decoration: none;
`
const BotaoCustomizado = styled.button`
width: 40%;
background-color: #1C9CE5;
border-radius: 8px;
padding: 12px 16px;
color: #FFFFFF;
border: none;
margin-top: 1em;
font-weight: 900;
line-height: 25px;
font-family: Besley;
font-size: 20px;
`
const Formulario = styled.form`
width: 80%;
display: flex;
flex-direction: column;
align-items: center;
`

export default function Login(){
    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState('');
    const navigate = useNavigate();

    // TODO: Implement login endpoint call here
    const handleLoginClick = () => {
        navigate('/home');
    }
    return(
        <>
        <ContainerPrincipal>
            <ContainerLogin>

            <Imagem src='logomedi.png'alt="logo medicontrol"/>
            <Formulario>
                <CampoDigitacao 
                valor={email} 
                tipo="text"
                placeholder="Insira seu endereço de e-mail" 
                onChange={setEmail} 
                label="Email"/>
            
                <CampoDigitacao
                valor={senha}
                tipo="password"
                placeholder="Insira sua senha"
                onChange={setSenha}
                label="Senha"/>
            </Formulario>
            <BotaoCustomizado type="submit" onClick={handleLoginClick}>Entrar</BotaoCustomizado>
            <Paragrafo>Esqueceu sua senha?</Paragrafo>
            <ParagrafoCadastro>Ainda não tem conta? 
                <LinkEstilizado href="/cadastro_profissional">Faça seu Cadastro!</LinkEstilizado></ParagrafoCadastro>
            </ContainerLogin>
        </ContainerPrincipal>
        </>
    )
}