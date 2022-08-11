import React from "react";
import "./Card.css";

const Card = () => {
    return (
        <div className="card__container">
            <div className="card__bank">Моно</div>
            <div className="card__pay-plat">VISA</div>
            <div className="card__sum">287.5 UAH</div>
            <div className="card__type">debit</div>
            <div className="card__number">4149 **** **** 0045</div>
            <div className="card__buttons__copy">
                <button className="card__button__copy">copy</button>
            </div>
            <div className="card__date">12/25</div>
        </div>
    );
};

export default Card;
