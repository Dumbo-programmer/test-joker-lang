import Expression from ".";

import { TokenTypes } from "../../../../constants/jokerlangSpec";
import { NodeType } from "../../../../constants/constants";
import { ASTNode } from "../../types/nodeTypes";


export default class RelationalExpression extends Expression {
    getExpression(): ASTNode {
        return this.getBinaryExpression(NodeType.AdditiveExpression, TokenTypes.RELATIONAL_OPERATOR);
    }
}