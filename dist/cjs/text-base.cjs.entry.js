'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2393bf6d.js');

const textBaseCss = ":host{display:block;font-family:Arial, sans-serif;color:var(--text-color, var(--text-color-default, #000))}:host([theme=\"light\"]){--text-color:#000;--text-color-default:#000;--text-color-inverse:#fff}:host([theme=\"dark\"]){--text-color:#fff;--text-color-default:#fff;--text-color-inverse:#fff}::slotted(*){font-size:inherit;color:inherit}:host(.text-base){line-height:normal}:host(.text-sm){font-size:12px}:host(.text-md){font-size:16px}:host(.text-lg){font-size:20px}:host(.color-default){color:var(--text-color-default, #000)}:host(.color-inverse){color:var(--text-color-inverse, #fff)}";
const TextBaseStyle0 = textBaseCss;

const TextBase = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.size = 'md';
        this.color = 'default';
    }
    render() {
        const hostClasses = {
            'text-base': true,
            [`text-${this.size}`]: true,
            [`color-${this.color}`]: true,
        };
        return (index.h(index.Host, { key: 'a945f32a8c65b3eba6b07c903a7ebaa487814061', class: hostClasses }, index.h("slot", { key: 'fa4b6a150c63828bbc711d4b839dd0ac3c9d7b50' })));
    }
};
TextBase.style = TextBaseStyle0;

exports.text_base = TextBase;

//# sourceMappingURL=text-base.cjs.entry.js.map