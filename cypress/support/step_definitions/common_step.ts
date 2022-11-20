import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given(`User takes a screenshot`, () => {
  cy.screenshot();
});
