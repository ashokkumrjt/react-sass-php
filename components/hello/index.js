import React, { Component } from "react";
import './styles/index.scss';

class Hello extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return ( 
            <div className='hello'>Hello react</div>
        );
    }
}

export default Hello;