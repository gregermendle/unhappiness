import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { XPathLexer } from './XPathLexer';
import { XPathParser } from './XPathParser';


export { XPathListener } from './XPathListener';
export { XPathVisitor } from './XPathVisitor';

export { XPathLexer, XPathParser};

export default function createParser(input: string) {
  const inputStream = new ANTLRInputStream(input);
  const lexer = new XPathLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  return new XPathParser(tokenStream)
};