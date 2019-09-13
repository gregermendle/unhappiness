// Generated from ./XPath.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { XPathListener } from "./XPathListener";
import { XPathVisitor } from "./XPathVisitor";


export class XPathParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly NodeType = 9;
	public static readonly Number = 10;
	public static readonly AxisName = 11;
	public static readonly PATHSEP = 12;
	public static readonly ABRPATH = 13;
	public static readonly LPAR = 14;
	public static readonly RPAR = 15;
	public static readonly LBRAC = 16;
	public static readonly RBRAC = 17;
	public static readonly MINUS = 18;
	public static readonly PLUS = 19;
	public static readonly DOT = 20;
	public static readonly MUL = 21;
	public static readonly DOTDOT = 22;
	public static readonly AT = 23;
	public static readonly COMMA = 24;
	public static readonly PIPE = 25;
	public static readonly LESS = 26;
	public static readonly MORE_ = 27;
	public static readonly LE = 28;
	public static readonly GE = 29;
	public static readonly COLON = 30;
	public static readonly CC = 31;
	public static readonly APOS = 32;
	public static readonly QUOT = 33;
	public static readonly Literal = 34;
	public static readonly Whitespace = 35;
	public static readonly NCName = 36;
	public static readonly RULE_main = 0;
	public static readonly RULE_locationPath = 1;
	public static readonly RULE_absoluteLocationPathNoroot = 2;
	public static readonly RULE_relativeLocationPath = 3;
	public static readonly RULE_step = 4;
	public static readonly RULE_axisSpecifier = 5;
	public static readonly RULE_nodeTest = 6;
	public static readonly RULE_predicate = 7;
	public static readonly RULE_abbreviatedStep = 8;
	public static readonly RULE_expr = 9;
	public static readonly RULE_primaryExpr = 10;
	public static readonly RULE_functionCall = 11;
	public static readonly RULE_unionExprNoRoot = 12;
	public static readonly RULE_pathExprNoRoot = 13;
	public static readonly RULE_filterExpr = 14;
	public static readonly RULE_orExpr = 15;
	public static readonly RULE_andExpr = 16;
	public static readonly RULE_equalityExpr = 17;
	public static readonly RULE_relationalExpr = 18;
	public static readonly RULE_additiveExpr = 19;
	public static readonly RULE_multiplicativeExpr = 20;
	public static readonly RULE_unaryExprNoRoot = 21;
	public static readonly RULE_qName = 22;
	public static readonly RULE_functionName = 23;
	public static readonly RULE_variableReference = 24;
	public static readonly RULE_nameTest = 25;
	public static readonly RULE_nCName = 26;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"main", "locationPath", "absoluteLocationPathNoroot", "relativeLocationPath", 
		"step", "axisSpecifier", "nodeTest", "predicate", "abbreviatedStep", "expr", 
		"primaryExpr", "functionCall", "unionExprNoRoot", "pathExprNoRoot", "filterExpr", 
		"orExpr", "andExpr", "equalityExpr", "relationalExpr", "additiveExpr", 
		"multiplicativeExpr", "unaryExprNoRoot", "qName", "functionName", "variableReference", 
		"nameTest", "nCName",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'processing-instruction'", "'or'", "'and'", "'='", "'!='", 
		"'div'", "'mod'", "'$'", undefined, undefined, undefined, "'/'", "'//'", 
		"'('", "')'", "'['", "']'", "'-'", "'+'", "'.'", "'*'", "'..'", "'@'", 
		"','", "'|'", "'<'", "'>'", "'<='", "'>='", "':'", "'::'", "'''", "'\"'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "NodeType", "Number", "AxisName", "PATHSEP", "ABRPATH", 
		"LPAR", "RPAR", "LBRAC", "RBRAC", "MINUS", "PLUS", "DOT", "MUL", "DOTDOT", 
		"AT", "COMMA", "PIPE", "LESS", "MORE_", "LE", "GE", "COLON", "CC", "APOS", 
		"QUOT", "Literal", "Whitespace", "NCName",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(XPathParser._LITERAL_NAMES, XPathParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return XPathParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "XPath.g4"; }

	// @Override
	public get ruleNames(): string[] { return XPathParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return XPathParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(XPathParser._ATN, this);
	}
	// @RuleVersion(0)
	public main(): MainContext {
		let _localctx: MainContext = new MainContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, XPathParser.RULE_main);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 54;
			this.expr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public locationPath(): LocationPathContext {
		let _localctx: LocationPathContext = new LocationPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, XPathParser.RULE_locationPath);
		try {
			this.state = 58;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XPathParser.T__0:
			case XPathParser.NodeType:
			case XPathParser.AxisName:
			case XPathParser.DOT:
			case XPathParser.MUL:
			case XPathParser.DOTDOT:
			case XPathParser.AT:
			case XPathParser.NCName:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 56;
				this.relativeLocationPath();
				}
				break;
			case XPathParser.PATHSEP:
			case XPathParser.ABRPATH:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 57;
				this.absoluteLocationPathNoroot();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public absoluteLocationPathNoroot(): AbsoluteLocationPathNorootContext {
		let _localctx: AbsoluteLocationPathNorootContext = new AbsoluteLocationPathNorootContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, XPathParser.RULE_absoluteLocationPathNoroot);
		try {
			this.state = 64;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XPathParser.PATHSEP:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 60;
				this.match(XPathParser.PATHSEP);
				this.state = 61;
				this.relativeLocationPath();
				}
				break;
			case XPathParser.ABRPATH:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 62;
				this.match(XPathParser.ABRPATH);
				this.state = 63;
				this.relativeLocationPath();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public relativeLocationPath(): RelativeLocationPathContext {
		let _localctx: RelativeLocationPathContext = new RelativeLocationPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, XPathParser.RULE_relativeLocationPath);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 66;
			this.step();
			this.state = 71;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XPathParser.PATHSEP || _la === XPathParser.ABRPATH) {
				{
				{
				this.state = 67;
				_la = this._input.LA(1);
				if (!(_la === XPathParser.PATHSEP || _la === XPathParser.ABRPATH)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 68;
				this.step();
				}
				}
				this.state = 73;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public step(): StepContext {
		let _localctx: StepContext = new StepContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, XPathParser.RULE_step);
		let _la: number;
		try {
			this.state = 83;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XPathParser.T__0:
			case XPathParser.NodeType:
			case XPathParser.AxisName:
			case XPathParser.MUL:
			case XPathParser.AT:
			case XPathParser.NCName:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 74;
				this.axisSpecifier();
				this.state = 75;
				this.nodeTest();
				this.state = 79;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XPathParser.LBRAC) {
					{
					{
					this.state = 76;
					this.predicate();
					}
					}
					this.state = 81;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case XPathParser.DOT:
			case XPathParser.DOTDOT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 82;
				this.abbreviatedStep();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public axisSpecifier(): AxisSpecifierContext {
		let _localctx: AxisSpecifierContext = new AxisSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, XPathParser.RULE_axisSpecifier);
		let _la: number;
		try {
			this.state = 90;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 85;
				this.match(XPathParser.AxisName);
				this.state = 86;
				this.match(XPathParser.CC);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 88;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XPathParser.AT) {
					{
					this.state = 87;
					this.match(XPathParser.AT);
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nodeTest(): NodeTestContext {
		let _localctx: NodeTestContext = new NodeTestContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, XPathParser.RULE_nodeTest);
		try {
			this.state = 100;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 92;
				this.nameTest();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 93;
				this.match(XPathParser.NodeType);
				this.state = 94;
				this.match(XPathParser.LPAR);
				this.state = 95;
				this.match(XPathParser.RPAR);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 96;
				this.match(XPathParser.T__0);
				this.state = 97;
				this.match(XPathParser.LPAR);
				this.state = 98;
				this.match(XPathParser.Literal);
				this.state = 99;
				this.match(XPathParser.RPAR);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public predicate(): PredicateContext {
		let _localctx: PredicateContext = new PredicateContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, XPathParser.RULE_predicate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			this.match(XPathParser.LBRAC);
			this.state = 103;
			this.expr();
			this.state = 104;
			this.match(XPathParser.RBRAC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public abbreviatedStep(): AbbreviatedStepContext {
		let _localctx: AbbreviatedStepContext = new AbbreviatedStepContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, XPathParser.RULE_abbreviatedStep);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 106;
			_la = this._input.LA(1);
			if (!(_la === XPathParser.DOT || _la === XPathParser.DOTDOT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr(): ExprContext {
		let _localctx: ExprContext = new ExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, XPathParser.RULE_expr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 108;
			this.orExpr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryExpr(): PrimaryExprContext {
		let _localctx: PrimaryExprContext = new PrimaryExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, XPathParser.RULE_primaryExpr);
		try {
			this.state = 118;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XPathParser.T__7:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 110;
				this.variableReference();
				}
				break;
			case XPathParser.LPAR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 111;
				this.match(XPathParser.LPAR);
				this.state = 112;
				this.expr();
				this.state = 113;
				this.match(XPathParser.RPAR);
				}
				break;
			case XPathParser.Literal:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 115;
				this.match(XPathParser.Literal);
				}
				break;
			case XPathParser.Number:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 116;
				this.match(XPathParser.Number);
				}
				break;
			case XPathParser.NodeType:
			case XPathParser.AxisName:
			case XPathParser.NCName:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 117;
				this.functionCall();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, XPathParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 120;
			this.functionName();
			this.state = 121;
			this.match(XPathParser.LPAR);
			this.state = 130;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XPathParser.T__0) | (1 << XPathParser.T__7) | (1 << XPathParser.NodeType) | (1 << XPathParser.Number) | (1 << XPathParser.AxisName) | (1 << XPathParser.PATHSEP) | (1 << XPathParser.ABRPATH) | (1 << XPathParser.LPAR) | (1 << XPathParser.MINUS) | (1 << XPathParser.DOT) | (1 << XPathParser.MUL) | (1 << XPathParser.DOTDOT) | (1 << XPathParser.AT))) !== 0) || _la === XPathParser.Literal || _la === XPathParser.NCName) {
				{
				this.state = 122;
				this.expr();
				this.state = 127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XPathParser.COMMA) {
					{
					{
					this.state = 123;
					this.match(XPathParser.COMMA);
					this.state = 124;
					this.expr();
					}
					}
					this.state = 129;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 132;
			this.match(XPathParser.RPAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unionExprNoRoot(): UnionExprNoRootContext {
		let _localctx: UnionExprNoRootContext = new UnionExprNoRootContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, XPathParser.RULE_unionExprNoRoot);
		let _la: number;
		try {
			this.state = 142;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 134;
				this.pathExprNoRoot();
				this.state = 137;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XPathParser.PIPE) {
					{
					this.state = 135;
					this.match(XPathParser.PIPE);
					this.state = 136;
					this.unionExprNoRoot();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 139;
				this.match(XPathParser.PATHSEP);
				this.state = 140;
				this.match(XPathParser.PIPE);
				this.state = 141;
				this.unionExprNoRoot();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pathExprNoRoot(): PathExprNoRootContext {
		let _localctx: PathExprNoRootContext = new PathExprNoRootContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, XPathParser.RULE_pathExprNoRoot);
		let _la: number;
		try {
			this.state = 150;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 144;
				this.locationPath();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 145;
				this.filterExpr();
				this.state = 148;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XPathParser.PATHSEP || _la === XPathParser.ABRPATH) {
					{
					this.state = 146;
					_la = this._input.LA(1);
					if (!(_la === XPathParser.PATHSEP || _la === XPathParser.ABRPATH)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 147;
					this.relativeLocationPath();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public filterExpr(): FilterExprContext {
		let _localctx: FilterExprContext = new FilterExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, XPathParser.RULE_filterExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 152;
			this.primaryExpr();
			this.state = 156;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XPathParser.LBRAC) {
				{
				{
				this.state = 153;
				this.predicate();
				}
				}
				this.state = 158;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public orExpr(): OrExprContext {
		let _localctx: OrExprContext = new OrExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, XPathParser.RULE_orExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 159;
			this.andExpr();
			this.state = 164;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XPathParser.T__1) {
				{
				{
				this.state = 160;
				this.match(XPathParser.T__1);
				this.state = 161;
				this.andExpr();
				}
				}
				this.state = 166;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public andExpr(): AndExprContext {
		let _localctx: AndExprContext = new AndExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, XPathParser.RULE_andExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 167;
			this.equalityExpr();
			this.state = 172;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XPathParser.T__2) {
				{
				{
				this.state = 168;
				this.match(XPathParser.T__2);
				this.state = 169;
				this.equalityExpr();
				}
				}
				this.state = 174;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public equalityExpr(): EqualityExprContext {
		let _localctx: EqualityExprContext = new EqualityExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, XPathParser.RULE_equalityExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 175;
			this.relationalExpr();
			this.state = 180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XPathParser.T__3 || _la === XPathParser.T__4) {
				{
				{
				this.state = 176;
				_la = this._input.LA(1);
				if (!(_la === XPathParser.T__3 || _la === XPathParser.T__4)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 177;
				this.relationalExpr();
				}
				}
				this.state = 182;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public relationalExpr(): RelationalExprContext {
		let _localctx: RelationalExprContext = new RelationalExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, XPathParser.RULE_relationalExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 183;
			this.additiveExpr();
			this.state = 188;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XPathParser.LESS) | (1 << XPathParser.MORE_) | (1 << XPathParser.LE) | (1 << XPathParser.GE))) !== 0)) {
				{
				{
				this.state = 184;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XPathParser.LESS) | (1 << XPathParser.MORE_) | (1 << XPathParser.LE) | (1 << XPathParser.GE))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 185;
				this.additiveExpr();
				}
				}
				this.state = 190;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public additiveExpr(): AdditiveExprContext {
		let _localctx: AdditiveExprContext = new AdditiveExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, XPathParser.RULE_additiveExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 191;
			this.multiplicativeExpr();
			this.state = 196;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XPathParser.MINUS || _la === XPathParser.PLUS) {
				{
				{
				this.state = 192;
				_la = this._input.LA(1);
				if (!(_la === XPathParser.MINUS || _la === XPathParser.PLUS)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 193;
				this.multiplicativeExpr();
				}
				}
				this.state = 198;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multiplicativeExpr(): MultiplicativeExprContext {
		let _localctx: MultiplicativeExprContext = new MultiplicativeExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, XPathParser.RULE_multiplicativeExpr);
		let _la: number;
		try {
			this.state = 209;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 199;
				this.unaryExprNoRoot();
				this.state = 202;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XPathParser.T__5) | (1 << XPathParser.T__6) | (1 << XPathParser.MUL))) !== 0)) {
					{
					this.state = 200;
					_la = this._input.LA(1);
					if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XPathParser.T__5) | (1 << XPathParser.T__6) | (1 << XPathParser.MUL))) !== 0))) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 201;
					this.multiplicativeExpr();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 204;
				this.match(XPathParser.PATHSEP);
				this.state = 207;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XPathParser.T__5 || _la === XPathParser.T__6) {
					{
					this.state = 205;
					_la = this._input.LA(1);
					if (!(_la === XPathParser.T__5 || _la === XPathParser.T__6)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 206;
					this.multiplicativeExpr();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryExprNoRoot(): UnaryExprNoRootContext {
		let _localctx: UnaryExprNoRootContext = new UnaryExprNoRootContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, XPathParser.RULE_unaryExprNoRoot);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 214;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XPathParser.MINUS) {
				{
				{
				this.state = 211;
				this.match(XPathParser.MINUS);
				}
				}
				this.state = 216;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 217;
			this.unionExprNoRoot();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qName(): QNameContext {
		let _localctx: QNameContext = new QNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, XPathParser.RULE_qName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 219;
			this.nCName();
			this.state = 222;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XPathParser.COLON) {
				{
				this.state = 220;
				this.match(XPathParser.COLON);
				this.state = 221;
				this.nCName();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionName(): FunctionNameContext {
		let _localctx: FunctionNameContext = new FunctionNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, XPathParser.RULE_functionName);
		try {
			this.state = 230;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 224;
				this.nCName();
				this.state = 225;
				this.match(XPathParser.COLON);
				this.state = 226;
				this.nCName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 228;
				this.match(XPathParser.NCName);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 229;
				this.match(XPathParser.AxisName);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableReference(): VariableReferenceContext {
		let _localctx: VariableReferenceContext = new VariableReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, XPathParser.RULE_variableReference);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 232;
			this.match(XPathParser.T__7);
			this.state = 233;
			this.qName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nameTest(): NameTestContext {
		let _localctx: NameTestContext = new NameTestContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, XPathParser.RULE_nameTest);
		try {
			this.state = 241;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 235;
				this.match(XPathParser.MUL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 236;
				this.nCName();
				this.state = 237;
				this.match(XPathParser.COLON);
				this.state = 238;
				this.match(XPathParser.MUL);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 240;
				this.qName();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nCName(): NCNameContext {
		let _localctx: NCNameContext = new NCNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, XPathParser.RULE_nCName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 243;
			_la = this._input.LA(1);
			if (!(((((_la - 9)) & ~0x1F) === 0 && ((1 << (_la - 9)) & ((1 << (XPathParser.NodeType - 9)) | (1 << (XPathParser.AxisName - 9)) | (1 << (XPathParser.NCName - 9)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03&\xF8\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x03" +
		"\x02\x03\x02\x03\x03\x03\x03\x05\x03=\n\x03\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x05\x04C\n\x04\x03\x05\x03\x05\x03\x05\x07\x05H\n\x05\f\x05\x0E\x05" +
		"K\v\x05\x03\x06\x03\x06\x03\x06\x07\x06P\n\x06\f\x06\x0E\x06S\v\x06\x03" +
		"\x06\x05\x06V\n\x06\x03\x07\x03\x07\x03\x07\x05\x07[\n\x07\x05\x07]\n" +
		"\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\bg\n\b\x03\t" +
		"\x03\t\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x05\fy\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\x80" +
		"\n\r\f\r\x0E\r\x83\v\r\x05\r\x85\n\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E" +
		"\x05\x0E\x8C\n\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\x91\n\x0E\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x05\x0F\x97\n\x0F\x05\x0F\x99\n\x0F\x03\x10\x03\x10" +
		"\x07\x10\x9D\n\x10\f\x10\x0E\x10\xA0\v\x10\x03\x11\x03\x11\x03\x11\x07" +
		"\x11\xA5\n\x11\f\x11\x0E\x11\xA8\v\x11\x03\x12\x03\x12\x03\x12\x07\x12" +
		"\xAD\n\x12\f\x12\x0E\x12\xB0\v\x12\x03\x13\x03\x13\x03\x13\x07\x13\xB5" +
		"\n\x13\f\x13\x0E\x13\xB8\v\x13\x03\x14\x03\x14\x03\x14\x07\x14\xBD\n\x14" +
		"\f\x14\x0E\x14\xC0\v\x14\x03\x15\x03\x15\x03\x15\x07\x15\xC5\n\x15\f\x15" +
		"\x0E\x15\xC8\v\x15\x03\x16\x03\x16\x03\x16\x05\x16\xCD\n\x16\x03\x16\x03" +
		"\x16\x03\x16\x05\x16\xD2\n\x16\x05\x16\xD4\n\x16\x03\x17\x07\x17\xD7\n" +
		"\x17\f\x17\x0E\x17\xDA\v\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x05" +
		"\x18\xE1\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19" +
		"\xE9\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x05\x1B\xF4\n\x1B\x03\x1C\x03\x1C\x03\x1C\x02\x02\x02\x1D" +
		"\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
		"*\x02,\x02.\x020\x022\x024\x026\x02\x02\n\x03\x02\x0E\x0F\x04\x02\x16" +
		"\x16\x18\x18\x03\x02\x06\x07\x03\x02\x1C\x1F\x03\x02\x14\x15\x04\x02\b" +
		"\t\x17\x17\x03\x02\b\t\x05\x02\v\v\r\r&&\x02\xFE\x028\x03\x02\x02\x02" +
		"\x04<\x03\x02\x02\x02\x06B\x03\x02\x02\x02\bD\x03\x02\x02\x02\nU\x03\x02" +
		"\x02\x02\f\\\x03\x02\x02\x02\x0Ef\x03\x02\x02\x02\x10h\x03\x02\x02\x02" +
		"\x12l\x03\x02\x02\x02\x14n\x03\x02\x02\x02\x16x\x03\x02\x02\x02\x18z\x03" +
		"\x02\x02\x02\x1A\x90\x03\x02\x02\x02\x1C\x98\x03\x02\x02\x02\x1E\x9A\x03" +
		"\x02\x02\x02 \xA1\x03\x02\x02\x02\"\xA9\x03\x02\x02\x02$\xB1\x03\x02\x02" +
		"\x02&\xB9\x03\x02\x02\x02(\xC1\x03\x02\x02\x02*\xD3\x03\x02\x02\x02,\xD8" +
		"\x03\x02\x02\x02.\xDD\x03\x02\x02\x020\xE8\x03\x02\x02\x022\xEA\x03\x02" +
		"\x02\x024\xF3\x03\x02\x02\x026\xF5\x03\x02\x02\x0289\x05\x14\v\x029\x03" +
		"\x03\x02\x02\x02:=\x05\b\x05\x02;=\x05\x06\x04\x02<:\x03\x02\x02\x02<" +
		";\x03\x02\x02\x02=\x05\x03\x02\x02\x02>?\x07\x0E\x02\x02?C\x05\b\x05\x02" +
		"@A\x07\x0F\x02\x02AC\x05\b\x05\x02B>\x03\x02\x02\x02B@\x03\x02\x02\x02" +
		"C\x07\x03\x02\x02\x02DI\x05\n\x06\x02EF\t\x02\x02\x02FH\x05\n\x06\x02" +
		"GE\x03\x02\x02\x02HK\x03\x02\x02\x02IG\x03\x02\x02\x02IJ\x03\x02\x02\x02" +
		"J\t\x03\x02\x02\x02KI\x03\x02\x02\x02LM\x05\f\x07\x02MQ\x05\x0E\b\x02" +
		"NP\x05\x10\t\x02ON\x03\x02\x02\x02PS\x03\x02\x02\x02QO\x03\x02\x02\x02" +
		"QR\x03\x02\x02\x02RV\x03\x02\x02\x02SQ\x03\x02\x02\x02TV\x05\x12\n\x02" +
		"UL\x03\x02\x02\x02UT\x03\x02\x02\x02V\v\x03\x02\x02\x02WX\x07\r\x02\x02" +
		"X]\x07!\x02\x02Y[\x07\x19\x02\x02ZY\x03\x02\x02\x02Z[\x03\x02\x02\x02" +
		"[]\x03\x02\x02\x02\\W\x03\x02\x02\x02\\Z\x03\x02\x02\x02]\r\x03\x02\x02" +
		"\x02^g\x054\x1B\x02_`\x07\v\x02\x02`a\x07\x10\x02\x02ag\x07\x11\x02\x02" +
		"bc\x07\x03\x02\x02cd\x07\x10\x02\x02de\x07$\x02\x02eg\x07\x11\x02\x02" +
		"f^\x03\x02\x02\x02f_\x03\x02\x02\x02fb\x03\x02\x02\x02g\x0F\x03\x02\x02" +
		"\x02hi\x07\x12\x02\x02ij\x05\x14\v\x02jk\x07\x13\x02\x02k\x11\x03\x02" +
		"\x02\x02lm\t\x03\x02\x02m\x13\x03\x02\x02\x02no\x05 \x11\x02o\x15\x03" +
		"\x02\x02\x02py\x052\x1A\x02qr\x07\x10\x02\x02rs\x05\x14\v\x02st\x07\x11" +
		"\x02\x02ty\x03\x02\x02\x02uy\x07$\x02\x02vy\x07\f\x02\x02wy\x05\x18\r" +
		"\x02xp\x03\x02\x02\x02xq\x03\x02\x02\x02xu\x03\x02\x02\x02xv\x03\x02\x02" +
		"\x02xw\x03\x02\x02\x02y\x17\x03\x02\x02\x02z{\x050\x19\x02{\x84\x07\x10" +
		"\x02\x02|\x81\x05\x14\v\x02}~\x07\x1A\x02\x02~\x80\x05\x14\v\x02\x7F}" +
		"\x03\x02\x02\x02\x80\x83\x03\x02\x02\x02\x81\x7F\x03\x02\x02\x02\x81\x82" +
		"\x03\x02\x02\x02\x82\x85\x03\x02\x02\x02\x83\x81\x03\x02\x02\x02\x84|" +
		"\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85\x86\x03\x02\x02\x02\x86\x87" +
		"\x07\x11\x02\x02\x87\x19\x03\x02\x02\x02\x88\x8B\x05\x1C\x0F\x02\x89\x8A" +
		"\x07\x1B\x02\x02\x8A\x8C\x05\x1A\x0E\x02\x8B\x89\x03\x02\x02\x02\x8B\x8C" +
		"\x03\x02\x02\x02\x8C\x91\x03\x02\x02\x02\x8D\x8E\x07\x0E\x02\x02\x8E\x8F" +
		"\x07\x1B\x02\x02\x8F\x91\x05\x1A\x0E\x02\x90\x88\x03\x02\x02\x02\x90\x8D" +
		"\x03\x02\x02\x02\x91\x1B\x03\x02\x02\x02\x92\x99\x05\x04\x03\x02\x93\x96" +
		"\x05\x1E\x10\x02\x94\x95\t\x02\x02\x02\x95\x97\x05\b\x05\x02\x96\x94\x03" +
		"\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97\x99\x03\x02\x02\x02\x98\x92\x03" +
		"\x02\x02\x02\x98\x93\x03\x02\x02\x02\x99\x1D\x03\x02\x02\x02\x9A\x9E\x05" +
		"\x16\f\x02\x9B\x9D\x05\x10\t\x02\x9C\x9B\x03\x02\x02\x02\x9D\xA0\x03\x02" +
		"\x02\x02\x9E\x9C\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F\x1F\x03\x02" +
		"\x02\x02\xA0\x9E\x03\x02\x02\x02\xA1\xA6\x05\"\x12\x02\xA2\xA3\x07\x04" +
		"\x02\x02\xA3\xA5\x05\"\x12\x02\xA4\xA2\x03\x02\x02\x02\xA5\xA8\x03\x02" +
		"\x02\x02\xA6\xA4\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7!\x03\x02" +
		"\x02\x02\xA8\xA6\x03\x02\x02\x02\xA9\xAE\x05$\x13\x02\xAA\xAB\x07\x05" +
		"\x02\x02\xAB\xAD\x05$\x13\x02\xAC\xAA\x03\x02\x02\x02\xAD\xB0\x03\x02" +
		"\x02\x02\xAE\xAC\x03\x02\x02\x02\xAE\xAF\x03\x02\x02\x02\xAF#\x03\x02" +
		"\x02\x02\xB0\xAE\x03\x02\x02\x02\xB1\xB6\x05&\x14\x02\xB2\xB3\t\x04\x02" +
		"\x02\xB3\xB5\x05&\x14\x02\xB4\xB2\x03\x02\x02\x02\xB5\xB8\x03\x02\x02" +
		"\x02\xB6\xB4\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7%\x03\x02\x02" +
		"\x02\xB8\xB6\x03\x02\x02\x02\xB9\xBE\x05(\x15\x02\xBA\xBB\t\x05\x02\x02" +
		"\xBB\xBD\x05(\x15\x02\xBC\xBA\x03\x02\x02\x02\xBD\xC0\x03\x02\x02\x02" +
		"\xBE\xBC\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\'\x03\x02\x02\x02" +
		"\xC0\xBE\x03\x02\x02\x02\xC1\xC6\x05*\x16\x02\xC2\xC3\t\x06\x02\x02\xC3" +
		"\xC5\x05*\x16\x02\xC4\xC2\x03\x02\x02\x02\xC5\xC8\x03\x02\x02\x02\xC6" +
		"\xC4\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7)\x03\x02\x02\x02\xC8" +
		"\xC6\x03\x02\x02\x02\xC9\xCC\x05,\x17\x02\xCA\xCB\t\x07\x02\x02\xCB\xCD" +
		"\x05*\x16\x02\xCC\xCA\x03\x02\x02\x02\xCC\xCD\x03\x02\x02\x02\xCD\xD4" +
		"\x03\x02\x02\x02\xCE\xD1\x07\x0E\x02\x02\xCF\xD0\t\b\x02\x02\xD0\xD2\x05" +
		"*\x16\x02\xD1\xCF\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD4\x03" +
		"\x02\x02\x02\xD3\xC9\x03\x02\x02\x02\xD3\xCE\x03\x02\x02\x02\xD4+\x03" +
		"\x02\x02\x02\xD5\xD7\x07\x14\x02\x02\xD6\xD5\x03\x02\x02\x02\xD7\xDA\x03" +
		"\x02\x02\x02\xD8\xD6\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xDB\x03" +
		"\x02\x02\x02\xDA\xD8\x03\x02\x02\x02\xDB\xDC\x05\x1A\x0E\x02\xDC-\x03" +
		"\x02\x02\x02\xDD\xE0\x056\x1C\x02\xDE\xDF\x07 \x02\x02\xDF\xE1\x056\x1C" +
		"\x02\xE0\xDE\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02\xE1/\x03\x02\x02" +
		"\x02\xE2\xE3\x056\x1C\x02\xE3\xE4\x07 \x02\x02\xE4\xE5\x056\x1C\x02\xE5" +
		"\xE9\x03\x02\x02\x02\xE6\xE9\x07&\x02\x02\xE7\xE9\x07\r\x02\x02\xE8\xE2" +
		"\x03\x02\x02\x02\xE8\xE6\x03\x02\x02\x02\xE8\xE7\x03\x02\x02\x02\xE91" +
		"\x03\x02\x02\x02\xEA\xEB\x07\n\x02\x02\xEB\xEC\x05.\x18\x02\xEC3\x03\x02" +
		"\x02\x02\xED\xF4\x07\x17\x02\x02\xEE\xEF\x056\x1C\x02\xEF\xF0\x07 \x02" +
		"\x02\xF0\xF1\x07\x17\x02\x02\xF1\xF4\x03\x02\x02\x02\xF2\xF4\x05.\x18" +
		"\x02\xF3\xED\x03\x02\x02\x02\xF3\xEE\x03\x02\x02\x02\xF3\xF2\x03\x02\x02" +
		"\x02\xF45\x03\x02\x02\x02\xF5\xF6\t\t\x02\x02\xF67\x03\x02\x02\x02\x1E" +
		"<BIQUZ\\fx\x81\x84\x8B\x90\x96\x98\x9E\xA6\xAE\xB6\xBE\xC6\xCC\xD1\xD3" +
		"\xD8\xE0\xE8\xF3";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XPathParser.__ATN) {
			XPathParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XPathParser._serializedATN));
		}

		return XPathParser.__ATN;
	}

}

export class MainContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XPathParser.RULE_main; }
	// @Override
	public enterRule(listener: XPathListener): void {
		if (listener.enterMain) {
			listener.enterMain(this);
		}
	}
	// @Override
	public exitRule(listener: XPathListener): void {
		if (listener.exitMain) {
			listener.exitMain(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XPathVisitor<Result>): Result {
		if (visitor.visitMain) {
			return visitor.visitMain(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocationPathContext extends ParserRuleContext {
	public relativeLocationPath(): RelativeLocationPathContext | undefined {
		return this.tryGetRuleContext(0, RelativeLocationPathContext);
	}
	public absoluteLocationPathNoroot(): AbsoluteLocationPathNorootContext | undefined {
		return this.tryGetRuleContext(0, AbsoluteLocationPathNorootContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XPathParser.RULE_locationPath; }
	// @Override
	public enterRule(listener: XPathListener): void {
		if (listener.enterLocationPath) {
			listener.enterLocationPath(this);
		}
	}
	// @Override
	public exitRule(listener: XPathListener): void {
		if (listener.exitLocationPath) {
			listener.exitLocationPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XPathVisitor<Result>): Result {
		if (visitor.visitLocationPath) {
			return visitor.visitLocationPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AbsoluteLocationPathNorootContext extends ParserRuleContext {
	public PATHSEP(): TerminalNode | undefined { return this.tryGetToken(XPathParser.PATHSEP, 0); }
	public relativeLocationPath(): RelativeLocationPathContext {
		return this.getRuleContext(0, RelativeLocationPathContext);
	}
	public ABRPATH(): TerminalNode | undefined { return this.tryGetToken(XPathParser.ABRPATH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XPathParser.RULE_absoluteLocationPathNoroot; }
	// @Override
	public enterRule(listener: XPathListener): void {
		if (listener.enterAbsoluteLocationPathNoroot) {
			listener.enterAbsoluteLocationPathNoroot(this);
		}
	}
	// @Override
	public exitRule(listener: XPathListener): void {
		if (listener.exitAbsoluteLocationPathNoroot) {
			listener.exitAbsoluteLocationPathNoroot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XPathVisitor<Result>): Result {
		if (visitor.visitAbsoluteLocationPathNoroot) {
			return visitor.visitAbsoluteLocationPathNoroot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelativeLocationPathContext extends ParserRuleContext {
	public step(): StepContext[];
	public step(i: number): StepContext;
	public step(i?: number): StepContext | StepContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StepContext);
		} else {
			return this.getRuleContext(i, StepContext);
		}
	}
	public PATHSEP(): TerminalNode[];
	public PATHSEP(i: number): TerminalNode;
	public PATHSEP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XPathParser.PATHSEP);
		} else {
			return this.getToken(XPathParser.PATHSEP, i);
		}
	}
	public ABRPATH(): TerminalNode[];
	public ABRPATH(i: number): TerminalNode;
	public ABRPATH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XPathParser.ABRPATH);
		} else {
			return this.getToken(XPathParser.ABRPATH, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XPathParser.RULE_relativeLocationPath; }
	// @Override
	public enterRule(listener: XPathListener): void {
		if (listener.enterRelativeLocationPath) {
			listener.enterRelativeLocationPath(this);
		}
	}
	// @Override
	public exitRule(listener: XPathListener): void {
		if (listener.exitRelativeLocationPath) {
			listener.exitRelativeLocationPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XPathVisitor<Result>): Result {
		if (visitor.visitRelativeLocationPath) {
			return visitor.visitRelativeLocationPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StepContext extends ParserRuleContext {
	public axisSpecifier(): AxisSpecifierContext | undefined {
		return this.tryGetRuleContext(0, AxisSpecifierContext);
	}
	public nodeTest(): NodeTestContext | undefined {
		return this.tryGetRuleContext(0, NodeTestContext);
	}
	public predicate(): PredicateContext[];
	public predicate(i: number): PredicateContext;
	public predicate(i?: number): PredicateContext | PredicateContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PredicateContext);
		} else {
			return this.getRuleContext(i, PredicateContext);
		}
	}
	public abbreviatedStep(): AbbreviatedStepContext | undefined {
		return this.tryGetRuleContext(0, AbbreviatedStepContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XPathParser.RULE_step; }
	// @Override
	public enterRule(listener: XPathListener): void {
		if (listener.enterStep) {
			listener.enterStep(this);
		}
	}
	// @Override
	public exitRule(listener: XPathListener): void {
		if (listener.exitStep) {
			listener.exitStep(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XPathVisitor<Result>): Result {
		if (visitor.visitStep) {
			return visitor.visitStep(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AxisSpecifierContext extends ParserRuleContext {
	public AxisName(): TerminalNode | undefined { return this.tryGetToken(XPathParser.AxisName, 0); }
	public CC(): TerminalNode | undefined { return this.tryGetToken(XPathParser.CC, 0); }
	public AT(): TerminalNode | undefined { return this.tryGetToken(XPathParser.AT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XPathParser.RULE_axisSpecifier; }
	// @Override
	public enterRule(listener: XPathListener): void {
		if (listener.enterAxisSpecifier) {
			listener.enterAxisSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: XPathListener): void {
		if (listener.exitAxisSpecifier) {
			listener.exitAxisSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XPathVisitor<Result>): Result {
		if (visitor.visitAxisSpecifier) {
			return visitor.visitAxisSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NodeTestContext extends ParserRuleContext {
	public nameTest(): NameTestContext | undefined {
		return this.tryGetRuleContext(0, NameTestContext);
	}
	public NodeType(): TerminalNode | undefined { return this.tryGetToken(XPathParser.NodeType, 0); }
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(XPathParser.LPAR, 0); }
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(XPathParser.RPAR, 0); }
	public Literal(): TerminalNode | undefined { return this.tryGetToken(XPathParser.Literal, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XPathParser.RULE_nodeTest; }
	// @Override
	public enterRule(listener: XPathListener): void {
		if (listener.enterNodeTest) {
			listener.enterNodeTest(this);
		}
	}
	// @Override
	public exitRule(listener: XPathListener): void {
		if (listener.exitNodeTest) {
			listener.exitNodeTest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XPathVisitor<Result>): Result {
		if (visitor.visitNodeTest) {
			return visitor.visitNodeTest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PredicateContext extends ParserRuleContext {
	public LBRAC(): TerminalNode { return this.getToken(XPathParser.LBRAC, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public RBRAC(): TerminalNode { return this.getToken(XPathParser.RBRAC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XPathParser.RULE_predicate; }
	// @Override
	public enterRule(listener: XPathListener): void {
		if (listener.enterPredicate) {
			listener.enterPredicate(this);
		}
	}
	// @Override
	public exitRule(listener: XPathListener): void {
		if (listener.exitPredicate) {
			listener.exitPredicate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XPathVisitor<Result>): Result {
		if (visitor.visitPredicate) {
			return visitor.visitPredicate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AbbreviatedStepContext extends ParserRuleContext {
	public DOT(): TerminalNode | undefined { return this.tryGetToken(XPathParser.DOT, 0); }
	public DOTDOT(): TerminalNode | undefined { return this.tryGetToken(XPathParser.DOTDOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XPathParser.RULE_abbreviatedStep; }
	// @Override
	public enterRule(listener: XPathListener): void {
		if (listener.enterAbbreviatedStep) {
			listener.enterAbbreviatedStep(this);
		}
	}
	// @Override
	public exitRule(listener: XPathListener): void {
		if (listener.exitAbbreviatedStep) {
			listener.exitAbbreviatedStep(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XPathVisitor<Result>): Result {
		if (visitor.visitAbbreviatedStep) {
			return visitor.visitAbbreviatedStep(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	public orExpr(): OrExprContext {
		return this.getRuleContext(0, OrExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XPathParser.RULE_expr; }
	// @Override
	public enterRule(listener: XPathListener): void {
		if (listener.enterExpr) {
			listener.enterExpr(this);
		}
	}
	// @Override
	public exitRule(listener: XPathListener): void {
		if (listener.exitExpr) {
			listener.exitExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XPathVisitor<Result>): Result {
		if (visitor.visitExpr) {
			return visitor.visitExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryExprContext extends ParserRuleContext {
	public variableReference(): VariableReferenceContext | undefined {
		return this.tryGetRuleContext(0, VariableReferenceContext);
	}
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(XPathParser.LPAR, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(XPathParser.RPAR, 0); }
	public Literal(): TerminalNode | undefined { return this.tryGetToken(XPathParser.Literal, 0); }
	public Number(): TerminalNode | undefined { return this.tryGetToken(XPathParser.Number, 0); }
	public functionCall(): FunctionCallContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XPathParser.RULE_primaryExpr; }
	// @Override
	public enterRule(listener: XPathListener): void {
		if (listener.enterPrimaryExpr) {
			listener.enterPrimaryExpr(this);
		}
	}
	// @Override
	public exitRule(listener: XPathListener): void {
		if (listener.exitPrimaryExpr) {
			listener.exitPrimaryExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XPathVisitor<Result>): Result {
		if (visitor.visitPrimaryExpr) {
			return visitor.visitPrimaryExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	public functionName(): FunctionNameContext {
		return this.getRuleContext(0, FunctionNameContext);
	}
	public LPAR(): TerminalNode { return this.getToken(XPathParser.LPAR, 0); }
	public RPAR(): TerminalNode { return this.getToken(XPathParser.RPAR, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XPathParser.COMMA);
		} else {
			return this.getToken(XPathParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XPathParser.RULE_functionCall; }
	// @Override
	public enterRule(listener: XPathListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: XPathListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XPathVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnionExprNoRootContext extends ParserRuleContext {
	public pathExprNoRoot(): PathExprNoRootContext | undefined {
		return this.tryGetRuleContext(0, PathExprNoRootContext);
	}
	public PIPE(): TerminalNode | undefined { return this.tryGetToken(XPathParser.PIPE, 0); }
	public unionExprNoRoot(): UnionExprNoRootContext | undefined {
		return this.tryGetRuleContext(0, UnionExprNoRootContext);
	}
	public PATHSEP(): TerminalNode | undefined { return this.tryGetToken(XPathParser.PATHSEP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XPathParser.RULE_unionExprNoRoot; }
	// @Override
	public enterRule(listener: XPathListener): void {
		if (listener.enterUnionExprNoRoot) {
			listener.enterUnionExprNoRoot(this);
		}
	}
	// @Override
	public exitRule(listener: XPathListener): void {
		if (listener.exitUnionExprNoRoot) {
			listener.exitUnionExprNoRoot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XPathVisitor<Result>): Result {
		if (visitor.visitUnionExprNoRoot) {
			return visitor.visitUnionExprNoRoot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PathExprNoRootContext extends ParserRuleContext {
	public locationPath(): LocationPathContext | undefined {
		return this.tryGetRuleContext(0, LocationPathContext);
	}
	public filterExpr(): FilterExprContext | undefined {
		return this.tryGetRuleContext(0, FilterExprContext);
	}
	public relativeLocationPath(): RelativeLocationPathContext | undefined {
		return this.tryGetRuleContext(0, RelativeLocationPathContext);
	}
	public PATHSEP(): TerminalNode | undefined { return this.tryGetToken(XPathParser.PATHSEP, 0); }
	public ABRPATH(): TerminalNode | undefined { return this.tryGetToken(XPathParser.ABRPATH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XPathParser.RULE_pathExprNoRoot; }
	// @Override
	public enterRule(listener: XPathListener): void {
		if (listener.enterPathExprNoRoot) {
			listener.enterPathExprNoRoot(this);
		}
	}
	// @Override
	public exitRule(listener: XPathListener): void {
		if (listener.exitPathExprNoRoot) {
			listener.exitPathExprNoRoot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XPathVisitor<Result>): Result {
		if (visitor.visitPathExprNoRoot) {
			return visitor.visitPathExprNoRoot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FilterExprContext extends ParserRuleContext {
	public primaryExpr(): PrimaryExprContext {
		return this.getRuleContext(0, PrimaryExprContext);
	}
	public predicate(): PredicateContext[];
	public predicate(i: number): PredicateContext;
	public predicate(i?: number): PredicateContext | PredicateContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PredicateContext);
		} else {
			return this.getRuleContext(i, PredicateContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XPathParser.RULE_filterExpr; }
	// @Override
	public enterRule(listener: XPathListener): void {
		if (listener.enterFilterExpr) {
			listener.enterFilterExpr(this);
		}
	}
	// @Override
	public exitRule(listener: XPathListener): void {
		if (listener.exitFilterExpr) {
			listener.exitFilterExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XPathVisitor<Result>): Result {
		if (visitor.visitFilterExpr) {
			return visitor.visitFilterExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrExprContext extends ParserRuleContext {
	public andExpr(): AndExprContext[];
	public andExpr(i: number): AndExprContext;
	public andExpr(i?: number): AndExprContext | AndExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AndExprContext);
		} else {
			return this.getRuleContext(i, AndExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XPathParser.RULE_orExpr; }
	// @Override
	public enterRule(listener: XPathListener): void {
		if (listener.enterOrExpr) {
			listener.enterOrExpr(this);
		}
	}
	// @Override
	public exitRule(listener: XPathListener): void {
		if (listener.exitOrExpr) {
			listener.exitOrExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XPathVisitor<Result>): Result {
		if (visitor.visitOrExpr) {
			return visitor.visitOrExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AndExprContext extends ParserRuleContext {
	public equalityExpr(): EqualityExprContext[];
	public equalityExpr(i: number): EqualityExprContext;
	public equalityExpr(i?: number): EqualityExprContext | EqualityExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EqualityExprContext);
		} else {
			return this.getRuleContext(i, EqualityExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XPathParser.RULE_andExpr; }
	// @Override
	public enterRule(listener: XPathListener): void {
		if (listener.enterAndExpr) {
			listener.enterAndExpr(this);
		}
	}
	// @Override
	public exitRule(listener: XPathListener): void {
		if (listener.exitAndExpr) {
			listener.exitAndExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XPathVisitor<Result>): Result {
		if (visitor.visitAndExpr) {
			return visitor.visitAndExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EqualityExprContext extends ParserRuleContext {
	public relationalExpr(): RelationalExprContext[];
	public relationalExpr(i: number): RelationalExprContext;
	public relationalExpr(i?: number): RelationalExprContext | RelationalExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RelationalExprContext);
		} else {
			return this.getRuleContext(i, RelationalExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XPathParser.RULE_equalityExpr; }
	// @Override
	public enterRule(listener: XPathListener): void {
		if (listener.enterEqualityExpr) {
			listener.enterEqualityExpr(this);
		}
	}
	// @Override
	public exitRule(listener: XPathListener): void {
		if (listener.exitEqualityExpr) {
			listener.exitEqualityExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XPathVisitor<Result>): Result {
		if (visitor.visitEqualityExpr) {
			return visitor.visitEqualityExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationalExprContext extends ParserRuleContext {
	public additiveExpr(): AdditiveExprContext[];
	public additiveExpr(i: number): AdditiveExprContext;
	public additiveExpr(i?: number): AdditiveExprContext | AdditiveExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AdditiveExprContext);
		} else {
			return this.getRuleContext(i, AdditiveExprContext);
		}
	}
	public LESS(): TerminalNode[];
	public LESS(i: number): TerminalNode;
	public LESS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XPathParser.LESS);
		} else {
			return this.getToken(XPathParser.LESS, i);
		}
	}
	public MORE_(): TerminalNode[];
	public MORE_(i: number): TerminalNode;
	public MORE_(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XPathParser.MORE_);
		} else {
			return this.getToken(XPathParser.MORE_, i);
		}
	}
	public LE(): TerminalNode[];
	public LE(i: number): TerminalNode;
	public LE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XPathParser.LE);
		} else {
			return this.getToken(XPathParser.LE, i);
		}
	}
	public GE(): TerminalNode[];
	public GE(i: number): TerminalNode;
	public GE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XPathParser.GE);
		} else {
			return this.getToken(XPathParser.GE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XPathParser.RULE_relationalExpr; }
	// @Override
	public enterRule(listener: XPathListener): void {
		if (listener.enterRelationalExpr) {
			listener.enterRelationalExpr(this);
		}
	}
	// @Override
	public exitRule(listener: XPathListener): void {
		if (listener.exitRelationalExpr) {
			listener.exitRelationalExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XPathVisitor<Result>): Result {
		if (visitor.visitRelationalExpr) {
			return visitor.visitRelationalExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditiveExprContext extends ParserRuleContext {
	public multiplicativeExpr(): MultiplicativeExprContext[];
	public multiplicativeExpr(i: number): MultiplicativeExprContext;
	public multiplicativeExpr(i?: number): MultiplicativeExprContext | MultiplicativeExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultiplicativeExprContext);
		} else {
			return this.getRuleContext(i, MultiplicativeExprContext);
		}
	}
	public PLUS(): TerminalNode[];
	public PLUS(i: number): TerminalNode;
	public PLUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XPathParser.PLUS);
		} else {
			return this.getToken(XPathParser.PLUS, i);
		}
	}
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XPathParser.MINUS);
		} else {
			return this.getToken(XPathParser.MINUS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XPathParser.RULE_additiveExpr; }
	// @Override
	public enterRule(listener: XPathListener): void {
		if (listener.enterAdditiveExpr) {
			listener.enterAdditiveExpr(this);
		}
	}
	// @Override
	public exitRule(listener: XPathListener): void {
		if (listener.exitAdditiveExpr) {
			listener.exitAdditiveExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XPathVisitor<Result>): Result {
		if (visitor.visitAdditiveExpr) {
			return visitor.visitAdditiveExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplicativeExprContext extends ParserRuleContext {
	public unaryExprNoRoot(): UnaryExprNoRootContext | undefined {
		return this.tryGetRuleContext(0, UnaryExprNoRootContext);
	}
	public multiplicativeExpr(): MultiplicativeExprContext | undefined {
		return this.tryGetRuleContext(0, MultiplicativeExprContext);
	}
	public MUL(): TerminalNode | undefined { return this.tryGetToken(XPathParser.MUL, 0); }
	public PATHSEP(): TerminalNode | undefined { return this.tryGetToken(XPathParser.PATHSEP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XPathParser.RULE_multiplicativeExpr; }
	// @Override
	public enterRule(listener: XPathListener): void {
		if (listener.enterMultiplicativeExpr) {
			listener.enterMultiplicativeExpr(this);
		}
	}
	// @Override
	public exitRule(listener: XPathListener): void {
		if (listener.exitMultiplicativeExpr) {
			listener.exitMultiplicativeExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XPathVisitor<Result>): Result {
		if (visitor.visitMultiplicativeExpr) {
			return visitor.visitMultiplicativeExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryExprNoRootContext extends ParserRuleContext {
	public unionExprNoRoot(): UnionExprNoRootContext {
		return this.getRuleContext(0, UnionExprNoRootContext);
	}
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XPathParser.MINUS);
		} else {
			return this.getToken(XPathParser.MINUS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XPathParser.RULE_unaryExprNoRoot; }
	// @Override
	public enterRule(listener: XPathListener): void {
		if (listener.enterUnaryExprNoRoot) {
			listener.enterUnaryExprNoRoot(this);
		}
	}
	// @Override
	public exitRule(listener: XPathListener): void {
		if (listener.exitUnaryExprNoRoot) {
			listener.exitUnaryExprNoRoot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XPathVisitor<Result>): Result {
		if (visitor.visitUnaryExprNoRoot) {
			return visitor.visitUnaryExprNoRoot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QNameContext extends ParserRuleContext {
	public nCName(): NCNameContext[];
	public nCName(i: number): NCNameContext;
	public nCName(i?: number): NCNameContext | NCNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NCNameContext);
		} else {
			return this.getRuleContext(i, NCNameContext);
		}
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(XPathParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XPathParser.RULE_qName; }
	// @Override
	public enterRule(listener: XPathListener): void {
		if (listener.enterQName) {
			listener.enterQName(this);
		}
	}
	// @Override
	public exitRule(listener: XPathListener): void {
		if (listener.exitQName) {
			listener.exitQName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XPathVisitor<Result>): Result {
		if (visitor.visitQName) {
			return visitor.visitQName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionNameContext extends ParserRuleContext {
	public nCName(): NCNameContext[];
	public nCName(i: number): NCNameContext;
	public nCName(i?: number): NCNameContext | NCNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NCNameContext);
		} else {
			return this.getRuleContext(i, NCNameContext);
		}
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(XPathParser.COLON, 0); }
	public NCName(): TerminalNode | undefined { return this.tryGetToken(XPathParser.NCName, 0); }
	public AxisName(): TerminalNode | undefined { return this.tryGetToken(XPathParser.AxisName, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XPathParser.RULE_functionName; }
	// @Override
	public enterRule(listener: XPathListener): void {
		if (listener.enterFunctionName) {
			listener.enterFunctionName(this);
		}
	}
	// @Override
	public exitRule(listener: XPathListener): void {
		if (listener.exitFunctionName) {
			listener.exitFunctionName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XPathVisitor<Result>): Result {
		if (visitor.visitFunctionName) {
			return visitor.visitFunctionName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableReferenceContext extends ParserRuleContext {
	public qName(): QNameContext {
		return this.getRuleContext(0, QNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XPathParser.RULE_variableReference; }
	// @Override
	public enterRule(listener: XPathListener): void {
		if (listener.enterVariableReference) {
			listener.enterVariableReference(this);
		}
	}
	// @Override
	public exitRule(listener: XPathListener): void {
		if (listener.exitVariableReference) {
			listener.exitVariableReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XPathVisitor<Result>): Result {
		if (visitor.visitVariableReference) {
			return visitor.visitVariableReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameTestContext extends ParserRuleContext {
	public MUL(): TerminalNode | undefined { return this.tryGetToken(XPathParser.MUL, 0); }
	public nCName(): NCNameContext | undefined {
		return this.tryGetRuleContext(0, NCNameContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(XPathParser.COLON, 0); }
	public qName(): QNameContext | undefined {
		return this.tryGetRuleContext(0, QNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XPathParser.RULE_nameTest; }
	// @Override
	public enterRule(listener: XPathListener): void {
		if (listener.enterNameTest) {
			listener.enterNameTest(this);
		}
	}
	// @Override
	public exitRule(listener: XPathListener): void {
		if (listener.exitNameTest) {
			listener.exitNameTest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XPathVisitor<Result>): Result {
		if (visitor.visitNameTest) {
			return visitor.visitNameTest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NCNameContext extends ParserRuleContext {
	public NCName(): TerminalNode | undefined { return this.tryGetToken(XPathParser.NCName, 0); }
	public AxisName(): TerminalNode | undefined { return this.tryGetToken(XPathParser.AxisName, 0); }
	public NodeType(): TerminalNode | undefined { return this.tryGetToken(XPathParser.NodeType, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XPathParser.RULE_nCName; }
	// @Override
	public enterRule(listener: XPathListener): void {
		if (listener.enterNCName) {
			listener.enterNCName(this);
		}
	}
	// @Override
	public exitRule(listener: XPathListener): void {
		if (listener.exitNCName) {
			listener.exitNCName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XPathVisitor<Result>): Result {
		if (visitor.visitNCName) {
			return visitor.visitNCName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


