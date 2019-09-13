import * as _ from 'lodash';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker'

import createParser, { XPathListener } from '../../';
import { StepContext } from '../../XPathParser';

/**
 * Walk basic json
 */

class XPathWalker implements XPathListener {
  private jsonPathArr: string[] = [];

  public get jsonPath() {
    return this.jsonPathArr.join('.');
  }

  enterStep(ctx: StepContext) {
    this.jsonPathArr.push(ctx.text.includes('[') ? ctx.text.replace(/.+(\[\d+\])/ig, '$1') : ctx.text);
  }
}

const data = {
  bookstore: [
    {
      title: 'My Book'
    },
    {
      title: 'Harry Potter'
    }
  ]
}

const parser = createParser('/bookstore/book[1]/title');
const listener = new XPathWalker();
ParseTreeWalker.DEFAULT.walk(listener as XPathListener, parser.main());
console.log(_.get(data, listener.jsonPath));