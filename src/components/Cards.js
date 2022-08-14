import Card from "./Card";
import React from "react";
import "./Cards.css";

const Cards = (props) => {
    const { setCards, setCash, setCardAdd, card, removeCard } = props;

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
                    cardNumber={card.number}
                    key={card.id}
                    cardId={card.id}
                    cardExpDate={card.expDate}
                    cardAmount={card.cardAmount}
                    cardCurrency={card.cardCurrency}
                    cardBank={card.bank}
                    cardScheme={card.scheme}
                    cardType={card.type}
                    removeCard={removeCard}
                />
            ))}
        </div>
    );
};

export default Cards;
