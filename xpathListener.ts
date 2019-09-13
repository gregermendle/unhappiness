// Generated from ./XPath.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `XPathParser`.
 */
export interface XPathListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `XPathParser.main`.
	 * @param ctx the parse tree
	 */
	enterMain?: (ctx: MainContext) => void;
	/**
	 * Exit a parse tree produced by `XPathParser.main`.
	 * @param ctx the parse tree
	 */
	exitMain?: (ctx: MainContext) => void;

	/**
	 * Enter a parse tree produced by `XPathParser.locationPath`.
	 * @param ctx the parse tree
	 */
	enterLocationPath?: (ctx: LocationPathContext) => void;
	/**
	 * Exit a parse tree produced by `XPathParser.locationPath`.
	 * @param ctx the parse tree
	 */
	exitLocationPath?: (ctx: LocationPathContext) => void;

	/**
	 * Enter a parse tree produced by `XPathParser.absoluteLocationPathNoroot`.
	 * @param ctx the parse tree
	 */
	enterAbsoluteLocationPathNoroot?: (ctx: AbsoluteLocationPathNorootContext) => void;
	/**
	 * Exit a parse tree produced by `XPathParser.absoluteLocationPathNoroot`.
	 * @param ctx the parse tree
	 */
	exitAbsoluteLocationPathNoroot?: (ctx: AbsoluteLocationPathNorootContext) => void;

	/**
	 * Enter a parse tree produced by `XPathParser.relativeLocationPath`.
	 * @param ctx the parse tree
	 */
	enterRelativeLocationPath?: (ctx: RelativeLocationPathContext) => void;
	/**
	 * Exit a parse tree produced by `XPathParser.relativeLocationPath`.
	 * @param ctx the parse tree
	 */
	exitRelativeLocationPath?: (ctx: RelativeLocationPathContext) => void;

	/**
	 * Enter a parse tree produced by `XPathParser.step`.
	 * @param ctx the parse tree
	 */
	enterStep?: (ctx: StepContext) => void;
	/**
	 * Exit a parse tree produced by `XPathParser.step`.
	 * @param ctx the parse tree
	 */
	exitStep?: (ctx: StepContext) => void;

	/**
	 * Enter a parse tree produced by `XPathParser.axisSpecifier`.
	 * @param ctx the parse tree
	 */
	enterAxisSpecifier?: (ctx: AxisSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `XPathParser.axisSpecifier`.
	 * @param ctx the parse tree
	 */
	exitAxisSpecifier?: (ctx: AxisSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `XPathParser.nodeTest`.
	 * @param ctx the parse tree
	 */
	enterNodeTest?: (ctx: NodeTestContext) => void;
	/**
	 * Exit a parse tree produced by `XPathParser.nodeTest`.
	 * @param ctx the parse tree
	 */
	exitNodeTest?: (ctx: NodeTestContext) => void;

	/**
	 * Enter a parse tree produced by `XPathParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterPredicate?: (ctx: PredicateContext) => void;
	/**
	 * Exit a parse tree produced by `XPathParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitPredicate?: (ctx: PredicateContext) => void;

	/**
	 * Enter a parse tree produced by `XPathParser.abbreviatedStep`.
	 * @param ctx the parse tree
	 */
	enterAbbreviatedStep?: (ctx: AbbreviatedStepContext) => void;
	/**
	 * Exit a parse tree produced by `XPathParser.abbreviatedStep`.
	 * @param ctx the parse tree
	 */
	exitAbbreviatedStep?: (ctx: AbbreviatedStepContext) => void;

	/**
	 * Enter a parse tree produced by `XPathParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `XPathParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `XPathParser.primaryExpr`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExpr?: (ctx: PrimaryExprContext) => void;
	/**
	 * Exit a parse tree produced by `XPathParser.primaryExpr`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExpr?: (ctx: PrimaryExprContext) => void;

	/**
	 * Enter a parse tree produced by `XPathParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `XPathParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by `XPathParser.unionExprNoRoot`.
	 * @param ctx the parse tree
	 */
	enterUnionExprNoRoot?: (ctx: UnionExprNoRootContext) => void;
	/**
	 * Exit a parse tree produced by `XPathParser.unionExprNoRoot`.
	 * @param ctx the parse tree
	 */
	exitUnionExprNoRoot?: (ctx: UnionExprNoRootContext) => void;

	/**
	 * Enter a parse tree produced by `XPathParser.pathExprNoRoot`.
	 * @param ctx the parse tree
	 */
	enterPathExprNoRoot?: (ctx: PathExprNoRootContext) => void;
	/**
	 * Exit a parse tree produced by `XPathParser.pathExprNoRoot`.
	 * @param ctx the parse tree
	 */
	exitPathExprNoRoot?: (ctx: PathExprNoRootContext) => void;

	/**
	 * Enter a parse tree produced by `XPathParser.filterExpr`.
	 * @param ctx the parse tree
	 */
	enterFilterExpr?: (ctx: FilterExprContext) => void;
	/**
	 * Exit a parse tree produced by `XPathParser.filterExpr`.
	 * @param ctx the parse tree
	 */
	exitFilterExpr?: (ctx: FilterExprContext) => void;

	/**
	 * Enter a parse tree produced by `XPathParser.orExpr`.
	 * @param ctx the parse tree
	 */
	enterOrExpr?: (ctx: OrExprContext) => void;
	/**
	 * Exit a parse tree produced by `XPathParser.orExpr`.
	 * @param ctx the parse tree
	 */
	exitOrExpr?: (ctx: OrExprContext) => void;

	/**
	 * Enter a parse tree produced by `XPathParser.andExpr`.
	 * @param ctx the parse tree
	 */
	enterAndExpr?: (ctx: AndExprContext) => void;
	/**
	 * Exit a parse tree produced by `XPathParser.andExpr`.
	 * @param ctx the parse tree
	 */
	exitAndExpr?: (ctx: AndExprContext) => void;

	/**
	 * Enter a parse tree produced by `XPathParser.equalityExpr`.
	 * @param ctx the parse tree
	 */
	enterEqualityExpr?: (ctx: EqualityExprContext) => void;
	/**
	 * Exit a parse tree produced by `XPathParser.equalityExpr`.
	 * @param ctx the parse tree
	 */
	exitEqualityExpr?: (ctx: EqualityExprContext) => void;

	/**
	 * Enter a parse tree produced by `XPathParser.relationalExpr`.
	 * @param ctx the parse tree
	 */
	enterRelationalExpr?: (ctx: RelationalExprContext) => void;
	/**
	 * Exit a parse tree produced by `XPathParser.relationalExpr`.
	 * @param ctx the parse tree
	 */
	exitRelationalExpr?: (ctx: RelationalExprContext) => void;

	/**
	 * Enter a parse tree produced by `XPathParser.additiveExpr`.
	 * @param ctx the parse tree
	 */
	enterAdditiveExpr?: (ctx: AdditiveExprContext) => void;
	/**
	 * Exit a parse tree produced by `XPathParser.additiveExpr`.
	 * @param ctx the parse tree
	 */
	exitAdditiveExpr?: (ctx: AdditiveExprContext) => void;

	/**
	 * Enter a parse tree produced by `XPathParser.multiplicativeExpr`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeExpr?: (ctx: MultiplicativeExprContext) => void;
	/**
	 * Exit a parse tree produced by `XPathParser.multiplicativeExpr`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeExpr?: (ctx: MultiplicativeExprContext) => void;

	/**
	 * Enter a parse tree produced by `XPathParser.unaryExprNoRoot`.
	 * @param ctx the parse tree
	 */
	enterUnaryExprNoRoot?: (ctx: UnaryExprNoRootContext) => void;
	/**
	 * Exit a parse tree produced by `XPathParser.unaryExprNoRoot`.
	 * @param ctx the parse tree
	 */
	exitUnaryExprNoRoot?: (ctx: UnaryExprNoRootContext) => void;

	/**
	 * Enter a parse tree produced by `XPathParser.qName`.
	 * @param ctx the parse tree
	 */
	enterQName?: (ctx: QNameContext) => void;
	/**
	 * Exit a parse tree produced by `XPathParser.qName`.
	 * @param ctx the parse tree
	 */
	exitQName?: (ctx: QNameContext) => void;

	/**
	 * Enter a parse tree produced by `XPathParser.functionName`.
	 * @param ctx the parse tree
	 */
	enterFunctionName?: (ctx: FunctionNameContext) => void;
	/**
	 * Exit a parse tree produced by `XPathParser.functionName`.
	 * @param ctx the parse tree
	 */
	exitFunctionName?: (ctx: FunctionNameContext) => void;

	/**
	 * Enter a parse tree produced by `XPathParser.variableReference`.
	 * @param ctx the parse tree
	 */
	enterVariableReference?: (ctx: VariableReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `XPathParser.variableReference`.
	 * @param ctx the parse tree
	 */
	exitVariableReference?: (ctx: VariableReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `XPathParser.nameTest`.
	 * @param ctx the parse tree
	 */
	enterNameTest?: (ctx: NameTestContext) => void;
	/**
	 * Exit a parse tree produced by `XPathParser.nameTest`.
	 * @param ctx the parse tree
	 */
	exitNameTest?: (ctx: NameTestContext) => void;

	/**
	 * Enter a parse tree produced by `XPathParser.nCName`.
	 * @param ctx the parse tree
	 */
	enterNCName?: (ctx: NCNameContext) => void;
	/**
	 * Exit a parse tree produced by `XPathParser.nCName`.
	 * @param ctx the parse tree
	 */
	exitNCName?: (ctx: NCNameContext) => void;
}

