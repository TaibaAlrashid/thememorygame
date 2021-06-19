import { useState, useEffect } from "react";
/* Styles */
import { CardStyled } from "../styles";

const Card = (props) => {
  const [flipped, setFlipped] = useState(props.item.status);
  const [cardImage, setCardImage] = useState(props.item.cover);

  const handleClick = () => {
    if (flipped === false && props.item.match === false)
      setCardImage(props.item.icon);
    else setCardImage(props.item.cover);
    setFlipped(!flipped);
    if (props.checkCards(props.item)) {
      console.log("match");
    } else console.log("not match");
  };

  return <CardStyled onClick={handleClick} src={cardImage} alt={cardImage} />;
};

export default Card;
