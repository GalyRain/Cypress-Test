import { UIElement } from '../ui-element';

export class Text extends UIElement {
  checkHaveText(text: string): Cypress.Chainable<any> {
    return this.get().should('have.text', text);
  }

  checkContainText(text: string): Cypress.Chainable<any> {
    return this.get().should('contain', text);
  }
}
