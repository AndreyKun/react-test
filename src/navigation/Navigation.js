import React from "react";
import {NavLink} from "react-router-dom";
import './Navigation.css';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <nav>
                <h1>{this.props.name}</h1>
                <ul>
                    <li><NavLink to="/">Main</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/users">Users</NavLink></li>
                    <li><NavLink to="/goods">Goods</NavLink></li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;