import { useState } from "react";
/* Data */
import cards from "../cards";
/* Components */
import Card from "./Card";
/* Styles */
import { GridStyled, Restart } from "../styles";

cards.sort(() => Math.random() - Math.random());

const Grid = () => {
  const [_cards, setCards] = useState(cards);
  const [firstClick, setFirstClick] = useState(null);

  const checkCards = (card) => {
    if (firstClick === null) {
      setFirstClick(card);
    } else {
      if (firstClick?.name === card?.name) {
        setFirstClick(null);
        console.log("match");
      } else {
        firstClick.status = false;
        card.status = false;
        setFirstClick(null);
        console.log("not match");
      }
    }
  };
  const cardsList = _cards.map((card) => (
    <Card item={card} checkCards={checkCards} />
  ));
  const handleClick = () => {
    const restart = cards.map((mc) =>
      mc.status === true ? { ...mc, status: false, match: "false" } : mc
    );
    restart.sort(() => Math.random() - Math.random());
    setFirstClick(null);
    setCards(restart);
  };

  return (
    <div>
      <GridStyled>{cardsList}</GridStyled>
      <Restart onClick={handleClick}>
        <img
          src="https://iconsplace.com/wp-content/uploads/_icons/00509d/256/png/restart-icon-19-256.png"
          alt="restart"
        />
      </Restart>
    </div>
  );
};

export default Grid;
