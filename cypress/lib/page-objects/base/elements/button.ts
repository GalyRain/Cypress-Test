import { UIElement } from '../ui-element';

export class Button extends UIElement {
  rightclick(): void {
    this.get().rightclick();
  }
}
