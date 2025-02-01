import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'text-base',
  styleUrl: 'text-base.css',
  shadow: true,
})
export class TextBase {
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';
  @Prop() color: 'default' | 'inverse' = 'default';

  render() {
    const hostClasses = {
      'text-base': true,
      [`text-${this.size}`]: true,
      [`color-${this.color}`]: true,
    };

    return (
      <Host class={hostClasses}>
        <slot></slot>
      </Host>
    );
  }
}
