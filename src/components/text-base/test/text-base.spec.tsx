import { newSpecPage } from '@stencil/core/testing';
import { TextBase } from '../text-base';

describe('text-base', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TextBase],
      html: `<text-base></text-base>`,
    });
    expect(page.root).toEqualHtml(`
      <text-base>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </text-base>
    `);
  });
});
