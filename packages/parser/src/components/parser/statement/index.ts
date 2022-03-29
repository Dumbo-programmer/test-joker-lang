import { TokenTypes } from "../../../constants/jokerlangSpec";
import jokerlangModule from "../../../module/jokerlangModule";
import { Token } from "../../tokenizer/types";
import TokenExecutor from "../tokenExecutor";
import { ASTNode } from "../types/nodeTypes";


export default abstract class Statement {
  protected _tokenExecutor: TokenExecutor;

  constructor(tokenExecutor: TokenExecutor) {
    this._tokenExecutor = tokenExecutor;
  }

  abstract getStatement(): ASTNode;

  static getStatementImpl(lookahead: Token): Statement {
    switch (lookahead.type) {
      case TokenTypes.tell_joker_TYPE:
        return jokerlangModule.getPrintStatement();

      case TokenTypes.SEMI_COLON_TYPE:
        return jokerlangModule.getEmptyStatement();

      case TokenTypes.OPEN_CURLY_BRACE_TYPE:
        return jokerlangModule.getBlockStatement();

      case TokenTypes.joker_YE_HAI_TYPE:
        return jokerlangModule.getVariableStatement();

      case TokenTypes.if_joker:
        return jokerlangModule.getIfStatement();

      case TokenTypes.JAB_TAK_joker:
        return jokerlangModule.getWhileStatement();

      case TokenTypes.BAS_KAR_joker:
        return jokerlangModule.getBreakStatement();

      case TokenTypes.AGLA_DEKH_joker:
        return jokerlangModule.getContinueStatement();

      default:
        return jokerlangModule.getExpressionStatement();
    }
  }
}
