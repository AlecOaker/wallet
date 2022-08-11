import Card from "./Card";
import React from "react";
import "./Cards.css";

const Cards = () => {
    return (
        <div className="cards__container">
            <div className="cards__wrapper">
                <button className="cards__buttons__add">Додати картку</button>
                <button className="cards__buttons__add">Додати готівку</button>
            </div>
            <div className="cards__wrapper">
                <div className="cards__template">
                    <Card />
                </div>
                <div className="cards__buttons__del">
                    <button className="cards__button__del">Видалити</button>
                </div>
            </div>
            <div className="cards__wrapper">
                <div className="cards__template"></div>
                <div className="cards__buttons__del">
                    <button className="cards__button__del">Видалити</button>
                </div>
            </div>
        </div>
    );
};

export default Cards;
