import React, { Component } from "react";
import './styles/index.scss';

class Title extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {

        const { title, description } = this.props;

        return ( 
            <div className='title-container'>
                <h2>{ title }</h2>
                <p>{ description }</p>
            </div>
        );
    }
}

export default Title;