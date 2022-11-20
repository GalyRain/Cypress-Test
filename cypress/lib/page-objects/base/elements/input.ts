import { UIElement } from '../ui-element';

export class Input extends UIElement {
  type(value: string, delay?: number): void {
    this.get().should('be.enabled');
    this.get().should('not.be.disabled');
    this.get().type(value, { delay: delay });
  }
}
