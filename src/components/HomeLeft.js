import React from "react";
import "./HomeLeft.css";
import NewCard from "./NewCard";

const HomeLeft = (props) => {
    const {
        cashValue,
        cashValueUsd,
        cashValueEur,
        card,
        setCards,
        setCash,
        setCardAdd,
    } = props;
    let cardTotalValueUah = 0;
    for (let i = 0; i < card.length; i++) {
        if (card[i].cardCurrency === "UAH") {
            const element = card[i].cardAmount;
            cardTotalValueUah += +element;
        }
    }
    let cardTotalValueUsd = 0;
    for (let i = 0; i < card.length; i++) {
        if (card[i].cardCurrency === "USD") {
            const element = card[i].cardAmount;
            cardTotalValueUsd += +element;
        }
    }
    let cardTotalValueEur = 0;
    for (let i = 0; i < card.length; i++) {
        if (card[i].cardCurrency === "EUR") {
            const element = card[i].cardAmount;
            cardTotalValueEur += +element;
        }
    }
    const onAddCash = () => {
        setCards(false);
        setCash(true);
        setCardAdd(false);
    };
    return (
        <div className="home-left-wrapper">
            <div className="balance__container">
                <h4>Баланс</h4>
                <div>- {+cashValue + cardTotalValueUah} UAH</div>
                <div>- {+cashValueUsd + cardTotalValueUsd} USD</div>
                <div>- {+cashValueEur + cardTotalValueEur} EUR</div>
            </div>
            <div>Готівка</div>
            <div className="flex">
                <div className="flex__values">
                    <div>- {cashValue} UAH</div>
                    <div>- {cashValueUsd} USD</div>
                    <div>- {cashValueEur} EUR</div>
                </div>
                <button className="button-edit" onClick={onAddCash}>
                    Редагувати
                </button>
            </div>

            <div>Мої картки</div>
            {card.map((card) => (
                <NewCard
                    key={card.id}
                    cardAmount={card.cardAmount}
                    cardCurrency={card.cardCurrency}
                    cardBank={card.bank}
                    setCards={setCards}
                    setCash={setCash}
                    setCardAdd={setCardAdd}
                />
            ))}
        </div>
    );
};

export default HomeLeft;
