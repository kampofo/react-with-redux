import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class VendingMachine extends Component {
    render() {
        return (
            <div>
                <nav>
                    <NavLink exact to="/">
                        Home
                    </NavLink>
                    <NavLink exact to="/soda">
                        Soda
                    </NavLink>
                    <NavLink exact to="/chips">
                        Chips
                    </NavLink>
                    <NavLink exact to="/sardines">
                        Sardines
                    </NavLink>
                </nav>
            </div>
        );
    }
}

export default VendingMachine;
