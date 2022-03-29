<h1 align="center">joker Lang</h1>
<p align="center">
<a href="https://lgtm.com/projects/g/DulLabs/joker-lang/alerts/"><img alt="Total alerts" src="https://img.shields.io/lgtm/alerts/g/DulLabs/joker-lang.svg?logo=lgtm&logoWidth=18"/></a>
<a href="https://lgtm.com/projects/g/DulLabs/joker-lang/context:javascript"><img alt="Language grade: JavaScript" src="https://img.shields.io/lgtm/grade/javascript/g/DulLabs/joker-lang.svg?logo=lgtm&logoWidth=18"/></a>
<a href="https://github.com/DulLabs/joker-lang/actions/workflows/node.js.yml/badge.svg"><img alt="Build" src="https://github.com/DulLabs/joker-lang/actions/workflows/node.js.yml/badge.svg"/></a>
<a href="https://jokerlang.js.org/"><img alt="Build" src="https://img.shields.io/badge/website-jokerlang.js.org-orange"/></a>
<a href="https://www.npmjs.com/package/jokerlang"><img alt="Build" src="https://img.shields.io/badge/npm-jokerlang-orange"/></a>
  
</p>
<p align="center">
  This is official repository for joker-lang.<br><br>
  <b>joker lang is a toy programming language written in Typescript.</b>
</p>
<br>

<h2 align="center">Installation</h2>

```
npm i -g jokerlang
```

<h2 align="center">Usage</h2>

<h4 align="left">Create a new file (<code>test.joker</code>)</h4>


<h4 align="left">Edit the file with a text editor.
You can also try out your code on <a href="https://jokerlang.js.org/#playground">joker Lang PlayGround</a></h4>

```
hi joker
  tell joker "Hello joker";
bye joker

```

<h4 align="left">Run</h4>

```
jokerlang test.joker
```

<h4 align="left">Output</h4>

```
hello joker
```

<h2 align="center">Documentation</h2>

<h3 align="center">General</h3>
<p align="center"><code>hi joker</code> is the entrypoint for the program and all program must end with <code>bye joker</code>. Anything outside of it will be ignored.</p>

```

This will be ignored

hi joker
// Write code here
bye joker

This too
```

<h3 align="center">Variables</h3>
<p align="center">Variables can be declared using <code>joker ye hai</code>.</p>

```

hi joker
  joker ye hai a = 10;
  joker ye hai b = "two";
  joker ye hai c = 15;
  a = a + 1;
  b = 21;
  c *= 2;
bye joker
```

<h3 align="center">Types</h3>
<p align="center">Numbers and strings are like other languages. Null values can be denoted using <code>zero</code>. <code>sahi</code> and <code>galat</code> are the boolean values.</p>

```

hi joker
  joker ye hai a = 10;
  joker ye hai b = 10 + (15*20);
  joker ye hai c = "two";
  joker ye hai d = 'ok';
  joker ye hai e = zero;
  joker ye hai f = sahi;
  joker ye hai g = galat;
bye joker
```

<h3 align="center">Built-ins</h3>
<p align="center">Use <code>tell joker</code> to print anything to console.</p>

```

hi joker
  tell joker "Hello World";
  joker ye hai a = 10;
  {
    joker ye hai b = 20;
    tell joker a + b;
  }
  tell joker 5, 'ok', zero , sahi , galat;
bye joker
```

<h3 align="center">Conditionals</h3>
<p align="center">jokerlang supports if-else-if ladder construct , <code>if joker</code> block will execute if condition is <code>sahi</code>, otherwise one of the subsequently added <code>nahi to joker</code> blocks will execute if their respective condition is <code>sahi</code>, and the <code>else joker</code> block will eventually execute if all of the above conditions are <code>galat</code>

```

hi joker
  joker ye hai a = 10;
  if joker (a < 20) {
    tell joker "a is less than 20";
  } nahi to joker ( a < 25 ) {
    tell joker "a is less than 25";
  } else joker {
    tell joker "a is greater than or equal to 25";
  }
bye joker
```

<h3 align="center">Loops</h3>
<p align="center">Statements inside <code>jab tak joker</code> blocks are executed as long as a specified condition evaluates to sahi. If the condition becomes <code>galat</code>, statement within the loop stops executing and control passes to the statement following the loop. Use <code>stop this joker</code> to break the loop and <code className="language-cpp">look for next joker</code> to continue within loop.</p>


```

hi joker
  joker ye hai a = 0;
  jab tak joker (a < 10) {
   a += 1;
   if joker (a == 5) {
    tell joker "andar se tell joker ", a;
    look for next joker;
   }
   if joker (a == 6) {
    stop this joker;
   }
   tell joker a;
  }
  tell joker "done";
bye joker
```

<h2 align="center">Development</h2>
<p align="center">You can explore abstract syntax tree(AST) of jokerlang <a href="https://jokerlang-ast.netlify.app/" target="_blank">here</a>.</p>








