import type { Components, JSX } from "../types/components";

interface TextBase extends Components.TextBase, HTMLElement {}
export const TextBase: {
    prototype: TextBase;
    new (): TextBase;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
