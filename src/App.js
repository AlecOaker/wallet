import "./App.css";
import Cards from "./components/Cards";
import Cash from "./components/Cash";
import HomeLeft from "./components/HomeLeft";
import CardAdd from "./components/CardAdd";
import { useState } from "react";

const INITIAL_CARDS = [
    {
        id: "4149 5100 4142 5674343",
        bank: "Privat",
        scheme: "Visa",
        type: "debit",
        luhn: true,
        number: "4149 5100 4142 5674",
        expDate: "02/24",
        cvv: "343",
        cardHolder: "Borys Johnsoniuk",
        cardAmount: 12503,
    },
];
function App() {
    const [card, setCard] = useState(INITIAL_CARDS);

    const [isCards, setCards] = useState(true);
    const [isCash, setCash] = useState(false);
    const [isCardAdd, setCardAdd] = useState(false);
    const [cardNumber, setCardNumber] = useState("");
    const [cardExpDate, setCardExpDate] = useState("");
    const [cardCvv, setCardCvv] = useState("");
    const [cardHolder, setCardHolder] = useState("");
    const [cardAmount, setCardAmount] = useState();
    const [cardCurrency, setCardCurrency] = useState("UAH");
    const [cashValue, setCashValue] = useState(0);
    const [cashValueUsd, setCashValueUsd] = useState(0);
    const [cashValueEur, setCashValueEur] = useState(0);
    const [cashCurrency, setCashCurrency] = useState("UAH");

    const onAddCardHandler = (newCard) => {
        setCard((prevCard) => {
            return setCard([newCard, ...prevCard]);
        });
    };
    return (
        <div className="App">
            <div className="container">
                <HomeLeft
                    cashValue={cashValue}
                    cashValueUsd={cashValueUsd}
                    cashValueEur={cashValueEur}
                    card={card}
                />
                {isCards ? (
                    <Cards
                        setCards={setCards}
                        setCash={setCash}
                        setCardAdd={setCardAdd}
                        card={card}
                        cardCurrency={cardCurrency}
                        setCardCurrency={setCardCurrency}
                    />
                ) : null}
                {isCash ? (
                    <Cash
                        setCards={setCards}
                        setCash={setCash}
                        setCardAdd={setCardAdd}
                        cashValue={cashValue}
                        setCashValue={setCashValue}
                        cashValueUsd={cashValueUsd}
                        setCashValueUsd={setCashValueUsd}
                        cashValueEur={cashValueEur}
                        setCashValueEur={setCashValueEur}
                        cashCurrency={cashCurrency}
                        setCashCurrency={setCashCurrency}
                    />
                ) : null}
                {isCardAdd ? (
                    <CardAdd
                        setCards={setCards}
                        setCash={setCash}
                        setCardAdd={setCardAdd}
                        cardNumber={cardNumber}
                        setCardNumber={setCardNumber}
                        cardExpDate={cardExpDate}
                        setCardExpDate={setCardExpDate}
                        cardCvv={cardCvv}
                        setCardCvv={setCardCvv}
                        cardHolder={cardHolder}
                        setCardHolder={setCardHolder}
                        cardAmount={cardAmount}
                        setCardAmount={setCardAmount}
                        cardCurrency={cardCurrency}
                        setCardCurrency={setCardCurrency}
                        onAddCardHandler={onAddCardHandler}
                    />
                ) : null}
            </div>
        </div>
    );
}

export default App;
