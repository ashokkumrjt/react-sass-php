'use strict';

import renderReact from '../modules/renderReact';

// Components
import Title from '../../components/title';

const mediator = {

    init() {

        this.initReact();
    },

    initReact() {

        renderReact( Title, 'title');
    }
};

document.addEventListener( 'DOMContentLoaded', () => {
    mediator.init();
});