import * as _ from 'lodash';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker'

import createParser, { XPathListener } from '../../';
import { StepContext, PredicateContext } from '../../XPathParser';

/**
 * Walk basic json
 */

class XPathWalker implements XPathListener {
  private jsonPathArr: string[] = [];

  public get jsonPath() {
    return this.jsonPathArr.join('.');
  }

  enterStep(ctx: StepContext) {
    const predicate = ctx.predicate();

    if (predicate.length > 0) {
      this.jsonPathArr.push(predicate.map(x => x.text).join(''));
    } else {
      this.jsonPathArr.push(ctx.text)
    }
  }
}

function get(data: any, xPath: string) {
  const parser = createParser(xPath);
  let bucket = data;
  
  for(const step of parser.absoluteLocationPathNoroot().relativeLocationPath().step()) {
    const predicate = step.predicate();
    if (predicate.length > 0) {
      bucket = traversePredicates(predicate, bucket);
    } else {
      bucket = bucket[step.text];
    }
  }

  return bucket;
}

function traversePredicates(predicates: PredicateContext[], data: any) {
  let bucket = data;
  
  for(const predicate of predicates) {
    bucket = bucket[predicate.expr().text];
  }

  return bucket;
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
console.log(get(data, '/bookstore/book[1]/title'))