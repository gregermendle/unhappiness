// Generated from xpath.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { MainContext } from "./xpathParser";
import { LocationPathContext } from "./xpathParser";
import { AbsoluteLocationPathNorootContext } from "./xpathParser";
import { RelativeLocationPathContext } from "./xpathParser";
import { StepContext } from "./xpathParser";
import { AxisSpecifierContext } from "./xpathParser";
import { NodeTestContext } from "./xpathParser";
import { PredicateContext } from "./xpathParser";
import { AbbreviatedStepContext } from "./xpathParser";
import { ExprContext } from "./xpathParser";
import { PrimaryExprContext } from "./xpathParser";
import { FunctionCallContext } from "./xpathParser";
import { UnionExprNoRootContext } from "./xpathParser";
import { PathExprNoRootContext } from "./xpathParser";
import { FilterExprContext } from "./xpathParser";
import { OrExprContext } from "./xpathParser";
import { AndExprContext } from "./xpathParser";
import { EqualityExprContext } from "./xpathParser";
import { RelationalExprContext } from "./xpathParser";
import { AdditiveExprContext } from "./xpathParser";
import { MultiplicativeExprContext } from "./xpathParser";
import { UnaryExprNoRootContext } from "./xpathParser";
import { QNameContext } from "./xpathParser";
import { FunctionNameContext } from "./xpathParser";
import { VariableReferenceContext } from "./xpathParser";
import { NameTestContext } from "./xpathParser";
import { NCNameContext } from "./xpathParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `xpathParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface xpathVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `xpathParser.main`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMain?: (ctx: MainContext) => Result;

	/**
	 * Visit a parse tree produced by `xpathParser.locationPath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocationPath?: (ctx: LocationPathContext) => Result;

	/**
	 * Visit a parse tree produced by `xpathParser.absoluteLocationPathNoroot`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbsoluteLocationPathNoroot?: (ctx: AbsoluteLocationPathNorootContext) => Result;

	/**
	 * Visit a parse tree produced by `xpathParser.relativeLocationPath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelativeLocationPath?: (ctx: RelativeLocationPathContext) => Result;

	/**
	 * Visit a parse tree produced by `xpathParser.step`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStep?: (ctx: StepContext) => Result;

	/**
	 * Visit a parse tree produced by `xpathParser.axisSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAxisSpecifier?: (ctx: AxisSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `xpathParser.nodeTest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNodeTest?: (ctx: NodeTestContext) => Result;

	/**
	 * Visit a parse tree produced by `xpathParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicate?: (ctx: PredicateContext) => Result;

	/**
	 * Visit a parse tree produced by `xpathParser.abbreviatedStep`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbbreviatedStep?: (ctx: AbbreviatedStepContext) => Result;

	/**
	 * Visit a parse tree produced by `xpathParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `xpathParser.primaryExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpr?: (ctx: PrimaryExprContext) => Result;

	/**
	 * Visit a parse tree produced by `xpathParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by `xpathParser.unionExprNoRoot`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionExprNoRoot?: (ctx: UnionExprNoRootContext) => Result;

	/**
	 * Visit a parse tree produced by `xpathParser.pathExprNoRoot`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPathExprNoRoot?: (ctx: PathExprNoRootContext) => Result;

	/**
	 * Visit a parse tree produced by `xpathParser.filterExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFilterExpr?: (ctx: FilterExprContext) => Result;

	/**
	 * Visit a parse tree produced by `xpathParser.orExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrExpr?: (ctx: OrExprContext) => Result;

	/**
	 * Visit a parse tree produced by `xpathParser.andExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndExpr?: (ctx: AndExprContext) => Result;

	/**
	 * Visit a parse tree produced by `xpathParser.equalityExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualityExpr?: (ctx: EqualityExprContext) => Result;

	/**
	 * Visit a parse tree produced by `xpathParser.relationalExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationalExpr?: (ctx: RelationalExprContext) => Result;

	/**
	 * Visit a parse tree produced by `xpathParser.additiveExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveExpr?: (ctx: AdditiveExprContext) => Result;

	/**
	 * Visit a parse tree produced by `xpathParser.multiplicativeExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeExpr?: (ctx: MultiplicativeExprContext) => Result;

	/**
	 * Visit a parse tree produced by `xpathParser.unaryExprNoRoot`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryExprNoRoot?: (ctx: UnaryExprNoRootContext) => Result;

	/**
	 * Visit a parse tree produced by `xpathParser.qName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQName?: (ctx: QNameContext) => Result;

	/**
	 * Visit a parse tree produced by `xpathParser.functionName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionName?: (ctx: FunctionNameContext) => Result;

	/**
	 * Visit a parse tree produced by `xpathParser.variableReference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableReference?: (ctx: VariableReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by `xpathParser.nameTest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameTest?: (ctx: NameTestContext) => Result;

	/**
	 * Visit a parse tree produced by `xpathParser.nCName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNCName?: (ctx: NCNameContext) => Result;
}

