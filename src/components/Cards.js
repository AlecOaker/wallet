import Card from "./Card";
import React from "react";
import "./Cards.css";

const Cards = (props) => {
    const { setCards, setCash, setCardAdd, card } = props;

    const onAddNewCard = () => {
        setCards(false);
        setCash(false);
        setCardAdd(true);
    };
    const onAddCash = () => {
        setCards(false);
        setCash(true);
        setCardAdd(false);
    };
    return (
        <div className="cards__container">
            <div className="cards__wrapper">
                <button className="cards__buttons__add" onClick={onAddNewCard}>
                    Додати картку
                </button>
                <button className="cards__buttons__add" onClick={onAddCash}>
                    Додати готівку
                </button>
            </div>
            {card.map((card) => (
                <Card
                    key={card.number}
                    cardId={card.id}
                    cardNumber={card.number}
                    cardExpDate={card.expDate}
                    cardAmount={card.cardAmount}
                    cardCurrency={card.currency}
                />
            ))}
        </div>
    );
};

export default Cards;
