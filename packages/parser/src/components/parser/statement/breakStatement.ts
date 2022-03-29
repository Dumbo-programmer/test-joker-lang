import Statement from ".";

import { TokenTypes } from "../../../constants/jokerlangSpec";
import { NodeType } from "../../../constants/constants";
import { ASTNode } from "../types/nodeTypes";


export default class BreakStatement extends Statement {
    getStatement(): ASTNode {
        this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.BAS_KAR_joker);

        return {
            type: NodeType.BreakStatement
        }
    }
}