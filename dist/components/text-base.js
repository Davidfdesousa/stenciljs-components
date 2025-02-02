import { p as proxyCustomElement, H, h, c as Host } from './p-a4b2c2f3.js';

const textBaseCss = ":host{display:block;font-family:Arial, sans-serif;color:var(--text-color, var(--text-color-default, #000))}:host([theme=\"light\"]){--text-color:#000;--text-color-default:#000;--text-color-inverse:#fff}:host([theme=\"dark\"]){--text-color:#fff;--text-color-default:#fff;--text-color-inverse:#fff}::slotted(*){font-size:inherit;color:inherit}:host(.text-base){line-height:normal}:host(.text-sm){font-size:12px}:host(.text-md){font-size:16px}:host(.text-lg){font-size:20px}:host(.color-default){color:var(--text-color-default, #000)}:host(.color-inverse){color:var(--text-color-inverse, #fff)}";
const TextBaseStyle0 = textBaseCss;

const TextBase$1 = /*@__PURE__*/ proxyCustomElement(class TextBase extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.size = 'md';
        this.color = 'default';
    }
    render() {
        const hostClasses = {
            'text-base': true,
            [`text-${this.size}`]: true,
            [`color-${this.color}`]: true,
        };
        return (h(Host, { key: 'a945f32a8c65b3eba6b07c903a7ebaa487814061', class: hostClasses }, h("slot", { key: 'fa4b6a150c63828bbc711d4b839dd0ac3c9d7b50' })));
    }
    static get style() { return TextBaseStyle0; }
}, [1, "text-base", {
        "size": [1],
        "color": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["text-base"];
    components.forEach(tagName => { switch (tagName) {
        case "text-base":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TextBase$1);
            }
            break;
    } });
}
defineCustomElement$1();

const TextBase = TextBase$1;
const defineCustomElement = defineCustomElement$1;

export { TextBase, defineCustomElement };

//# sourceMappingURL=text-base.js.map