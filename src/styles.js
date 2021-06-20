import styled from "styled-components";

export const Header = styled.h1`
  text-align: center;
  font-family: "serif";
  color: #00509d;
  background-color: #fabc2a;
  width: 100%;
  padding: 30px;
  font-size: 40px;
  p {
    font-size: 13px;
    font-style: italic;
    margin: 2px;
  }
`;

export const GridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  justify-content: center;
`;

export const CoverCardStyled = styled.img`
  width: 40%;
  margin: 5px;
  border: 1px solid black;
  border-radius: 5px;
`;

export const IconCardStyled = styled.img`
  width: 40%;
  padding: 7px;
`;

export const Restart = styled.button`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: flex-end;
  background-color: transparent;
  width: 10%;
  border: none;
  margin: auto 90px;
  padding: 25px;
  img {
    width: 50%;
    cursor: pointer;
  }
`;
