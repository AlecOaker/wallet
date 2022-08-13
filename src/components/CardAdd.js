import React, { useState } from "react";
import "./CardAdd.css";

const CardAdd = (props) => {
    const [data, setData] = useState("");
    const {
        setCards,
        setCash,
        setCardAdd,
        setCardNumber,
        setCardExpDate,
        setCardCvv,
        setCardHolder,
        setCardAmount,
        setCardCurrency,
        cardNumber,
        cardExpDate,
        cardCvv,
        cardHolder,
        cardAmount,
        onAddCardHandler,
        cardCurrency,
    } = props;

    const getData = async (cardNumber) => {
        let response = await fetch(
            `https://lookup.binlist.net/${cardNumber.replace(/ /g, "")}`
        );
        if (response.ok) {
            let data = await response.json();
            setData(data);
            return data;
        }
    };
    if (cardNumber.length > 18 && cardExpDate < 1) {
        getData(cardNumber);
    }
    console.log(data);

    const onCardNumberPress = (e) => {
        const inputVal = e.target.value.replace(/ /g, "");
        let inputNumbersOnly = inputVal.replace(/\D/g, "");

        if (inputNumbersOnly.length > 16) {
            inputNumbersOnly = inputNumbersOnly.substr(0, 16);
        }

        const splits = inputNumbersOnly.match(/.{1,4}/g);

        let spacedNumber = "";
        if (splits) {
            spacedNumber = splits.join(" ");
        }

        setCardNumber(spacedNumber);
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
        setCardAmount(e.target.value);
    };

    const onCardCurrencyPress = (e) => {
        e.preventDefault();
        setCardCurrency(e.target.value);
    };

    const onResetHandler = (e) => {
        e.preventDefault();
        setCardNumber("");
        setCardExpDate("");
        setCardCvv("");
        setCardHolder("");
        setCardHolder("");
        setCardAmount("");
        setCardCurrency("UAH");
        setCards(true);
        setCash(false);
        setCardAdd(false);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        const cardData = {
            id: cardNumber + cardCvv,
            bank: data.bank.name,
            scheme: data.scheme,
            type: data.type,
            luhn: data.number.luhn,
            number: cardNumber,
            expDate: cardExpDate,
            cvv: cardCvv,
            cardHolder: cardHolder,
            cardAmount: cardAmount,
            cardCurrency: cardCurrency,
        };
        console.log(cardData);
        onAddCardHandler(cardData);
        setCards(true);
        setCash(false);
        setCardAdd(false);
        setCardNumber("");
        setCardExpDate("");
        setCardCvv("");
        setCardHolder("");
        setCardAmount("");
        setCardCurrency("UAH");
        return cardData;
    };
    return (
        <div className="card-add__container">
            <form onSubmit={submitHandler}>
                <h2 className="h2">Додавання картки</h2>
                <div className="card-add__inputs">
                    {/* {luhn && <span>CardNUmber is invalid</span>} */}
                    <input
                        className="card-add__input"
                        placeholder="card number"
                        name="card number"
                        type="text"
                        value={cardNumber}
                        onChange={onCardNumberPress}
                        required
                    />
                    <div className="card-add__input__wrapper">
                        <input
                            className="card-add__input-small"
                            placeholder="exp date"
                            type="text"
                            onChange={onExDatePress}
                            value={cardExpDate}
                            required
                        />
                        <input
                            className="card-add__input-small"
                            placeholder="cvv"
                            onChange={onCvvPress}
                            type="password"
                            value={cardCvv}
                            required
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
                            type="number"
                            min="0.01"
                            step="0.01"
                            onChange={onCardAmountPress}
                            value={cardAmount}
                        />
                        {/* <CurrencyDrop /> */}
                        <select
                            className="card-add__currency-small"
                            onChange={onCardCurrencyPress}
                        >
                            <option
                                className="card-add__currency-option"
                                value={"UAH"}
                            >
                                UAH
                            </option>
                            <option
                                className="card-add__currency-option"
                                value={"USD"}
                            >
                                USD
                            </option>
                            <option
                                className="card-add__currency-option"
                                value={"EUR"}
                            >
                                EUR
                            </option>
                        </select>
                    </div>
                </div>
                <div className="card-add__buttons">
                    <button
                        className="card-add__button card-add__button__submit"
                        type="submit"
                    >
                        Додати картку
                    </button>
                    <button
                        className="card-add__button card-add__button__cancel"
                        onClick={onResetHandler}
                    >
                        Скасувати
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CardAdd;
