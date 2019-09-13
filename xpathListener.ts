// Generated from xpath.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `xpathParser`.
 */
export interface xpathListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `xpathParser.main`.
	 * @param ctx the parse tree
	 */
	enterMain?: (ctx: MainContext) => void;
	/**
	 * Exit a parse tree produced by `xpathParser.main`.
	 * @param ctx the parse tree
	 */
	exitMain?: (ctx: MainContext) => void;

	/**
	 * Enter a parse tree produced by `xpathParser.locationPath`.
	 * @param ctx the parse tree
	 */
	enterLocationPath?: (ctx: LocationPathContext) => void;
	/**
	 * Exit a parse tree produced by `xpathParser.locationPath`.
	 * @param ctx the parse tree
	 */
	exitLocationPath?: (ctx: LocationPathContext) => void;

	/**
	 * Enter a parse tree produced by `xpathParser.absoluteLocationPathNoroot`.
	 * @param ctx the parse tree
	 */
	enterAbsoluteLocationPathNoroot?: (ctx: AbsoluteLocationPathNorootContext) => void;
	/**
	 * Exit a parse tree produced by `xpathParser.absoluteLocationPathNoroot`.
	 * @param ctx the parse tree
	 */
	exitAbsoluteLocationPathNoroot?: (ctx: AbsoluteLocationPathNorootContext) => void;

	/**
	 * Enter a parse tree produced by `xpathParser.relativeLocationPath`.
	 * @param ctx the parse tree
	 */
	enterRelativeLocationPath?: (ctx: RelativeLocationPathContext) => void;
	/**
	 * Exit a parse tree produced by `xpathParser.relativeLocationPath`.
	 * @param ctx the parse tree
	 */
	exitRelativeLocationPath?: (ctx: RelativeLocationPathContext) => void;

	/**
	 * Enter a parse tree produced by `xpathParser.step`.
	 * @param ctx the parse tree
	 */
	enterStep?: (ctx: StepContext) => void;
	/**
	 * Exit a parse tree produced by `xpathParser.step`.
	 * @param ctx the parse tree
	 */
	exitStep?: (ctx: StepContext) => void;

	/**
	 * Enter a parse tree produced by `xpathParser.axisSpecifier`.
	 * @param ctx the parse tree
	 */
	enterAxisSpecifier?: (ctx: AxisSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `xpathParser.axisSpecifier`.
	 * @param ctx the parse tree
	 */
	exitAxisSpecifier?: (ctx: AxisSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `xpathParser.nodeTest`.
	 * @param ctx the parse tree
	 */
	enterNodeTest?: (ctx: NodeTestContext) => void;
	/**
	 * Exit a parse tree produced by `xpathParser.nodeTest`.
	 * @param ctx the parse tree
	 */
	exitNodeTest?: (ctx: NodeTestContext) => void;

	/**
	 * Enter a parse tree produced by `xpathParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterPredicate?: (ctx: PredicateContext) => void;
	/**
	 * Exit a parse tree produced by `xpathParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitPredicate?: (ctx: PredicateContext) => void;

	/**
	 * Enter a parse tree produced by `xpathParser.abbreviatedStep`.
	 * @param ctx the parse tree
	 */
	enterAbbreviatedStep?: (ctx: AbbreviatedStepContext) => void;
	/**
	 * Exit a parse tree produced by `xpathParser.abbreviatedStep`.
	 * @param ctx the parse tree
	 */
	exitAbbreviatedStep?: (ctx: AbbreviatedStepContext) => void;

	/**
	 * Enter a parse tree produced by `xpathParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `xpathParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `xpathParser.primaryExpr`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExpr?: (ctx: PrimaryExprContext) => void;
	/**
	 * Exit a parse tree produced by `xpathParser.primaryExpr`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExpr?: (ctx: PrimaryExprContext) => void;

	/**
	 * Enter a parse tree produced by `xpathParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `xpathParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by `xpathParser.unionExprNoRoot`.
	 * @param ctx the parse tree
	 */
	enterUnionExprNoRoot?: (ctx: UnionExprNoRootContext) => void;
	/**
	 * Exit a parse tree produced by `xpathParser.unionExprNoRoot`.
	 * @param ctx the parse tree
	 */
	exitUnionExprNoRoot?: (ctx: UnionExprNoRootContext) => void;

	/**
	 * Enter a parse tree produced by `xpathParser.pathExprNoRoot`.
	 * @param ctx the parse tree
	 */
	enterPathExprNoRoot?: (ctx: PathExprNoRootContext) => void;
	/**
	 * Exit a parse tree produced by `xpathParser.pathExprNoRoot`.
	 * @param ctx the parse tree
	 */
	exitPathExprNoRoot?: (ctx: PathExprNoRootContext) => void;

	/**
	 * Enter a parse tree produced by `xpathParser.filterExpr`.
	 * @param ctx the parse tree
	 */
	enterFilterExpr?: (ctx: FilterExprContext) => void;
	/**
	 * Exit a parse tree produced by `xpathParser.filterExpr`.
	 * @param ctx the parse tree
	 */
	exitFilterExpr?: (ctx: FilterExprContext) => void;

	/**
	 * Enter a parse tree produced by `xpathParser.orExpr`.
	 * @param ctx the parse tree
	 */
	enterOrExpr?: (ctx: OrExprContext) => void;
	/**
	 * Exit a parse tree produced by `xpathParser.orExpr`.
	 * @param ctx the parse tree
	 */
	exitOrExpr?: (ctx: OrExprContext) => void;

	/**
	 * Enter a parse tree produced by `xpathParser.andExpr`.
	 * @param ctx the parse tree
	 */
	enterAndExpr?: (ctx: AndExprContext) => void;
	/**
	 * Exit a parse tree produced by `xpathParser.andExpr`.
	 * @param ctx the parse tree
	 */
	exitAndExpr?: (ctx: AndExprContext) => void;

	/**
	 * Enter a parse tree produced by `xpathParser.equalityExpr`.
	 * @param ctx the parse tree
	 */
	enterEqualityExpr?: (ctx: EqualityExprContext) => void;
	/**
	 * Exit a parse tree produced by `xpathParser.equalityExpr`.
	 * @param ctx the parse tree
	 */
	exitEqualityExpr?: (ctx: EqualityExprContext) => void;

	/**
	 * Enter a parse tree produced by `xpathParser.relationalExpr`.
	 * @param ctx the parse tree
	 */
	enterRelationalExpr?: (ctx: RelationalExprContext) => void;
	/**
	 * Exit a parse tree produced by `xpathParser.relationalExpr`.
	 * @param ctx the parse tree
	 */
	exitRelationalExpr?: (ctx: RelationalExprContext) => void;

	/**
	 * Enter a parse tree produced by `xpathParser.additiveExpr`.
	 * @param ctx the parse tree
	 */
	enterAdditiveExpr?: (ctx: AdditiveExprContext) => void;
	/**
	 * Exit a parse tree produced by `xpathParser.additiveExpr`.
	 * @param ctx the parse tree
	 */
	exitAdditiveExpr?: (ctx: AdditiveExprContext) => void;

	/**
	 * Enter a parse tree produced by `xpathParser.multiplicativeExpr`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeExpr?: (ctx: MultiplicativeExprContext) => void;
	/**
	 * Exit a parse tree produced by `xpathParser.multiplicativeExpr`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeExpr?: (ctx: MultiplicativeExprContext) => void;

	/**
	 * Enter a parse tree produced by `xpathParser.unaryExprNoRoot`.
	 * @param ctx the parse tree
	 */
	enterUnaryExprNoRoot?: (ctx: UnaryExprNoRootContext) => void;
	/**
	 * Exit a parse tree produced by `xpathParser.unaryExprNoRoot`.
	 * @param ctx the parse tree
	 */
	exitUnaryExprNoRoot?: (ctx: UnaryExprNoRootContext) => void;

	/**
	 * Enter a parse tree produced by `xpathParser.qName`.
	 * @param ctx the parse tree
	 */
	enterQName?: (ctx: QNameContext) => void;
	/**
	 * Exit a parse tree produced by `xpathParser.qName`.
	 * @param ctx the parse tree
	 */
	exitQName?: (ctx: QNameContext) => void;

	/**
	 * Enter a parse tree produced by `xpathParser.functionName`.
	 * @param ctx the parse tree
	 */
	enterFunctionName?: (ctx: FunctionNameContext) => void;
	/**
	 * Exit a parse tree produced by `xpathParser.functionName`.
	 * @param ctx the parse tree
	 */
	exitFunctionName?: (ctx: FunctionNameContext) => void;

	/**
	 * Enter a parse tree produced by `xpathParser.variableReference`.
	 * @param ctx the parse tree
	 */
	enterVariableReference?: (ctx: VariableReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `xpathParser.variableReference`.
	 * @param ctx the parse tree
	 */
	exitVariableReference?: (ctx: VariableReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `xpathParser.nameTest`.
	 * @param ctx the parse tree
	 */
	enterNameTest?: (ctx: NameTestContext) => void;
	/**
	 * Exit a parse tree produced by `xpathParser.nameTest`.
	 * @param ctx the parse tree
	 */
	exitNameTest?: (ctx: NameTestContext) => void;

	/**
	 * Enter a parse tree produced by `xpathParser.nCName`.
	 * @param ctx the parse tree
	 */
	enterNCName?: (ctx: NCNameContext) => void;
	/**
	 * Exit a parse tree produced by `xpathParser.nCName`.
	 * @param ctx the parse tree
	 */
	exitNCName?: (ctx: NCNameContext) => void;
}

