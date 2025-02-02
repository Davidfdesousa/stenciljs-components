import { b as bootstrapLazy } from './index-d4bcc999.js';
export { s as setNonce } from './index-d4bcc999.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["text-base",[[1,"text-base",{"size":[1],"color":[1]}]]]], options);
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map