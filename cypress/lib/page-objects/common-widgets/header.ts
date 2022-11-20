import { Button } from '../base/elements/button';

export class Header {
  readonly products: Button;
  readonly chart: Button;

  constructor() {
    this.products = new Button('[data-main-menu-root-track-id=products]');
    this.chart = new Button('[href="/chart/"] [class*=menuItemHeader]');
  }
}
