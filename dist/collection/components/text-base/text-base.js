import { h, Host } from "@stencil/core";
export class TextBase {
    constructor() {
        this.size = 'md';
        this.color = 'default';
    }
    render() {
        const hostClasses = {
            'text-base': true,
            [`text-${this.size}`]: true,
            [`color-${this.color}`]: true,
        };
        return (h(Host, { key: '805e867c110dd65bed79d9cd3555f7042e9a645b', class: hostClasses }, h("slot", { key: '2a48bd06a4638d9a1375f71cd2b1ed5d7b27c513' })));
    }
    static get is() { return "text-base"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["text-base.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["text-base.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'sm' | 'md' | 'lg'",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "size",
                "reflect": false,
                "defaultValue": "'md'"
            },
            "color": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'default' | 'inverse'",
                    "resolved": "\"default\" | \"inverse\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "color",
                "reflect": false,
                "defaultValue": "'default'"
            }
        };
    }
}
