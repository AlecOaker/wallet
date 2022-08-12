import React, { useState } from "react";
import "./Card.css";

const Card = (props) => {
    const [isHidden, setIsHidden] = useState(true);
    const { cardNumber, cardExpDate, cardAmount, onCardDelete } = props;
    const copyText = cardNumber;
    const onHiddenmaker = () => {
        setIsHidden(!isHidden);
    };
    return (
        <div className="cards__wrapper">
            <div className="cards__template">
                <div className="card__container">
                    <div className="card__bank">Моно</div>
                    <div className="card__pay-plat">VISA</div>
                    <div className="card__sum">{cardAmount} UAH</div>
                    <div className="card__type">debit</div>
                    <div className="card__number">
                        {cardNumber.slice(0, 5)}
                        <span className="stars" onClick={onHiddenmaker}>
                            {isHidden ? "**** ****" : cardNumber.slice(5, 14)}
                        </span>
                        {cardNumber.slice(14, 20)}
                    </div>
                    <div className="card__buttons__copy">
                        <button
                            className="card__button__copy"
                            onClick={() =>
                                navigator.clipboard.writeText(copyText)
                            }
                        >
                            copy
                        </button>
                    </div>
                    <div className="card__date">{cardExpDate}</div>
                </div>
            </div>
            <div className="cards__buttons__del">
                <button className="cards__button__del" onClick={onCardDelete}>
                    Видалити
                </button>
            </div>
        </div>
    );
};

export default Card;
