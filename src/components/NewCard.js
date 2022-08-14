import React from "react";

const NewCard = (props) => {
    const {
        cardAmount,
        cardCurrency,
        cardBank,
        setCards,
        setCash,
        setCardAdd,
    } = props;

    const onEditCard = (id) => {
        setCards(false);
        setCash(false);
        setCardAdd(true);
    };

    return (
        <div>
            <div className="flex">
                <div>
                    - {!cardBank ? "Unidentified Bank" : cardBank}{" "}
                    <b>{cardAmount}</b>
                    {"\u00A0"}
                    {cardCurrency}
                </div>
                <button className="button-edit" onClick={onEditCard}>
                    Редагувати
                </button>
            </div>
        </div>
    );
};

export default NewCard;
