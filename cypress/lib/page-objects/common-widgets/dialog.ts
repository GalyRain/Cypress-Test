import { Input } from '../base/elements/input';
import { Text } from '../base/elements/text';

export class Dialog {
  readonly searchInput: Input;

  constructor() {
    this.searchInput = new Input('[data-name="symbol-search-items-dialog"] input[data-role="search"]');
  }

  checkElementsVisible(): void {
    this.searchInput.checkExists();
  }

  getRowByIndex(index: number): Row {
    const row = new Row({ container: `[data-name="symbol-search-dialog-content-item"]:nth-child(${index + 2})` });
    row.description.checkExists();
    return row;
  }
}

class Row {
  private readonly container: string;
  readonly description: Text;

  constructor(selectors: RowSelectors) {
    this.container = selectors.container;
    this.description = new Text(`${this.container} [class*="symbolDescription"]`);
  }
}

export interface RowSelectors {
  container: string;
}
