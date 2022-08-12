import React from "react";
import "./HomeLeft.css";
import NewCard from "./NewCard";

const HomeLeft = (props) => {
    const { cashValue, cashValueUsd, cashValueEur, card } = props;
    let totalValue = 0;
    for (let i = 0; i < card.length; i++) {
        const element = card[i].cardAmount;
        console.log(element);
        totalValue += +element;
    }
    console.log(totalValue);
    return (
        <div className="home-left-wrapper">
            <div className="balance__container">
                <h4>Баланс</h4>
                <div>- {+cashValue + totalValue} UAH</div>
                <div>- {cashValueUsd} USD</div>
                <div>- {cashValueEur} EUR</div>
            </div>
            <div>Готівка</div>
            <div className="flex">
                <div className="flex__values">
                    <div>- {cashValue} UAH</div>
                    <div>- {cashValueUsd} USD</div>
                    <div>- {cashValueEur} EUR</div>
                </div>
                <button className="button-edit">Редагувати</button>
            </div>

            <div>Мої картки</div>
            {card.map((card) => (
                <NewCard key={card.number} cardAmount={card.cardAmount} />
            ))}
        </div>
    );
};

export default HomeLeft;
