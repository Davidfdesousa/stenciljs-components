import { p as promiseResolve, b as bootstrapLazy } from './index-d4bcc999.js';
export { s as setNonce } from './index-d4bcc999.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v4.25.1 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["text-base",[[1,"text-base",{"size":[1],"color":[1]}]]]], options);
});

//# sourceMappingURL=web-components-lib.js.map