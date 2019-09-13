// Generated from ./XPath.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { MainContext } from "./XPathParser";
import { LocationPathContext } from "./XPathParser";
import { AbsoluteLocationPathNorootContext } from "./XPathParser";
import { RelativeLocationPathContext } from "./XPathParser";
import { StepContext } from "./XPathParser";
import { AxisSpecifierContext } from "./XPathParser";
import { NodeTestContext } from "./XPathParser";
import { PredicateContext } from "./XPathParser";
import { AbbreviatedStepContext } from "./XPathParser";
import { ExprContext } from "./XPathParser";
import { PrimaryExprContext } from "./XPathParser";
import { FunctionCallContext } from "./XPathParser";
import { UnionExprNoRootContext } from "./XPathParser";
import { PathExprNoRootContext } from "./XPathParser";
import { FilterExprContext } from "./XPathParser";
import { OrExprContext } from "./XPathParser";
import { AndExprContext } from "./XPathParser";
import { EqualityExprContext } from "./XPathParser";
import { RelationalExprContext } from "./XPathParser";
import { AdditiveExprContext } from "./XPathParser";
import { MultiplicativeExprContext } from "./XPathParser";
import { UnaryExprNoRootContext } from "./XPathParser";
import { QNameContext } from "./XPathParser";
import { FunctionNameContext } from "./XPathParser";
import { VariableReferenceContext } from "./XPathParser";
import { NameTestContext } from "./XPathParser";
import { NCNameContext } from "./XPathParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `XPathParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface XPathVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `XPathParser.main`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMain?: (ctx: MainContext) => Result;

	/**
	 * Visit a parse tree produced by `XPathParser.locationPath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocationPath?: (ctx: LocationPathContext) => Result;

	/**
	 * Visit a parse tree produced by `XPathParser.absoluteLocationPathNoroot`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbsoluteLocationPathNoroot?: (ctx: AbsoluteLocationPathNorootContext) => Result;

	/**
	 * Visit a parse tree produced by `XPathParser.relativeLocationPath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelativeLocationPath?: (ctx: RelativeLocationPathContext) => Result;

	/**
	 * Visit a parse tree produced by `XPathParser.step`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStep?: (ctx: StepContext) => Result;

	/**
	 * Visit a parse tree produced by `XPathParser.axisSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAxisSpecifier?: (ctx: AxisSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `XPathParser.nodeTest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNodeTest?: (ctx: NodeTestContext) => Result;

	/**
	 * Visit a parse tree produced by `XPathParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicate?: (ctx: PredicateContext) => Result;

	/**
	 * Visit a parse tree produced by `XPathParser.abbreviatedStep`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbbreviatedStep?: (ctx: AbbreviatedStepContext) => Result;

	/**
	 * Visit a parse tree produced by `XPathParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `XPathParser.primaryExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpr?: (ctx: PrimaryExprContext) => Result;

	/**
	 * Visit a parse tree produced by `XPathParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by `XPathParser.unionExprNoRoot`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionExprNoRoot?: (ctx: UnionExprNoRootContext) => Result;

	/**
	 * Visit a parse tree produced by `XPathParser.pathExprNoRoot`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPathExprNoRoot?: (ctx: PathExprNoRootContext) => Result;

	/**
	 * Visit a parse tree produced by `XPathParser.filterExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFilterExpr?: (ctx: FilterExprContext) => Result;

	/**
	 * Visit a parse tree produced by `XPathParser.orExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrExpr?: (ctx: OrExprContext) => Result;

	/**
	 * Visit a parse tree produced by `XPathParser.andExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndExpr?: (ctx: AndExprContext) => Result;

	/**
	 * Visit a parse tree produced by `XPathParser.equalityExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualityExpr?: (ctx: EqualityExprContext) => Result;

	/**
	 * Visit a parse tree produced by `XPathParser.relationalExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationalExpr?: (ctx: RelationalExprContext) => Result;

	/**
	 * Visit a parse tree produced by `XPathParser.additiveExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveExpr?: (ctx: AdditiveExprContext) => Result;

	/**
	 * Visit a parse tree produced by `XPathParser.multiplicativeExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeExpr?: (ctx: MultiplicativeExprContext) => Result;

	/**
	 * Visit a parse tree produced by `XPathParser.unaryExprNoRoot`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryExprNoRoot?: (ctx: UnaryExprNoRootContext) => Result;

	/**
	 * Visit a parse tree produced by `XPathParser.qName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQName?: (ctx: QNameContext) => Result;

	/**
	 * Visit a parse tree produced by `XPathParser.functionName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionName?: (ctx: FunctionNameContext) => Result;

	/**
	 * Visit a parse tree produced by `XPathParser.variableReference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableReference?: (ctx: VariableReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by `XPathParser.nameTest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameTest?: (ctx: NameTestContext) => Result;

	/**
	 * Visit a parse tree produced by `XPathParser.nCName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNCName?: (ctx: NCNameContext) => Result;
}

