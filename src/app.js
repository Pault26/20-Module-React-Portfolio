import React from "react";
import Header from './components/header';
import PortfolioContainer from "./components/portfolioContainer";
import Footer from './components/footer';
import './style.css';

const App = () => {
    return(
        <div>
            <Header/>
            <PortfolioContainer />
            <br></br>
            <Footer/>
        </div>
    );
};

export default App;