import React from "react";
import './Header.css';
import logo from './logo.svg';
import Navigation from '../navigation/Navigation';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test_text: 'Test component OOP style'
        }
    }

    render() {
        return(
            <header className="Header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>My site header</h1>
                <Navigation name={this.state.test_text}/>
            </header>
        );
    }
}

export default Header;