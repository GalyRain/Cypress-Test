import { BasePage } from './base.page';
import { Header } from './common-widgets/header';

class TradingViewHomePage extends BasePage {
  readonly header: Header;

  constructor() {
    super();
    this.header = new Header();
  }

  checkElementsVisible(): void {
    this.header.products.checkExists();
  }

  open(): TradingViewHomePage {
    this.visit('');
    return this;
  }
}

export const tradingViewHomePage = new TradingViewHomePage();
