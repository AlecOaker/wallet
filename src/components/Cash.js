import React from "react";
import "./Cash.css";
const Cash = (props) => {
    const {
        setCards,
        setCash,
        setCardAdd,
        setCashValue,
        cashValue,
        cashValueUsd,
        setCashValueUsd,
        cashValueEur,
        setCashValueEur,
        cashCurrency,
        setCashCurrency,
    } = props;

    const onCancelCashHandler = (e) => {
        e.preventDefault();
        setCards(true);
        setCash(false);
        setCardAdd(false);
    };
    let newSum = 0;
    const onCashAmountPress = (e) => {
        e.preventDefault();
        newSum = e.target.value;
        return newSum;
    };
    let currency = cashCurrency;
    const onCashCurrencyPress = (e) => {
        e.preventDefault();
        currency = e.target.value;
        return currency;
    };

    const onSaveCashHandler = (e) => {
        e.preventDefault();
        setCards(true);
        setCash(false);
        setCardAdd(false);
        if (currency === "UAH") {
            setCashValue(+newSum + cashValue);
        } else if (currency === "USD") {
            setCashValueUsd(+newSum + cashValueUsd);
        } else if (currency === "EUR") {
            setCashValueEur(+newSum + cashValueEur);
        }
    };

    return (
        <div className="cash__container">
            <div className="cash__wrapper">
                <div className="cash__inputs">
                    <input
                        className="cash__input"
                        placeholder="amount"
                        type="number"
                        onChange={onCashAmountPress}
                    />
                    {/* <CurrencyDrop onCashCurrencyPress={onCashCurrencyPress} /> */}
                    <select
                        className="cash__input"
                        onChange={onCashCurrencyPress}
                    >
                        <option className="cash__input__option" value={"UAH"}>
                            UAH
                        </option>
                        <option className="cash__input__option" value={"USD"}>
                            USD
                        </option>
                        <option className="cash__input__option" value={"EUR"}>
                            EUR
                        </option>
                    </select>
                </div>

                <div className="cash__buttons">
                    <button
                        className="cash__button cash__button__save"
                        onClick={onSaveCashHandler}
                    >
                        Зберегти
                    </button>
                    <button
                        className="cash__button cash__button__cancel"
                        onClick={onCancelCashHandler}
                    >
                        Скасувати
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cash;
