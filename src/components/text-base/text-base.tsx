import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'text-base',
  styleUrl: 'text-base.css',
  shadow: true,
})
export class TextBase {
  // Propriedade para definir o tamanho: 'sm', 'md' ou 'lg'
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';
  
  // Propriedade para definir a cor: 'default' (texto preto) ou 'inverse' (texto branco)
  @Prop() color: 'default' | 'inverse' = 'default';

  render() {
    // Monta classes dinâmicas com base nas propriedades 'size' e 'color'
    const hostClasses = {
      'text-base': true,
      [`text-${this.size}`]: true,     // Aplica text-sm, text-md ou text-lg
      [`color-${this.color}`]: true,     // Aplica color-default ou color-inverse
    };

    return (
      <Host class={hostClasses}>
        <slot></slot>
      </Host>
    );
  }
}
