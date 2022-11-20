export class UIElement {
  private readonly selector: string;

  constructor(selector: string) {
    this.selector = selector;
  }

  get(): Cypress.Chainable<any> {
    return cy.get(this.selector);
  }

  click(): void {
    this.get().click();
  }

  checkExists(): Cypress.Chainable<any> {
    return this.get().should('be.visible');
  }

  scrollIntoView(): Cypress.Chainable<any> {
    return this.get().scrollIntoView();
  }
}
