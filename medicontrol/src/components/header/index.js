import styled from "styled-components";
import Avatar from '@mui/material/Avatar';
import React from "react";


const FundoCabecalho = styled.div`
height: 100%;

background-color: #5CCEEE;
width: 100%;
display: inline-block;
align-items: center;
`
const TextoEstilizado = styled.p`
font-weight: 700;
font-size: 20px;
color:#CD1E27;
font-family: Besley;
`
const ListaEstilizada = styled.ul`
display: flex;
align-items: center;
justify-content: space-around;
flex-grow: .5;
padding: 0 1em;
`
const ImagemEstilizada = styled.img`
margin-top = 1em;
width: 150px;
height: 150px;
align-items : center;
`
const ContainerPerfil = styled.div`
display: flex;
justify-content: space-around;
padding: 1em;
`
const TextoSaida = styled.p`
padding: 0 0 0 3em;
color:#0097B2;
font-size: 18px;
font-weight: 700;
font-family: Besley;
text-decoration: underline;
`

function Header(){
  return (
    <>
      <FundoCabecalho>
        
        <ImagemEstilizada src='LogoMedi_semfundo.png'alt="logo medicontrol"/>
        <Avatar alt="img perfil" src="perfil_enfermeira.jpg" />
            
          
      </FundoCabecalho>
    </>
  );
};

export default Header;