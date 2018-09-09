import React, { Component } from "react";
import './styles/index.scss';

class Title extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return ( 
            <div className='title-container'>
                <h2>Title component</h2>
                <p>Title description, loream ipsum dolor</p>
            </div>
        );
    }
}

export default Title;