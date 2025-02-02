import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'web-components-lib',
  globalStyle: 'www/globals/app.css', // Certifique-se de que o caminho está correto
  plugins: [
    sass({
      injectGlobalPaths: ['src/globals/app.scss'], // Caminho SCSS original
    }),
  ],
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null,
      copy: [{ src: 'globals', dest: 'globals' }], // Garante que a pasta "globals" seja mantida
    },
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
  ],
};
