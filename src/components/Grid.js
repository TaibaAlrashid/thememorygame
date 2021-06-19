import {useState} from "react";
/* Data */
import cards from "../cards";
/* Components */
import Card from "./Card";
/* Styles */
import { GridStyled } from "../styles";

cards.sort(() => Math.random() - Math.random()); 

const Grid = () => {
    const [_cards, setCards] = useState(cards);
    const [firstClick, setFirstClick] = useState(null);
    const [secondClick, setSecondClick] = useState(null);

    const checkCards = (card) => {
       // if the first click store the first card in state
        // if the second click compare the cards 
            if (firstClick === null ){
                setFirstClick(card);}
            else setSecondClick(card);

            if (firstClick?.name === secondClick?.name ) {
                // setFirstClick({...firstClick, match: true})
                // console.log(firstClick)
                // setSecondClick({...secondClick, match: true})
                return (true);  
            } else return (false);
        // // if cards match keep them up
        // // else !match close them down
        }
    const cardsList = _cards
        .map((card) => <Card item={card} checkCards={checkCards}
            firstClick={firstClick} setFirstClick={setFirstClick}
            secondClick={secondClick} setSecondClick={setSecondClick}
        />)

    return (
    <GridStyled>{cardsList}</GridStyled>
    );
};

export default Grid;

