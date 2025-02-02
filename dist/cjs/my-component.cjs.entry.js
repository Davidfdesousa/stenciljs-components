'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2393bf6d.js');
const utils = require('./utils-bcad3386.js');

const myComponentCss = ":host{display:block}";
const MyComponentStyle0 = myComponentCss;

const MyComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    getText() {
        return utils.format(this.first, this.middle, this.last);
    }
    render() {
        return index.h("div", { key: '70654fc83039b5f659efe99cc990e9b86d20dbe0' }, "Hello, World! I'm ", this.getText());
    }
};
MyComponent.style = MyComponentStyle0;

exports.my_component = MyComponent;
