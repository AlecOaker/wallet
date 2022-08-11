import React, { useState } from "react";
import "./CardAdd.css";
import CardCurrencyDrop from "./CardCurrencyDrop";

const CardAdd = () => {
    const [cardNumber, setCardNumber] = useState();
    const [cardExpDate, setCardExpDate] = useState();
    const [cardCvv, setCardCvv] = useState();
    const [cardHolder, setCardHolder] = useState();
    const [cardAmount, setCardAmount] = useState();
    const [cardCurrency, setCardCurrency] = useState();

    const onCardNumberPress = (e) => {
        const inputVal = e.target.value.replace(/ /g, ""); //remove all the empty spaces in the input
        let inputNumbersOnly = inputVal.replace(/\D/g, ""); // Get only digits

        if (inputNumbersOnly.length > 16) {
            //If entered value has a length greater than 16 then take only the first 16 digits
            inputNumbersOnly = inputNumbersOnly.substr(0, 16);
        }

        // Get nd array of 4 digits per an element EX: ["4242", "4242", ...]
        const splits = inputNumbersOnly.match(/.{1,4}/g);

        let spacedNumber = "";
        if (splits) {
            spacedNumber = splits.join(" "); // Join all the splits with an empty space
        }

        setCardNumber(spacedNumber); // Set the new CC number
    };

    const onExDatePress = (e) => {
        const inputVal = e.target.value.replace(/ /g, "");
        let inputNumbersOnly = inputVal.replace(/\D/g, "");

        if (inputNumbersOnly.length > 4) {
            inputNumbersOnly = inputNumbersOnly.substr(0, 4);
        }

        const splits = inputNumbersOnly.match(/.{1,2}/g);

        let slashedNumber = "";
        if (splits) {
            slashedNumber = splits.join("/");
        }

        setCardExpDate(slashedNumber);
    };
    const onCvvPress = (e) => {
        const inputVal = e.target.value.replace(/ /g, "");
        let inputNumbersOnly = inputVal.replace(/\D/g, "");

        if (inputNumbersOnly.length > 3) {
            inputNumbersOnly = inputNumbersOnly.substr(0, 3);
        }

        setCardCvv(inputNumbersOnly);
    };

    const onCardHolderPress = (e) => {
        const inputVal = e.target.value;
        let inputLetterssOnly = inputVal.replace(/[0-9]/g, "");

        if (inputLetterssOnly.length > 30) {
            inputLetterssOnly = inputLetterssOnly.substr(0, 30);
        }

        setCardHolder(inputLetterssOnly);
    };

    const onCardAmountPress = (e) => {
        const inputVal = e.target.value.replace(/ /g, "");
        let inputNumbersOnly = inputVal.replace(/\D/g, "");

        if (inputNumbersOnly.length > 8) {
            inputNumbersOnly = inputNumbersOnly.substr(0, 8);
        }

        setCardAmount(inputNumbersOnly);
    };

    const onCardCurrencyPress = (e) => {
        const inputVal = e.target.value;
        let inputLetterssOnly = inputVal.replace(/\S/g, "");

        if (inputLetterssOnly.length > 30) {
            inputLetterssOnly = inputLetterssOnly.substr(0, 30);
        }

        setCardCurrency(inputLetterssOnly);
    };

    const onAddNewCard = () => {};
    return (
        <div className="card-add__container">
            <form>
                <h2 className="h2">Додавання картки</h2>
                <div className="card-add__inputs">
                    <input
                        className="card-add__input"
                        placeholder="card number"
                        name="card number"
                        type="text"
                        value={cardNumber}
                        onChange={onCardNumberPress}
                    />
                    <div className="card-add__input__wrapper">
                        <input
                            className="card-add__input-small"
                            placeholder="exp date"
                            type="text"
                            onChange={onExDatePress}
                            value={cardExpDate}
                        />
                        <input
                            className="card-add__input-small"
                            placeholder="cvv"
                            onChange={onCvvPress}
                            type="password"
                            value={cardCvv}
                        />
                    </div>
                    <input
                        className="card-add__input"
                        placeholder="card holder"
                        type="text"
                        onChange={onCardHolderPress}
                        value={cardHolder}
                    />
                    <div className="card-add__input__wrapper">
                        <input
                            className="card-add__input-small"
                            placeholder="amount"
                            type="text"
                            onChange={onCardAmountPress}
                            value={cardAmount}
                        />
                        {/* <select
                            className="card-add__input-small"
                            placeholder="currency"
                            type="text"
                            onChange={onCardCurrencyPress}
                            value={cardCurrency}
                        /> */}
                        <CardCurrencyDrop />
                    </div>
                </div>
                <div className="card-add__buttons">
                    <button
                        className="card-add__button card-add__button__submit"
                        type="submit"
                        onClick={onAddNewCard}
                    >
                        Додати картку
                    </button>
                    <button className="card-add__button card-add__button__cancel">
                        Скасувати
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CardAdd;
