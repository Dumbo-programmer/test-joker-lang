export const NoOutputPositiveTests = [
  // init statement tests
  {
    name: "interpreter empty init statement test, should success",
    input: `
      hi joker
      bye joker
    `,
  },
  {
    name: "interpreter empty init statement test with random charaters initially, should success",
    input: `
      some random characters
      random random random
      hi joker
      bye joker
    `,
  },
  // empty statement tests
  {
    name: "interpreter empty statement test, should success",
    input: `
      hi joker
      ;
      bye joker
    `,
  },
  {
    name: "interpreter multiple empty statements test, should success",
    input: `
      hi joker
      ;
      ;
      ;;
      bye joker
    `,
  },
  // block statement tests
  {
    name: "interpreter block statement test with empty block, should success",
    input: `
      hi joker
      {};
      bye joker
    `,
  },
  {
    name: "interpreter block statement test with variable statement inside, should success",
    input: `
      hi joker
      {
        joker ye hai a = 4;
      }
      bye joker
    `,
  },
  // variable statement test
  {
    name: "interpreter variable statement test with basic variable declaration, should success",
    input: `
      hi joker
      joker ye hai a, b, c;
      bye joker
    `,
  },
  {
    name: "interpreter variable statement test with basic variable declaration and initialisation, should success",
    input: `
      hi joker
      joker ye hai a = 10, b = "crap";
      bye joker
    `,
  },
  {
    name: "interpreter variable statement test with multiple variable initialisation, should success",
    input: `
      hi joker
      joker ye hai a = 10, b = 5;
      bye joker
    `,
  },
  {
    name: "interpreter variable statement test with variable initialisation with some expression, should success",
    input: `
      hi joker
      joker ye hai a = 7 + 90;
      bye joker
    `,
  },
  // assignment expression tests
  {
    name: "simple assignment expression test with only one identifer, should success",
    input: `
      hi joker
      joker ye hai a = sahi;
      a = 4;
      bye joker
    `,
  },
  {
    name: "complex assignment expression test with only one identifer, should success",
    input: `
      hi joker
      joker ye hai a = 2;
      a *= 4;
      bye joker
    `,
  },
  // paranthesized expression tests
  {
    name: "paranthesized expression test with one parenthesis and simple expression, should success",
    input: `
      hi joker
      joker ye hai a = 2;
      (a + 4);
      bye joker
    `,
  },
  {
    name: "paranthesized expression test with one parenthesis and complex expression, should success",
    input: `
      hi joker
      joker ye hai a = 2;
      (a + 4) * 10 + (5 - 4);
      bye joker
    `,
  },
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
      hi joker
      joker ye hai a = 2;
      (a * (4 + 8) + 10);
      bye joker
    `,
  },
  // if statement test
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
    hi joker
    joker ye hai x = 9;
    if joker (x != 9) {
      x = 5;
      tell joker x;
    } else joker (x >= 9);
    bye joker;
    `,
  },
];

export const WithOutputPositiveTests = [
  {
    name: "variable assignment test with multiple variables, should success",
    input: `
      hi joker;
      joker ye hai a , b;
      a = b = 60;
      tell joker a, b;
      bye joker
    `,
    output: "60 60",
  },
  {
    name: `binaryExpression print test with zero and "==", should success`,
    input: `
      hi joker;
      joker ye hai a;
      if joker (a == zero) {
        tell joker a;
      }
      bye joker
    `,
    output: "zero",
  },
  {
    name: `binaryExpression print test with zero without any operator, should success`,
    input: `
      hi joker;
      joker ye hai a;
      if joker (a) {
        tell joker a;
      } else joker {
        tell joker "not zero";
      }
      bye joker
    `,
    output: "not zero",
  },
  {
    name: `binaryExpression print test - comparing zero with zero "==", should success`,
    input: `
      hi joker;
      if joker (zero == zero) {
        tell joker "hai zero";
      }
      bye joker
    `,
    output: "hai zero",
  },
  {
    name: `binaryExpression print test with comparing zero with var "a", should success`,
    input: `
      hi joker;
      joker ye hai a;
      if joker (zero == a) {
        tell joker "hai zero";
      }
      bye joker
    `,
    output: "hai zero",
  },
  {
    name: `binaryExpression print test with comparing zero with var "a" explicit initialization, should success`,
    input: `
      hi joker;
      joker ye hai a = zero;
      if joker (zero == a) {
        tell joker "hai zero";
      }
      bye joker
    `,
    output: "hai zero",
  },
  {
    name: `binaryExpression print test with comparing zero with string zero, should success`,
    input: `
      hi joker;
      joker ye hai a = zero;
      if joker ("zero" == a) {
        tell joker "hai zero";
      } else joker {
        tell joker "not zero";
      }
      bye joker
    `,
    output: "not zero",
  },
  {
    name: `binaryExpression print test with comparing zero with string zero, should success`,
    input: `
      hi joker;
      joker ye hai a = "zero";
      if joker (zero == a) {
        tell joker "hai zero";
      } else joker {
        tell joker "not zero";
      }
      bye joker
    `,
    output: "not zero",
  },
  {
    name: `binaryExpression print test with comparing zero with string null, should success`,
    input: `
      hi joker;
      joker ye hai a = "null";
      if joker (zero == a) {
        tell joker "hai zero";
      } else joker {
        tell joker "not zero";
      }
      bye joker
    `,
    output: "not zero",
  },
  {
    name: `binaryExpression print test with zero var "a" & "b" - 0, should success`,
    input: `
      hi joker;
      joker ye hai a;
      joker ye hai b;
      if joker (a == b) {
        tell joker "hai zero";
      } else joker {
        tell joker "nahi zero";
      }
      bye joker
    `,
    output: "hai zero",
  },
  {
    name: `binaryExpression print test with zero var "a" & "b" - 1, should success`,
    input: `
      hi joker;
      joker ye hai a;
      joker ye hai b = zero;
      if joker (a == b) {
        tell joker "hai zero";
      } else joker {
        tell joker "nahi zero";
      }
      bye joker
    `,
    output: "hai zero",
  },
  {
    name: `binaryExpression print test with zero var "a" & "b" -2, should success`,
    input: `
      hi joker;
      joker ye hai a;
      joker ye hai b = "zero";
      if joker (a == b) {
        tell joker "hai zero";
      } else joker {
        tell joker "nahi zero";
      }
      bye joker
    `,
    output: "nahi zero",
  },
  // Boolean test
  {
    name: `binaryExpression print test with boolean expression - sahi, should success`,
    input: `
      hi joker;
      joker ye hai a = sahi;
      if joker (sahi == a) {
        tell joker "hai sahi";
      } else joker {
        tell joker "nahi sahi";
      }
      bye joker
    `,
    output: "hai sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - galat, should success`,
    input: `
      hi joker;
      joker ye hai a = galat;
      if joker (galat == a) {
        tell joker "hai galat";
      } else joker {
        tell joker "nahi galat";
      }
      bye joker
    `,
    output: "hai galat",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi with string sahi, should success`,
    input: `
      hi joker;
      joker ye hai a = "sahi";
      if joker (sahi == a) {
        tell joker "hai sahi";
      } else joker {
        tell joker "nahi sahi";
      }
      bye joker
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression, should success`,
    input: `
      hi joker;
      joker ye hai a = 7;
      if joker (sahi == (a > 5)) {
        tell joker "hai sahi";
      } else joker {
        tell joker "nahi sahi";
      }
      bye joker
    `,
    output: "hai sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression & string "sahi", should success`,
    input: `
      hi joker;
      joker ye hai a = 7;
      if joker ("sahi" == (a > 5)) {
        tell joker "hai sahi";
      } else joker {
        tell joker "nahi sahi";
      }
      bye joker
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression & two expressions, should success`,
    input: `
      hi joker;
      joker ye hai a = sahi;
      if joker ("sahi" == (a == sahi)) {
        tell joker "hai sahi";
      } else joker {
        tell joker "nahi sahi";
      }
      bye joker
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression -3, should success`,
    input: `
      hi joker;
      joker ye hai a = sahi;
      if joker ((a == sahi) == (a == sahi)) {
        tell joker "hai sahi";
      } else joker {
        tell joker "nahi sahi";
      }
      bye joker
    `,
    output: "hai sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression - 4, should success`,
    input: `
      hi joker;
      joker ye hai a;
      if joker ((a == zero) == (a == sahi)) {
        tell joker "hai sahi";
      } else joker {
        tell joker "nahi sahi";
      }
      bye joker
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression - 5, should success`,
    input: `
      hi joker;
      joker ye hai a;
      if joker ((a == zero) == (a == sahi)) {
        tell joker "hai sahi";
      } else joker {
        tell joker "nahi sahi";
      }
      bye joker
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression - 5, should success`,
    input: `
      hi joker;
      joker ye hai a;
      joker ye hai b = galat;
      if joker (a == b) {
        tell joker "hai sahi";
      } else joker {
        tell joker "nahi sahi";
      }
      bye joker
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - galat variables comparison, should success`,
    input: `
      hi joker;
      joker ye hai a = galat;
      joker ye hai b = galat;
      if joker (a == b) {
        tell joker "hai galat";
      } else joker {
        tell joker "nahi galat";
      }
      bye joker
    `,
    output: "hai galat",
  },
  {
    name: `binaryExpression print test with boolean expression - galat variables comparison with string galat, should success`,
    input: `
      hi joker;
      joker ye hai a = "galat";
      joker ye hai b = galat;
      if joker (a == b) {
        tell joker "hai galat";
      } else joker {
        tell joker "nahi galat";
      }
      bye joker
    `,
    output: "nahi galat",
  },
  {
    name: "printStatement test with multiple expressions, should success",
    input: `
      hi joker;
      joker ye hai a = 2, b = 60;
      tell joker (a * (4 + 8) + 10), b;
      bye joker
    `,
    output: "34 60",
  },
  {
    name: "printStatement test with multiple expressions and re assigning value of one variable, should success",
    input: `
      hi joker;
      joker ye hai a = 2, b = 60;

      a = b + 3;
      tell joker a, b;
      bye joker
    `,
    output: "63 60",
  },
  {
    name: "printStatement test with multiple expressions & without any variables, should success",
    input: `
      hi joker;
      tell joker "hello", sahi, galat;
      bye joker
    `,
    output: "hello sahi galat",
  },
  {
    name: "printStatement test with zero, should success",
    input: `
      hi joker;
      tell joker zero;
      bye joker;
    `,
    output: "zero",
  },
  {
    name: "printStatement test with zero as second parameter, should success",
    input: `
      hi joker;
      tell joker 10, zero;
      bye joker;
    `,
    output: "10 zero",
  },
  {
    name: "printStatement test with string concatenation, should success",
    input: `
      hi joker;
      tell joker "hello" + "crap";
      bye joker;
    `,
    output: "hellocrap",
  },
  {
    name: "printStatement test with multiple expresions including zero, should success",
    input: `
      hi joker;
      joker ye hai a = 70;
      tell joker 6*5, zero, "jamtara", a;
      bye joker;
    `,
    output: "30 zero jamtara 70",
  },
  {
    name: "printStatement test with zero variable, should success",
    input: `
      hi joker;
      joker ye hai a;
      tell joker a;
      bye joker;
    `,
    output: "zero",
  },
  {
    name: `printStatement test with string "undefined", should success`,
    input: `
      hi joker;
      tell joker "undefined";
      bye joker;
    `,
    output: "undefined",
  },
  {
    name: `printStatement test with zero variable, should success`,
    input: `
      hi joker;
      joker ye hai a;
      tell joker a;
      bye joker;
    `,
    output: "zero",
  },
  {
    name: `printStatement test with sahi variable, should success`,
    input: `
      hi joker;
      joker ye hai a = sahi;
      tell joker a;
      bye joker;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with galat variable, should success`,
    input: `
      hi joker;
      joker ye hai a = galat;
      tell joker a;
      bye joker;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with assignment expression, should success`,
    input: `
      hi joker;
      joker ye hai a;
      tell joker a = 90;
      bye joker;
    `,
    output: "90",
  },
  {
    name: `printStatement test with logical AND, should success`,
    input: `
      hi joker;
      tell joker 9 && 10;
      bye joker;
    `,
    output: "10",
  },
  {
    name: `printStatement test with logical OR, should success`,
    input: `
      hi joker;
      tell joker 9 || 10;
      bye joker;
    `,
    output: "9",
  },
  {
    name: `printStatement test with logical - 1, should success`,
    input: `
      hi joker;
      tell joker galat && sahi;
      bye joker;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with logical - 2, should success`,
    input: `
    hi joker;
    joker ye hai a = sahi;
    tell joker a && galat;
    bye joker;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with logical - 3, should success`,
    input: `
    hi joker;
    joker ye hai a = sahi;
    tell joker a && sahi;
    bye joker;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with equality, should success`,
    input: `
      hi joker;
      tell joker 9 == 10;
      bye joker;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with inequality, should success`,
    input: `
      hi joker;
      tell joker 9 != 10;
      bye joker;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with logical OR, should success`,
    input: `
      hi joker;
      tell joker 9 || 10;
      bye joker;
    `,
    output: "9",
  },
  {
    name: `printStatement test with logical OR - 2, should success`,
    input: `
      hi joker;
      tell joker galat || sahi;
      bye joker;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with boolean sahi galat and logical, should success`,
    input: `
      hi joker;
      tell joker sahi != 10;
      bye joker;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with boolean sahi and string "sahi", should success`,
    input: `
      hi joker;
      tell joker "sahi" == sahi;
      bye joker;
    `,
    output: "galat",
  },
  // while statement / loop tests
  {
    name: `whileStatement test with 1 time loop, should success`,
    input: `
      hi joker;
      joker ye hai a = 0;
      jab tak joker (a < 1) {
        tell joker "joker";
        a += 1;
      }
      bye joker;
    `,
    output: "joker",
  },
  {
    name: `whileStatement test with single break statement, should success`,
    input: `
      hi joker;
      jab tak joker (sahi) 
        stop this joker;
      tell joker "end";
      bye joker;
    `,
    output: "end",
  },
  {
    name: `whileStatement test with nested loops, should success`,
    input: `
      hi joker;
      joker ye hai a = 0;
      jab tak joker (a < 2) {
        jab tak joker (sahi)
          stop this joker;
        tell joker "hello";
        if joker (sahi)
          stop this joker;
      }
      bye joker;
    `,
    output: "hello",
  },
  {
    name: `whileStatement with multiple breaks, should success`,
    input: `
      hi joker;
      joker ye hai a = 0;
      jab tak joker (a < 2) {
        tell joker "hello";
        if joker (sahi)
          stop this joker;
        stop this joker;
        stop this joker;
      }
      bye joker;
    `,
    output: "hello",
  },
  // if statement tests
  {
    name: `if statement success test - 1: only if, should success`,
    input: `
    hi joker
    if joker (sahi) {
      tell joker "joker";
    }
    bye joker;
    `,
    output: "joker",
  },
  {
    name: `if statement success test - 2: if else both, should success`,
    input: `
    hi joker
    if joker (sahi) {
      tell joker "sahi";
    } else joker {
      tell joker "galat";
    }
    bye joker;
    `,
    output: "sahi",
  },
  {
    name: `if statement success test - 3: if only with comarison condn, should success`,
    input: `
    hi joker
    joker ye hai x = 9;
    if joker (x >= 9) {
      x = 5;
      tell joker x;
    } 
    bye joker;
    `,
    output: "5",
  },
  // else-if statement tests
  {
    name: `else-if statement success test - 1: if with one else-if, should success`,
    input: `
    hi joker
    if joker (galat) {
      tell joker "galat";
    } nahi to joker (sahi) {
      tell joker "sahi";
    }
    bye joker;
    `,
    output: "sahi",
  },
  {
    name: `else-if statement success test - 2: if with multiple else-ifs, should success`,
    input: `
    hi joker
    joker ye hai x = 10;
    if joker (x < 5) {
      tell joker "x < 5";
    } nahi to joker (x < 8) {
      tell joker "x < 8";
    } nahi to joker (x < 12) {
      tell joker "x < 12";
    } nahi to joker (x < 15) {
      tell joker "x < 15";
    }
    bye joker;
    `,
    output: "x < 12",
  },
  {
    name: `else-if statement success test - 3: nested if-else-if ladder, should success`,
    input: `
    hi joker
    joker ye hai a = 15;
    if joker (a < 0) {
      tell joker "a < 0";
    } nahi to joker (a > 0) {
      if joker (a < 10) {
        tell joker "a < 10";
      } nahi to joker (a < 20) {
        tell joker "a < 20";
      }
    }
    bye joker
    `,
    output: "a < 20",
  },
  {
    name: `else-if statement success test - 4: if-else-if ladder evaluating to else, should success`,
    input: `
    hi joker
    joker ye hai x = 15;
    if joker (x < 5) {
      tell joker "x < 5";
    } nahi to joker (x < 8) {
      tell joker "x < 8";
    } nahi to joker (x < 12) {
      tell joker "x < 12";
    } else joker {
      tell joker "x > 12";
    }
    bye joker;
    `,
    output: "x > 12",
  },
  // logical expression test
  {
    name: `logical "&&" test with sahi galat, should success`,
    input: `
        hi joker
        if joker (sahi && galat) {
          tell joker "sahi";
        } else joker {
          tell joker "galat";
        }
        bye joker;
      `,
    output: `galat`,
  },
  // modulus operator test
  {
    name: `modulus operator "%" test, should success`,
    input: `
        hi joker
        tell joker 90 % 9;
        bye joker;
      `,
    output: `0`,
  },
  {
    name: `modulus operator "%" test - 2, should success`,
    input: `
        hi joker
        tell joker 27 % 5;
        bye joker;
      `,
    output: `2`,
  },
  {
    name: `modulus operator "%" test - 2, should success`,
    input: `
        hi joker
        tell joker 5 % 20;
        bye joker;
      `,
    output: `5`,
  },
  {
    name: `whileStatement test with single continue statement, should success`,
    input: `
      hi joker;
      joker ye hai a = 5;
      joker ye hai step = 0;
      jab tak joker (a > 0) {
        step += 1;
        if joker (a % 2 != 0){
          a -= 2;
          look for next joker;
        }
        a -= 1;
      }
      tell joker step;
      bye joker;
    `,
    output: "3",
  },
  {
    name: `whileStatement test with multiple continue statement, should success`,
    input: `
      hi joker;
      joker ye hai a = 5;
      joker ye hai step = 0;
      jab tak joker (a > 0) {
        step += 1;
        if joker (a % 2 == 0){
          a -= 2;
          look for next joker;
        }
        a -= 1;
        look for next joker;
        tell joker "oye oye oye.. yha tk nhi aana tha joker";
      }
      tell joker step;
      bye joker;
    `,
    output: "3",
  },
  {
    // step:  1 => 2
    // a: 10 => 7 => 6 => 3 => 2 => -1
    name: `whileStatement test with single continue statement without block, should success`,
    input: `
      hi joker;
      joker ye hai a = 10;
      joker ye hai step = 0;
      jab tak joker (a > 0) {
        if joker (a % 2 == 0){
          a -= 3;
          look for next joker;
        }
        a -= 1;
        if joker (step == 1) look for next joker
        step += 1;
      }
      tell joker step;
      bye joker;
    `,
    output: "1",
  },
];