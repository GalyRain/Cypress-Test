import { Given } from "@badeball/cypress-cucumber-preprocessor";
import { tradingViewHomePage } from '../../lib/page-objects/tradingview-home.page';

Given(/user goes to TradingView page/, () => {
  tradingViewHomePage.open();
  tradingViewHomePage.checkElementsVisible();
});

Given(/user selects Products -> Chart/, () => {
  tradingViewHomePage.header.products.rightclick();
  tradingViewHomePage.header.chart.click();
});
