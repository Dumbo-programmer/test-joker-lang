import Visitor from ".";
import { ASTNode } from "joker-lang-parser";

export default class EmptyStatement implements Visitor {
  visitNode(_: ASTNode) {
    return;
  }
}
