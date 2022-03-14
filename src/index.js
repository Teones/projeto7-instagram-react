import ReactDOM from "react-dom";
import Navbar from "./app/Navbar";
import Corpo from "./app/Corpo";
import FundoMobile from "./app/FundoMobile";


function App () {
    return (
        <div>
            <Navbar />
            <Corpo />
            <FundoMobile />
        </div>
    )
}

const divRoot = document.querySelector(".root")
ReactDOM.render(<App />, divRoot)
