import jokerlangModule from "./module/jokerlangModule";

export { NodeType } from "./constants/constants";
export type { ASTNode } from "./components/parser/types/nodeTypes";
export default jokerlangModule.getParser();
