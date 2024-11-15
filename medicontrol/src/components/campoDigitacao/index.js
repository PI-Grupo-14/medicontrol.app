import styled from "styled-components";
import React from "react";

const Campo = styled.input`
background: #F0F0F0;
margin: 1em 0;
box-sizing: border-box;
box-shadow: 2px 2px 6px rgba(0,0,0,0.25);
border-radius: 8px;
border: none;
width: 100%;
padding: 16px;
color: #828282;
font-family: Besley;
`
const Rotulo = styled.label`
display: block;
font-weight: 700;
font-size: 20px;
line-height: 25px;
color: #1C9CE5;
font-family: Besley;
text-align: left;
`
const Container= styled.div`
width: 100%;
`

export default function CampoDigitacao({valor, tipo, placeholder, onChange, label}){
    return(
        <Container>
            <Rotulo>{label}</Rotulo>
            <Campo
            type={tipo}
            value={valor}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            required
            />
        </Container>
    )
}