import Expression from ".";

import { TokenTypes } from "../../../../constants/jokerlangSpec";
import { NodeType } from "../../../../constants/constants";
import { ASTNode } from "../../types/nodeTypes";


export default class LogicalORExpression extends Expression {
    getExpression(): ASTNode {
        return this.getLogicalExpression(NodeType.LogicalANDExpression, TokenTypes.LOGICAL_OR);
    }
}