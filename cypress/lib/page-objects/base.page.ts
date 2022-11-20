export class BasePage {
  visit(url?: string): Cypress.Chainable<Cypress.AUTWindow> {
    const defaultUrl = url ?? '';
    return cy.visit('/' + defaultUrl);
  }
}

export const basePage = new BasePage();
