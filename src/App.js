import { Formik } from "formik";
import "./App.css";
import Cards from "./components/Cards";
import Cash from "./components/Cash";
import HomeLeft from "./components/HomeLeft";
import Formik1 from "./components/Formik1";
import Basic from "./components/Formik1";
import CardAdd from "./components/CardAdd";

function App() {
    return (
        <div className="App">
            <div className="container">
                <HomeLeft />
                {/* <Cards /> */}
                {/* <Cash /> */}
                {/* <Basic /> */}
                <CardAdd />
            </div>
        </div>
    );
}

export default App;
