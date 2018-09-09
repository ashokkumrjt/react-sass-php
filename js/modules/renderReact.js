import React from 'react';
import { render } from 'react-dom';

const componentData = appData.components;

export default ( Component, key ) => {

    Array.prototype.map.call(
        document.querySelectorAll( `[data-component="${ key }"]` ),
        el => {

            try {

                const props = componentData.filter(cmp => cmp.id === el.getAttribute('data-id'))[0];

                if (props && props.attributes) {

                    const services = props.services || [];
                    const component = props.component || '';
                    const id = props.id || '';

                    render(<Component {...props.attributes} services={services} id={id} component={component} />, el);
                }
            }

            catch (err) {

                console.error(`Failed to render ${Component.name}, due to ${err}. Please Verify the Corresponding JSON data.`);
            }
        }
    );
};