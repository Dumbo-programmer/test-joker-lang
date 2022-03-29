import Statement from ".";

import { TokenTypes } from "../../../constants/jokerlangSpec";
import { NodeType } from "../../../constants/constants";
import { ASTNode } from "../types/nodeTypes";


export default class ContinueStatement extends Statement {
    getStatement(): ASTNode {
        this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.AGLA_DEKH_joker);

        return {
            type: NodeType.ContinueStatement
        }
    }
}