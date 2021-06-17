import {useState} from "react";
import cards from "../cards";
import Card from "./Card";
import { GridStyled } from "../styles";

const Grid = () => {
    const [_cards, setCards] = useState(cards);
    const [] = useState();

    const checkCards = () => {
        // if the first click store the first card in state
        // if the second click compare the cards
        // if cards match keep them up 
        // else !match close them down
    };

    const cardsList = _cards
        .map((card) => <Card item={card} checkCards={checkCards}/>)
        .sort(() => 0.5 - Math.random()); 

    
// when the player click the first card keep it open 
// when the player click the second card check if its match keep all them open
// or if not match close them 

    return (
    <GridStyled>
        {cardsList}
    </GridStyled>
    );
};

export default Grid;