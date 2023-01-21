***var vs. let vs. const***

*Scope*
- **var**:  var declarations are globally scoped or function/locally scoped.The scope is global when a var variable is declared outside a function. This means that any variable that is declared with var outside a function block is available for use in the whole window.var is function scoped when it is declared within a function. This means that it is available and can be accessed only within that function.
- **let** is block scoped.
- **const** is block scoped. 

*Declaration*
- **var** can be redeclared and updated.
- **let** can be updated but not redeclared.
- **const** cannot be updated or redeclared.

*Hoisting*
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. This means that if we do this:
- **var** variables are hoisted to the top of their scope and initialized with a value of undefined.
  ```
  console.log(greeter); // greeter is undefined
    greeter = "say hello"
  ```
  - **let** declarations are hoisted to the top. Unlike var which is initialized as undefined, the let keyword is not initialized. So if you try to use a let variable before declaration, you'll get a Reference Error.
  - **const** Just like let, const declarations are hoisted to the top but are not initialized.

***Set timeout to 0***
Invoking setTimeout with a callback, and zero as the second argument will schedule the callback to be run asynchronously, after the shortest possible delay - which will be around 10ms when the tab has focus and the JavaScript thread of execution is not busy.

An important piece of information is that when we use setTimeout and give it a delay of 0, it doesn't actually run immediately. It waits until the stack is empty before executing.