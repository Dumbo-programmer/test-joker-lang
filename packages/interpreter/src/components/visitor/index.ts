import { ASTNode } from "joker-lang-parser";

export default interface Visitor {
  visitNode(node: ASTNode): unknown;
}
