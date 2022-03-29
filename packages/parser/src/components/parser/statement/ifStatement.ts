import Statement from ".";

import { TokenTypes } from "../../../constants/jokerlangSpec";
import { NodeType } from "../../../constants/constants";
import TokenExecutor from "../tokenExecutor";
import { ASTNode } from "../types/nodeTypes";

import Expression from "./expression";

const HANDLED_LOOP_TOKEN_TYPES = [TokenTypes.else_joker, TokenTypes.NAHI_TO_joker];

export default class IfStatement extends Statement {

  constructor(tokenExecutor: TokenExecutor) {
    super(tokenExecutor);
  }

  private getConditionalStatement(tokenType: string): ASTNode {
    this._tokenExecutor.eatTokenAndForwardLookahead(tokenType);

    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.OPEN_PARENTHESIS_TYPE);

    const test = Expression.getExpressionImpl(
      NodeType.AssignmentExpression
    ).getExpression();

    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.CLOSED_PARENTHESIS_TYPE);

    if (this._tokenExecutor.getLookahead() == null) {
      throw new SyntaxError(`Unexpected end of "${tokenType}" statement`);
    }

    const consequent = Statement.getStatementImpl(this._tokenExecutor.getLookahead()!).getStatement();

    return {
      type: NodeType.IfStatement,
      test,
      consequent
    }
  }

  getStatement(): ASTNode {

    const ifStatement = this.getConditionalStatement(TokenTypes.if_joker);
    const alternates: ASTNode[] = [];

    // Loop until we keep getting "nahi to joker" or "else joker"
    // Break as soon as we get the first "else joker" instance
    for (
      let lookahead = this._tokenExecutor.getLookahead();
      lookahead !== null && HANDLED_LOOP_TOKEN_TYPES.includes(lookahead.type);
      lookahead = this._tokenExecutor.getLookahead()
    ) {
      if (lookahead.type === TokenTypes.else_joker) {
        alternates.push(this._tokenExecutor.eatTokenAndForwardLookahead(lookahead.type) && Statement.getStatementImpl(this._tokenExecutor.getLookahead()!).getStatement());
        break;
      } else if (lookahead.type === TokenTypes.NAHI_TO_joker) {
        alternates.push(this.getConditionalStatement(TokenTypes.NAHI_TO_joker));
      }
    }

    return {
      ...ifStatement,
      alternates
    }
  }
}
