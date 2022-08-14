import React, { useState } from "react";
import "./Card.css";

const Card = (props) => {
    const [isHidden, setIsHidden] = useState(true);

    const {
        cardNumber,
        cardExpDate,
        cardAmount,
        cardCurrency,
        cardBank,
        cardScheme,
        cardType,
        removeCard,
        cardId,
    } = props;
    const copyText = cardNumber;

    const onHiddenMaker = () => {
        setIsHidden(!isHidden);
    };

    return (
        <div className="cards__wrapper">
            <div className="cards__template">
                <div className="card__container">
                    <div
                        className={
                            cardBank
                                ? cardBank.length < 18
                                    ? "card__bank"
                                    : "card__bank__small"
                                : null
                        }
                    >
                        {cardBank
                            ? cardBank.length > 40
                                ? cardBank.slice(0, 40) + "..."
                                : cardBank
                            : "BANK"}
                    </div>
                    <div className="card__pay-plat">
                        {cardScheme === "visa" && (
                            <img
                                className="card__pay-plat__img"
                                src="img/visa.svg"
                                alt={cardScheme}
                            />
                        )}
                        {cardScheme === "mastercard" && (
                            <img
                                className="card__pay-plat__img"
                                src="img/mastercard.svg"
                                alt={cardScheme}
                            />
                        )}
                        {cardScheme === "maestro" && (
                            <img
                                className="card__pay-plat__img"
                                src="img/maestro.svg"
                                alt={cardScheme}
                            />
                        )}
                        {cardScheme === "amex" && (
                            <img
                                className="card__pay-plat__img"
                                src="img/american-express.svg"
                                alt={cardScheme}
                            />
                        )}
                        {cardScheme === "unionpay" && (
                            <img
                                className="card__pay-plat__img"
                                src="img/unionpay.svg.svg"
                                alt={cardScheme}
                            />
                        )}
                    </div>
                    <div className="card__sum">
                        {cardAmount} {cardCurrency}
                    </div>
                    <div className="card__type">{cardType}</div>
                    <div className="card__number">
                        {!cardNumber ? null : cardNumber.slice(0, 5)}
                        <span className="stars" onClick={onHiddenMaker}>
                            {isHidden
                                ? "**** ****"
                                : !cardNumber
                                ? null
                                : cardNumber.slice(5, 14)}
                        </span>
                        {!cardNumber ? null : cardNumber.slice(14, 20)}
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
                <button
                    className="cards__button__del"
                    onClick={() => removeCard(cardId)}
                >
                    Видалити
                </button>
            </div>
        </div>
    );
};

export default Card;
