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
        return (h(Host, { key: 'a945f32a8c65b3eba6b07c903a7ebaa487814061', class: hostClasses }, h("slot", { key: 'fa4b6a150c63828bbc711d4b839dd0ac3c9d7b50' })));
    }
    static get is() { return "text-base"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["text-base.css"]
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
//# sourceMappingURL=text-base.js.map
