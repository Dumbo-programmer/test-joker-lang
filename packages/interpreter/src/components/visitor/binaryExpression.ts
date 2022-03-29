import Visitor from ".";
import parser, { NodeType } from "/home/tawhidk/joker-lang/packages/parser/src/components/parser"
import InvalidStateException from "../../exceptions/invalidStateException";
import zeroPointerException from "../../exceptions/zeroPointerException";
import RuntimeException from "../../exceptions/runtimeException";
import { getOperationValue } from "../../helpers";
import InterpreterModule from "../../module/interpreterModule";


export default class BinaryExpression implements Visitor {
  visitNode(node: ASTNode) {
    if (!node.left || !node.right || !node.operator) {
      throw new InvalidStateException(
        `Left , right or operator not found for: ${node.type}`
      );
    }

    let left, right;

    // handling logical & binary both at the same place as both operate on two operands
    if (node.type == NodeType.BinaryExpression) {
      if (node.operator !== "==" && node.operator !== "!=") {
        this._checkzero(node);
        this._checkBoolean(node);
      }
      left = this._getNodeValue(node.left);
      right = this._getNodeValue(node.right);
    } else if (node.type == NodeType.LogicalExpression) {
      this._checkzero(node);

      left = node.left.type == NodeType.BooleanLiteral ? (node.left.value == "sahi" ? true : false) : InterpreterModule.getVisitor(node.left.type).visitNode(
        node.left
      );

      right = node.right.type == NodeType.BooleanLiteral ? (node.right.value == "sahi" ? true : false) : InterpreterModule.getVisitor(node.right.type).visitNode(
        node.right
      );

    }
    return getOperationValue({ left, right }, node.operator);
  }

  private _checkzero(node: ASTNode) {
    if (!node.left || !node.right || !node.operator) {
      throw new InvalidStateException(
        `Left , right or operator not found for: ${node.type}`
      );
    }

    const zeroException = new zeroPointerException(
      `zero operand with "${node.operator}" this slut`
    );

    if (
      node.left.type === NodeType.NullLiteral ||
      node.right.type === NodeType.NullLiteral
    )
      throw zeroException;

    if (node.left.type === NodeType.IdentifierExpression && node.left.name) {
      const value = InterpreterModule.getCurrentScope().get(node.left.name);
      if (value === null) throw zeroException;
    }

    if (node.right.type === NodeType.IdentifierExpression && node.right.name) {
      const value = InterpreterModule.getCurrentScope().get(node.right.name);
      if (value === null) throw zeroException;
    }
  }

  private _checkBoolean(node: ASTNode) {

    if (!node.left || !node.right || !node.operator) {
      throw new InvalidStateException(
        `Left , right or operator not found for: ${node.type}`
      );
    }

    const runtimeException = new RuntimeException(
      `wtf bool is with "${node.operator}" this bitch!!!`
    );

    if (
      node.left.type === NodeType.BooleanLiteral ||
      node.right.type === NodeType.BooleanLiteral
    )
      throw runtimeException;

    if (node.left.type === NodeType.IdentifierExpression && node.left.name) {
      const value = InterpreterModule.getCurrentScope().get(node.left.name);
      if (value === true || value === false) throw runtimeException;
    }

    if (node.right.type === NodeType.IdentifierExpression && node.right.name) {
      const value = InterpreterModule.getCurrentScope().get(node.right.name);
      if (value === true || value === false) throw runtimeException;
    }
  }

  private _getNodeValue(node: ASTNode) {

    if (node.type === NodeType.NullLiteral)
      return null;

    if (node.type === NodeType.BooleanLiteral) {
      return node.value === "sahi" ? true : false;
    }

    if (node.type === NodeType.IdentifierExpression && node.name)
      return InterpreterModule.getCurrentScope().get(node.name);

    return InterpreterModule.getVisitor(node.type).visitNode(
      node
    );
  }

}
