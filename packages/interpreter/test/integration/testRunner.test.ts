import { RuntimeException } from "../../src";
import Interpreter from "../../src/components/interpreter";
import InterpreterModule from "../../src/module/interpreterModule";

import { NegativeTestCases } from "./negativeTestsProvider";
import {
  NoOutputPositiveTests,
  WithOutputPositiveTests
} from "./positiveTestsProvider";


let interpreter: Interpreter = InterpreterModule.getInterpreter();

console.log = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

NoOutputPositiveTests.forEach((testCase) => {
  test(testCase.name, () => {
    expect(() => interpreter.interpret(testCase.input)).not.toThrowError();
  });
});

WithOutputPositiveTests.forEach((testCase) => {
  test(testCase.name, () => {
    expect(() => interpreter.interpret(testCase.input)).not.toThrowError();

    expect(console.log).toHaveBeenCalledWith(testCase.output);
  });
});

NegativeTestCases.forEach((testCase) => {
  test(testCase.name, () => {
    expect(() => interpreter.interpret(testCase.input)).toThrowError(
      testCase.exception
    );
  });
});

test("test redeclaring & printing variables in different scopes", () => {
  expect(() =>
    interpreter.interpret(`hi joker;
    joker ye hai a = 4;
    {
      joker ye hai a = 90;
      tell joker a;
    }
    tell joker a;
    bye joker;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("90");
  expect(console.log).toHaveBeenCalledWith("4");
});

test("test assigning variable in parent scope", () => {
  expect(() =>
    interpreter.interpret(`hi joker;
    joker ye hai a = 4;
    {
      a = 90;
      tell joker a;
    }
    tell joker a;
    bye joker;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("90");
  expect(console.log).toHaveBeenCalledWith("90");
});

test("test accessing variable in parent scope", () => {
  expect(() =>
    interpreter.interpret(`hi joker;
    joker ye hai a = 4;
    {
      tell joker a;
    }
    tell joker a;
    bye joker;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("4");
});

test("whileStatement test with 2 times loop, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hi joker;
    joker ye hai a = 0;
    jab tak joker (a < 2) {
      tell joker "joker";
      a += 1;
    }
    bye joker;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("joker");
  expect(console.log).toHaveBeenCalledWith("joker");
});

test("whileStatement test with nested loops - 2, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hi joker;
    joker ye hai a = 0, b = 0;
    jab tak joker (a < 2) {
      jab tak joker (b < 1) {
        tell joker "joker";
        b += 1;
      }
      a += 1;
    }
    bye joker;
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("joker");
});

test("whileStatement test with nested loops - 3, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hi joker;
    joker ye hai a = 0;
    jab tak joker (a < 2) {
      joker ye hai b = 0;
      jab tak joker (b < 2) {
        tell joker "joker";
        b += 1;
        if joker (b == 1)
          stop this joker;
      }
      a += 1;
    }
    bye joker;
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("joker");
  expect(console.log).toHaveBeenCalledWith("joker");
});


test("whileStatement test with nested loops - 4, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hi joker
    joker ye hai a = 0;
    jab tak joker (a < 10) {
      tell joker a;
      a += 1;
      if joker (a == 6) {
        stop this joker;
      }
    }
    tell joker "done";
    bye joker
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("0");
  expect(console.log).toHaveBeenCalledWith("1");
  expect(console.log).toHaveBeenCalledWith("2");
  expect(console.log).toHaveBeenCalledWith("3");
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("5");
});

test("whileStatement test with nested loops - 5, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hi joker
    joker ye hai a = 0;
    jab tak joker (a < 10) {
      tell joker a;
      a += 1;
      if joker (a == 6)
        stop this joker;
    }
    tell joker "done";
    bye joker
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("0");
  expect(console.log).toHaveBeenCalledWith("1");
  expect(console.log).toHaveBeenCalledWith("2");
  expect(console.log).toHaveBeenCalledWith("3");
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("5");
});

test("whileStatement test with nested loops - 6, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hi joker
    joker ye hai a = 0;
    jab tak joker (a < 10) {
      tell joker a;
      a += 1;
      if joker (a == 3) {
        stop this joker;
      }
      tell joker "2 baar hi chapunga";
    }
    tell joker "done";
    bye joker
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("0");
  expect(console.log).toHaveBeenCalledWith("1");
  expect(console.log).toHaveBeenCalledWith("2");
  expect(console.log).toHaveBeenCalledWith("2 baar hi chapunga");
  expect(console.log).toHaveBeenCalledWith("2 baar hi chapunga");
});

test("whileStatement test with infinite loop, should throw runtime exception after 5000 executions", () => {
  expect(() =>
    interpreter.interpret(`
    hi joker
    
    jab tak joker (sahi) {
      tell joker "joker";
    }
    bye joker;
    
    `)
  ).toThrowError(RuntimeException);

  expect(console.log).toHaveBeenCalledTimes(5001);
  expect(console.log).toHaveBeenCalledWith("joker");
});

test("if-else ladders one after the other, should be evaluated separately", () => {
  expect(() =>
    interpreter.interpret(`
    hi joker
    joker ye hai x = 6;
    if joker (x < 5) {
      tell joker "x < 5";
    } nahi to joker (x < 8) {
      tell joker "x < 8";
    } if joker (x < 4) {
      tell joker "x < 4";
    } else joker {
      tell joker "x > 4";
    }
    bye joker;
    
    `)
  ).not.toThrowError();

  expect(console.log).toHaveBeenCalledWith("x < 8");
  expect(console.log).toHaveBeenCalledWith("x > 4");
});

// test("jest", () => {
//     interpreter.interpret(`
//     hi joker
//     joker ye hai a = 0;
//     jab tak joker (a < 10) {
//       tell joker a;
//       a += 1;
//       if joker (a == 3) {
//         stop this joker;
//       }
//       tell joker "2 baar hi chapunga";
//     }
//     tell joker "done";
//     bye joker
//     `);
// });
