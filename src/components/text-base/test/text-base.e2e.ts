import { newE2EPage } from '@stencil/core/testing';

describe('text-base', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<text-base></text-base>');

    const element = await page.find('text-base');
    expect(element).toHaveClass('hydrated');
  });
});
