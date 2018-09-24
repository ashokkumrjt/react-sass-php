/* eslint no-unused-vars: [0] */
/* global global, print */
// import 'babel-polyfill';

// import URLSearchParams from 'url-search-params';

var self = global;
var window = global;
var process = { env: {} };

if (!console) {
    var console = {};

    console.debug = print;
    console.warn = print;
    console.log = print;
    console.error = print;
    console.trace = print;

    global.console = console;
}

if ( typeof windowEncoded === 'undefined' ) {
    var windowEncoded = {
        'location': {
            'hash': '',
            'href': '',
            'pathname': ''
        }
    };
}


