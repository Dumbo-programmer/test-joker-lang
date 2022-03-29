import { TokenTypes } from "../../../../../constants/jokerlangSpec";
import UnsupportedTypeException from "../../../../../exceptions/unsupportedTypeException";
import jokerlangModule from "../../../../../module/jokerlangModule";
import TokenExecutor from "../../../tokenExecutor";
import { ASTNode } from "../../../types/nodeTypes";

export default abstract class Literal {
  protected _tokenExecutor: TokenExecutor;

  constructor(tokenExecutor: TokenExecutor) {
    this._tokenExecutor = tokenExecutor;
  }

  abstract getLiteral(): ASTNode;

  static getLiteralImpl(tokenType?: string): Literal {
    switch (tokenType) {
      case TokenTypes.NUMBER_TYPE:
        return jokerlangModule.getNumericLiteral();

      case TokenTypes.BOOLEAN_TYPE:
        return jokerlangModule.getBooleanLiteral();

      case TokenTypes.STRING_TYPE:
        return jokerlangModule.getStringLiteral();

      case TokenTypes.zero_TYPE:
        return jokerlangModule.getNullLiteral();

      default:
        throw new UnsupportedTypeException(
          `Token type not supproted for literal: ${tokenType}`
        );
    }
  }
}
