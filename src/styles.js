import styled from "styled-components";

export const Header = styled.h1 `
    text-align: center;
    font-family: "arial";
    color: #00509d;
    background-color: #fabc2a;
    width: 100%;
    padding: 30px;
`;

export const CardStyled = styled.img `
    width: 40%;
`; 

export const GridStyled = styled.div `
    display: grid;
    grid-template-columns: repeat(4, 200px);
    justify-content: center;
`;
