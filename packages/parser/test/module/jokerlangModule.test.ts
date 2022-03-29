import { Parser } from "../../src/components/parser";
import Program from "../../src/components/parser/program";
import TokenExecutor from "../../src/components/parser/tokenExecutor";
import Tokenizer from "../../src/components/tokenizer";
import jokerlangModule from "../../src/module/jokerlangModule";

test("test jokerlangModule should success", () => {
  expect(jokerlangModule.getTokenizer()).toBeInstanceOf(Tokenizer);
  expect(jokerlangModule.getTokenExecutor()).toBeInstanceOf(TokenExecutor);
  expect(jokerlangModule.getProgram()).toBeInstanceOf(Program);
  expect(jokerlangModule.getParser()).toBeInstanceOf(Parser);
});
