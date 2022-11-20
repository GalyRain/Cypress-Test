import { BasePage } from './base.page';
import { Toolbar } from './common-widgets/toolbar';
import { Dialog } from './common-widgets/dialog';
import { Text } from './base/elements/text';
import { Button } from './base/elements/button';

class ChartPage extends BasePage {
  readonly toolbar: Toolbar;
  readonly dialog: Dialog;
  readonly mainTitleText: Text;
  readonly widgetDetailsDescriptionText: Text;
  readonly widgetTechnicalsText: Text;
  readonly widgetTechnicalsMoreButton: Button;

  constructor() {
    super();
    this.toolbar = new Toolbar();
    this.dialog = new Dialog();
    this.mainTitleText = new Text('[data-name="legend-series-item"] [class*="mainTitle"]');
    this.widgetDetailsDescriptionText = new Text('[data-name="details-description"] span');
    this.widgetTechnicalsText = new Text('[data-name=details-technicals]');
    this.widgetTechnicalsMoreButton = new Button('[data-name=details-more-technicals-button]');
  }

  checkElementsVisible(): void {
    this.toolbar.searchButton.checkExists();
  }

  open(): ChartPage {
    this.visit('chart/');
    return this;
  }
}

export const chartPage = new ChartPage();
