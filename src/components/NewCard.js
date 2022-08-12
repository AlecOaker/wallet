import React from "react";

const NewCard = (props) => {
    const { cardAmount } = props;
    return (
        <div>
            <div className="flex">
                <div>- Моно {cardAmount} UAH</div>
                <button className="button-edit">Редагувати</button>
            </div>
        </div>
    );
};

export default NewCard;
