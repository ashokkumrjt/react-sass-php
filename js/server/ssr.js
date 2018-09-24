/* eslint-disable new-cap */
/* eslint-disable no-undef */
import './polyfill';
import { createFactory } from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';

import * as server from '../../components/title';

const renderReact = props => {

    props = JSON.parse(props);

    const Component = createFactory(server[props.type]);
    const fn = props.meta.render === 'serverside' ? renderToStaticMarkup : renderToString;

    return fn(Component(props.attributes));
};

export default server;
export { renderReact };