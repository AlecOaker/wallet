import React from "react";
import "./HomeLeft.css";
import NewCard from "./NewCard";

const HomeLeft = () => {
    return (
        <div className="home-left-wrapper">
            <div>
                <h4>Баланс</h4>
                <div>- 1287.75 UAH</div>
                <div>- 500 USD</div>
            </div>
            <div>Готівка</div>
            <div className="flex">
                <div>- 1000 UAH</div>
                <button className="button-edit">Редагувати</button>
            </div>

            <div>Мої картки</div>
            <NewCard />
        </div>
    );
};

export default HomeLeft;
