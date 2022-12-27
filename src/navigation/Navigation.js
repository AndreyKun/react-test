import React from "react";

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <nav>
                <h1>{this.props.name}</h1>
                <ul>
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;