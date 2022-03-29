import { NodeType } from "../../../../constants/constants";
import jokerlangModule from "../../../../module/jokerlangModule";
import TokenExecutor from "../../tokenExecutor";
import { ASTNode } from "../../types/nodeTypes";


export default abstract class Expression {
  protected _tokenExecutor: TokenExecutor;

  constructor(tokenExecutor: TokenExecutor) {
    this._tokenExecutor = tokenExecutor;
  }

  abstract getExpression(): ASTNode;

  static getExpressionImpl(expressionType: keyof typeof NodeType): Expression {
    switch (expressionType) {
      case NodeType.AdditiveExpression:
        return jokerlangModule.getAdditiveExpression();

      case NodeType.MultiplicativeExpression:
        return jokerlangModule.getMultiplicativeExpression();

      case NodeType.PrimaryExpression:
        return jokerlangModule.getPrimaryExpression();

      case NodeType.ParanthesizedExpression:
        return jokerlangModule.getParanthesizedExpression();

      case NodeType.AssignmentExpression:
        return jokerlangModule.getAssignmentExpression();

      case NodeType.EqualityExpression:
        return jokerlangModule.getEqualityExpression();

      case NodeType.LogicalANDExpression:
        return jokerlangModule.getLogicalANDExpression();

      case NodeType.LogicalORExpression:
        return jokerlangModule.getLogicalORExpression();

      case NodeType.RelationalExpression:
        return jokerlangModule.getRelationalExpression();

      default:
        return jokerlangModule.getIndentifierExpression();
    }
  }

  protected getBinaryExpression(
    downstreamExpressionType: keyof typeof NodeType,
    operatorToken: string
  ) {
    return this._getExpression(downstreamExpressionType, operatorToken, NodeType.BinaryExpression);
  }

  protected getLogicalExpression(
    downstreamExpressionType: keyof typeof NodeType,
    operatorToken: string
  ) {
    return this._getExpression(downstreamExpressionType, operatorToken, NodeType.LogicalExpression);
  }

  private _getExpression(
    downstreamExpressionType: keyof typeof NodeType,
    operatorToken: string,
    expressionType: keyof typeof NodeType
  ) {
    let left = Expression.getExpressionImpl(downstreamExpressionType).getExpression();

    while (this._tokenExecutor.getLookahead()?.type === operatorToken) {
      const operator =
        this._tokenExecutor.eatTokenAndForwardLookahead(operatorToken);
      const right =
        Expression.getExpressionImpl(downstreamExpressionType).getExpression();

      left = {
        type: expressionType,
        operator: operator.value,
        left,
        right,
      };
    }

    return left;
  }

}
