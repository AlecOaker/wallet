import React from "react";
import "./Cash.css";
const Cash = () => {
    return (
        <div className="cash__container">
            <div className="cash__wrapper">
                <div className="cash__inputs">
                    <input className="cash__input" placeholder="amount" />
                    <input className="cash__input" placeholder="currency" />
                </div>
                <div className="cash__buttons">
                    <button className="cash__button cash__button__save">
                        Зберегти
                    </button>
                    <button className="cash__button cash__button__cancel">
                        Скасувати
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cash;
