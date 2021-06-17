import {useState} from "react";

const Card = (props) => {
    const [flipped, setFlipped] = useState(false);
    const [cardImage, setCardImage] = useState(props.item.cover);

    const handleClick = () => {
        if (flipped === false) setCardImage(props.item.icon)
        else setCardImage(props.item.cover);
        setFlipped(!flipped)
        props.checkCards();
    };

return ( <img onClick={handleClick} src={cardImage} alt={cardImage} width="100"/> );
};

export default Card;