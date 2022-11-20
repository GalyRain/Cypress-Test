import { Given } from "@badeball/cypress-cucumber-preprocessor";
import { chartPage } from '../../lib/page-objects/chart.page';

Given(`user selects an {string} stock`, (stock: string) => {
  chartPage.checkElementsVisible();
  chartPage.toolbar.searchButton.click();
  chartPage.dialog.checkElementsVisible();
  chartPage.dialog.searchInput.type(stock);
  chartPage.dialog.getRowByIndex(0).description.click();
  chartPage.mainTitleText.checkContainText(stock);
  chartPage.widgetDetailsDescriptionText.checkContainText(stock);
});

Given(`user in the bottom right widget, scroll to {string} element`, (widget: string) => {
  chartPage.widgetTechnicalsText.scrollIntoView();
});

