import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'web-components-lib',
  globalStyle: 'src/global/app.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        { src: 'global', dest: 'global' } // Copia a pasta `src/global` para `www/global`
      ],
    },
  ],
  testing: {
    browserHeadless: 'shell',
  },
};
