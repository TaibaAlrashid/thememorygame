import { useState } from "react";
/* Styles */
import { CardWrapper, CoverCardStyled, IconCardStyled } from "../styles";
import ReactCardFlip from "react-card-flip";

const Card = (props) => {
  const [flipped, setFlipped] = useState(props.item.status);

  const handleClick = () => {
    setFlipped(!flipped);
    props.item.status = true;
    setTimeout(() => {
      props.checkCards(props.item);
    }, 500);
  };
  return (
    <div>
      <ReactCardFlip isFlipped={props.item.status} flipDirection="vertical">
        <CoverCardStyled
          onClick={handleClick}
          src={props.item.cover}
          alt={props.item.name}
        />
        <IconCardStyled
          onClick={handleClick}
          src={props.item.icon}
          alt={props.item.name}
        />
      </ReactCardFlip>
    </div>
  );
};

export default Card;
