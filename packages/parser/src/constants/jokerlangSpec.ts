export const TokenTypes = {
  NULL_TYPE: null,

  HI_joker_TYPE: "hello",

  BYE_joker_TYPE: "bye",

  tell_joker_TYPE: "tell",

  joker_YE_HAI_TYPE: "this is",

  if_joker: "if this",

  else_joker: "else this",

  NAHI_TO_joker: "or else this is",

  JAB_TAK_joker: "until this",

  BAS_KAR_joker: "stop this",

  AGLA_DEKH_joker: "look for next",

  zero_TYPE: "zero",

  SEMI_COLON_TYPE: ";",

  OPEN_CURLY_BRACE_TYPE: "{",

  CLOSED_CURLY_BRACE_TYPE: "}",

  OPEN_PARENTHESIS_TYPE: "(",

  CLOSED_PARENTHESIS_TYPE: ")",

  COMMA_TYPE: ",",

  NUMBER_TYPE: "NUMBER",

  IDENTIFIER_TYPE: "IDENTIFIER",

  SIMPLE_ASSIGN_TYPE: "SIMPLE_ASSIGN",

  COMPLEX_ASSIGN_TYPE: "COMPLEX_ASSIGN",

  ADDITIVE_OPERATOR_TYPE: "ADDITIVE_OPERATOR",

  MULTIPLICATIVE_OPERATOR_TYPE: "MULTIPLICATIVE_OPERATOR",

  RELATIONAL_OPERATOR: "RELATIONAL_OPERATOR",

  EQUALITY_OPERATOR: "EQUALITY_OPERATOR",

  STRING_TYPE: "STRING",

  BOOLEAN_TYPE: "BOOLEAN",

  LOGICAL_AND: "LOGICAL_AND",

  LOGICAL_OR: "LOGICAL_OR"
};

export const SPEC = [
  // Whitespcaes
  { regex: /^\s+/, tokenType: TokenTypes.NULL_TYPE },

  // singke line Comments
  { regex: /^\/\/.*/, tokenType: TokenTypes.NULL_TYPE },

  // multi line comments
  { regex: /^\/\*[\s\S]*?\*\//, tokenType: TokenTypes.NULL_TYPE },

  // Symtells, delimiters
  { regex: /^;/, tokenType: TokenTypes.SEMI_COLON_TYPE },
  { regex: /^\{/, tokenType: TokenTypes.OPEN_CURLY_BRACE_TYPE },
  { regex: /^\}/, tokenType: TokenTypes.CLOSED_CURLY_BRACE_TYPE },
  { regex: /^\(/, tokenType: TokenTypes.OPEN_PARENTHESIS_TYPE },
  { regex: /^\)/, tokenType: TokenTypes.CLOSED_PARENTHESIS_TYPE },
  { regex: /^,/, tokenType: TokenTypes.COMMA_TYPE },

  //Keywords
  { regex: /^\bhi joker\b/, tokenType: TokenTypes.HI_joker_TYPE },
  { regex: /^\bbye joker\b/, tokenType: TokenTypes.BYE_joker_TYPE },
  { regex: /^\btell joker\b/, tokenType: TokenTypes.tell_joker_TYPE },
  { regex: /^\bjoker ye hai\b/, tokenType: TokenTypes.joker_YE_HAI_TYPE },
  { regex: /^\bif joker\b/, tokenType: TokenTypes.if_joker },
  { regex: /^\bnahi to joker\b/, tokenType: TokenTypes.NAHI_TO_joker },
  { regex: /^\belse joker\b/, tokenType: TokenTypes.else_joker },
  { regex: /^\bzero\b/, tokenType: TokenTypes.zero_TYPE },
  { regex: /^\bjab tak joker\b/, tokenType: TokenTypes.JAB_TAK_joker },
  { regex: /^\bstop this joker\b/, tokenType: TokenTypes.BAS_KAR_joker },
  { regex: /^\blook for next joker\b/, tokenType: TokenTypes.AGLA_DEKH_joker },

  // Number
  { regex: /^-?\d+/, tokenType: TokenTypes.NUMBER_TYPE },

  // Boolean
  { regex: /^\bsahi\b/, tokenType: TokenTypes.BOOLEAN_TYPE },
  { regex: /^\bgalat\b/, tokenType: TokenTypes.BOOLEAN_TYPE },

  // Identifier
  { regex: /^\w+/, tokenType: TokenTypes.IDENTIFIER_TYPE },

  // Equality operator: ==, !=
  { regex: /^[=!]=/, tokenType: TokenTypes.EQUALITY_OPERATOR },

  // Assignment operators: =, *=, /=, +=, -=
  { regex: /^=/, tokenType: TokenTypes.SIMPLE_ASSIGN_TYPE },
  { regex: /^[\*\%\/\+\-]=/, tokenType: TokenTypes.COMPLEX_ASSIGN_TYPE },

  // operator
  { regex: /^[+\-]/, tokenType: TokenTypes.ADDITIVE_OPERATOR_TYPE },
  { regex: /^[*\/\%]/, tokenType: TokenTypes.MULTIPLICATIVE_OPERATOR_TYPE },
  { regex: /^[><]=?/, tokenType: TokenTypes.RELATIONAL_OPERATOR },

  // logical operators: &&, ||
  { regex: /^&&/, tokenType: TokenTypes.LOGICAL_AND },
  { regex: /^\|\|/, tokenType: TokenTypes.LOGICAL_OR },

  // String
  { regex: /^"[^"]*"/, tokenType: TokenTypes.STRING_TYPE },
  { regex: /^'[^']*'/, tokenType: TokenTypes.STRING_TYPE },
];

export type Spec = typeof SPEC;
