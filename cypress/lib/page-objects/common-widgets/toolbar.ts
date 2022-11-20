import { Button } from '../base/elements/button';

export class Toolbar {
  readonly searchButton: Button;

  constructor() {
    this.searchButton = new Button('#header-toolbar-symbol-search');
  }
}
