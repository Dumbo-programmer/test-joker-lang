import { RuntimeException } from "../../src";
import zeroPointerException from "../../src/exceptions/zeroPointerException";


export const NegativeTestCases = [
  {
    name: "interpreter assigning variable before declaration test, should throw an exception",
    input: `
          hi joker;
          a = 4;
          bye joker;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with addition, should throw an exception",
    input: `
          hi joker;
          a += 4;
          bye joker;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with subtraction, should throw an exception",
    input: `
          hi joker;
          a -= 4;
          bye joker;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with multiplication, should throw an exception",
    input: `
          hi joker;
          a -= 4;
          bye joker;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with division, should throw an exception",
    input: `
          hi joker;
          a /= 4;
          bye joker;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test - 2, should throw an exception",
    input: `
          hi joker;
          a;
          bye joker;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter adding two variables before declaration test, should throw an exception",
    input: `
          hi joker;
          a + b;
          bye joker;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter adding variable with constant before declaration test, should throw an exception",
    input: `
          hi joker;
          a + 4;
          bye joker;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter subtracting variable with constant before declaration test, should throw an exception",
    input: `
          hi joker;
          a - 4;
          bye joker;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter subtracting two variables before declaration test, should throw an exception",
    input: `
          hi joker;
          a - b;
          bye joker;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter multiplying variable with constant before declaration test, should throw an exception",
    input: `
          hi joker;
          a * 4;
          bye joker;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter multiplying two variables before declaration test, should throw an exception",
    input: `
          hi joker;
          a * b;
          bye joker;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter dividing variable with constant before declaration test, should throw an exception",
    input: `
          hi joker;
          a / 4;
          bye joker;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter dividing two variables before declaration test, should throw an exception",
    input: `
          hi joker;
          a / b;
          bye joker;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing variable before declaration test, should throw an exception",
    input: `
          hi joker;
          tell joker a;
          bye joker;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing multiple variables before declaration test, should throw an exception",
    input: `
          hi joker;
          tell joker a, b;
          bye joker;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing multiple variables with only one of them declared, should throw an exception",
    input: `
          hi joker;
          joker ye hai a = 8;
          tell joker a, b;
          bye joker;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter declaring multiple variables with chain assignment, should throw an exception",
    input: `
          hi joker;
          joker ye hai a = b = 8;
          bye joker;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter re declare already declared variable, should throw an exception",
    input: `
        hi joker;
        joker ye hai a;
        a = 9;
        joker ye hai a = 0;
        bye joker;
      `,
    exception: RuntimeException,
  },
  // cases with zero
  {
    name: "interpreter use zero variable in expression, should throw an exception",
    input: `
      hi joker;
      joker ye hai a;
      tell joker a + 9;
      bye joker;
    `,
    exception: zeroPointerException,
  },
  {
    name: "interpreter use zero variable in expression - 2, should throw an exception",
    input: `
      hi joker;
      joker ye hai a = zero;
      tell joker a + 9;
      bye joker;
    `,
    exception: zeroPointerException,
  },
  {
    name: "interpreter use zero in variable initialisation expression, should throw an exception",
    input: `
      hi joker;
      joker ye hai a = zero + 80;
      bye joker;
    `,
    exception: zeroPointerException,
  },
  {
    name: "interpreter use zero in variable initialisation expression - 2, should throw an exception",
    input: `
      hi joker;
      joker ye hai a = zero + "jam";
      bye joker;
    `,
    exception: zeroPointerException,
  },
  {
    name: "interpreter use zero variable in another variable initialisation expression, should throw an exception",
    input: `
      hi joker;
      joker ye hai a;
      joker ye hai b = a + "hello";
      bye joker;
    `,
    exception: zeroPointerException,
  },
  {
    name: "interpreter use zero variable in complex expression, should throw an exception",
    input: `
      hi joker;
      joker ye hai a;
      joker ye hai b = ((a*9) * a + "hello");
      bye joker;
    `,
    exception: zeroPointerException,
  },
  // sahi - galat case
  {
    name: "interpreter use sahi variable in expression, should throw an exception",
    input: `
      hi joker;
      joker ye hai a = sahi;
      tell joker a + 9;
      bye joker;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use galat variable in expression, should throw an exception",
    input: `
      hi joker;
      joker ye hai a = galat;
      tell joker a + 9;
      bye joker;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use sahi in variable initialisation expression, should throw an exception",
    input: `
      hi joker;
      joker ye hai a = sahi + 80;
      bye joker;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use galat in variable initialisation expression, should throw an exception",
    input: `
      hi joker;
      joker ye hai a = galat + 80;
      bye joker;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use sahi variable in another variable initialisation expression, should throw an exception",
    input: `
      hi joker;
      joker ye hai a = sahi;
      joker ye hai b = a + "hello";
      bye joker;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use galat variable in complex expression, should throw an exception",
    input: `
      hi joker;
      joker ye hai a = galat;
      joker ye hai b = ((a*9) * a + "hello");
      bye joker;
    `,
    exception: RuntimeException,
  },
  // ##########

  {
    name: "complex expression test with one zero operand, should throw an exception",
    input: `
        hi joker
        (zero * (4 + 8 + 10));
        bye joker
      `,
    output: zeroPointerException,
  },
  {
    name: "complex expression test with one zero operand and one boolean operand, should throw an exception",
    input: `
        hi joker
        (zero * (sahi + 8 + 10));
        bye joker
      `,
    output: RuntimeException,
  },
  {
    name: "complex expression test with one zero operand and one boolean operand - 2, should throw zero pointer exception",
    input: `
        hi joker
        (sahi * (zero + 8 + 10));
        bye joker
      `,
    output: zeroPointerException,
  },
  {
    name: "complex expression test with one zero operand and one boolean operand - 3, should throw zero pointer exception",
    input: `
        hi joker
        (zero + sahi);
        bye joker
      `,
    output: zeroPointerException,
  },
  {
    name: "complex expression test with one boolean operand, should throw an exception",
    input: `
        hi joker
        (sahi * (4 + 8 + 10));
        bye joker
      `,
    output: RuntimeException,
  },
  {
    name: "additive expression test with only boolean operand, should throw an exception",
    input: `
        hi joker
        sahi + galat;
        bye joker
      `,
    output: RuntimeException,
  },
  {
    name: "additive expression test with only variable boolean operand, should throw an exception",
    input: `
        hi joker
        joker ye hai a = sahi, b = galat;
        a + b;
        bye joker
      `,
    output: RuntimeException,
  },
  {
    name: "multiplicative expression test with only boolean operand, should throw an exception",
    input: `
        hi joker
        sahi * galat;
        bye joker
      `,
    output: RuntimeException,
  },
  {
    name: "multiplicative expression test with only variable boolean operand, should throw an exception",
    input: `
        hi joker
        joker ye hai a = sahi, b = galat;
        a * b;
        bye joker
      `,
    output: RuntimeException,
  },
  {
    name: "division expression test with only boolean operand, should throw an exception",
    input: `
        hi joker
        sahi / galat;
        bye joker
      `,
    output: RuntimeException,
  },
  {
    name: "division expression test with only variable boolean operand, should throw an exception",
    input: `
        hi joker
        joker ye hai a = sahi, b = galat;
        a / b;
        bye joker
      `,
    output: RuntimeException,
  },
  {
    name: "print statement test with expression containing zero, should throw an exception",
    input: `
        hi joker
        tell joker zero + 5;
        bye joker;
      `,
    output: zeroPointerException,
  },
  {
    name: "complex assign test with expression containing zero, should throw an exception",
    input: `
        hi joker
        joker ye hai a;
        a *= 5;
        bye joker;
      `,
    output: zeroPointerException,
  },
  {
    name: "complex assign test with expression containing sahi, should throw an exception",
    input: `
        hi joker
        joker ye hai a = sahi;
        a *= 5;
        bye joker;
      `,
    output: zeroPointerException,
  },
  {
    name: "complex assign test with expression containing zero - 2, should throw an exception",
    input: `
        hi joker
        joker ye hai a = zero;
        a /= 5;
        bye joker;
      `,
    output: zeroPointerException,
  },
  // while loop negative tests
  {
    name: "infinite while loop, should throw an exception",
    input: `
        hi joker
        jab tak joker (sahi) {

        }
        bye joker;
      `,
    output: RuntimeException,
  },
  {
    name: "infinite condition while loop, should throw an exception",
    input: `
        hi joker
        joker ye hai a = 0;
        jab tak joker (a < 2) {
          tell joker "joker";
        }
        bye joker;
      `,
    output: RuntimeException,
  },
  {
    name: "invalid use of break, should throw an exception",
    input: `
        hi joker
        joker ye hai a = 0;
        if joker (sahi)
          stop this joker;
        bye joker;
      `,
    output: RuntimeException,
  },
  // logical expression negative tests
  {
    name: "use of zero with &&, should throw an exception",
    input: `
        hi joker
        tell joker zero && 90;
        bye joker;
      `,
    output: zeroPointerException,
  },
  {
    name: "use of zero variable with &&, should throw an exception",
    input: `
        hi joker
        joker ye hai a;
        tell joker a && 90;
        bye joker;
      `,
    output: zeroPointerException,
  },
  // modulus operator test
  {
    name: `modulus operator test with invalid operand, should throw an exception`,
    input: `
      hi joker;
      tell joker "sahi" % 9;
      bye joker;
    `,
    output: RuntimeException,
  },
  // continue in loop test
  {
    name: "infinite condition while loop with continue, should throw an exception",
    input: `
        hi joker
        joker ye hai a = 0;
        jab tak joker (a < 2) {
          look for next joker;
          a = 5;
        }
        bye joker;
      `,
    output: RuntimeException,
  },
  {
    name: "invalid use of continue, should throw an exception",
    input: `
        hi joker
        joker ye hai a = 0;
        if joker (sahi)
          look for next joker
        bye joker;
      `,
    output: RuntimeException,
  },
];
