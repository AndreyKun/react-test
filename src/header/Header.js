import React from "react";
import './Header.css';
import logo from './logo.svg';
import Navigation from '../navigation/Navigation';

class Header extends React.Component {
    render() {
        return(
            <header className="Header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>My site header</h1>
                <Navigation />
            </header>
        );
    }
}

export default Header;