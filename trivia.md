**1. What is a potential pitfall with using typeof bar === "object" to determine if bar is an object? How can this pitfall be avoided?**

Other items such as arrays will also show up as an object. It will also always show up as true because it is either an object or null. Null is also an object, so it will always show up as true. It's better to do  typeof bar === "object" && bar !==null or typeof bar === "objects" && bar.constructor===Object.

**2. What will the code below output to the console and why?**
```(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```
This is an immediately invoked function.
var is global.

b = 3
var a = b

'a defined? false'
'b defined? true'

if you were to do var a= b; var b= 3; both would be undefined.

**3.What will the code below output to the console and why?**
```var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();
```
self is global.

"outer func:  this.foo = bar ";
"outer func:  self.foo = bar";
"inner func:  this.foo = undefined");
"inner func:  self.foo = bar";

in the inner function, 'this' is set to the inner function. there is no 'foo' entry in the inner function.

**4. What is the significance of, and reason for, wrapping the entire content of a JavaScript source file in a function block?**

It creates a closure around the entire contents of the file. That way, users can't change the prototype. 

**5. What is the significance, and what are the benefits, of including 'use strict' at the beginning of a JavaScript source file?**

You can't use undeclared variables, so it prevents accidental globals. 

Answer:
- Makes debugging easier. Code errors that would otherwise have been ignored or would have failed silently will now generate errors or throw exceptions, alerting you sooner to problems in your code and directing you more quickly to their source.
Prevents accidental globals. Without strict mode, assigning a value to an undeclared variable automatically creates a global variable with that name. This is one of the most common errors in JavaScript. In strict mode, attempting to do so throws an error.
- Eliminates this coercion. Without strict mode, a reference to a this value of null or undefined is automatically coerced to the global. This can cause many headfakes and pull-out-your-hair kind of bugs. In strict mode, referencing a a this value of null or undefined throws an error.
- Disallows duplicate parameter values. Strict mode throws an error when it detects a duplicate named argument for a function (e.g., function foo(val1, val2, val1){}), thereby catching what is almost certainly a bug in your code that you might otherwise have wasted lots of time tracking down.
Note: It used to be (in ECMAScript 5) that strict mode would disallow duplicate property names (e.g. var object = {foo: "bar", foo: "baz"};) but as of ECMAScript 2015 this is no longer the case.
- Makes eval() safer. There are some differences in the way eval() behaves in strict mode and in non-strict mode. Most significantly, in strict mode, variables and functions declared inside of an eval() statement are not created in the containing scope (they are created in the containing scope in non-strict mode, which can also be a common source of problems).
- Throws error on invalid usage of delete. The delete operator (used to remove properties from objects) cannot be used on non-configurable properties of the object. Non-strict code will fail silently when an attempt is made to delete a non-configurable property, whereas strict mode will throw an error in such a case.

**6.Consider the two functions below. Will they both return the same thing? Why or why not?**

```function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}
```

no, foo2 will return undefined because return is on its own line. It will automatically insert a semicolon after return.

**7.What will the code below output? Explain your answer.**

```console.log(0.1 + 0.2); // 0.30000000000000004 because it will do the math and return the sum.
console.log(0.1 + 0.2 == 0.3) //false because it is checking to see if 0.1+0.2 is equal to 0.3
```
**8.In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?**

```(function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
})();
```
1 =>no delay 
4 =>no delay
3 => 0ms delay, slightly delayed
2 => 1s delay


**9.Write a simple function (less than 160 characters) that returns a boolean indicating whether or not a string is a palindrome.**

```
function isPalindrome(str){
  let reverse=str.toLowerCase().split('').reverse().join('')
  return reverse===str?true:false
}
```

**10.Write a sum method which will work properly when invoked using either syntax below.**
```console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

function sum(a,b){
  return a+b
}
```
**11. Consider the following code snippet:**

```
for (var i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', function(){ console.log(i); });
  document.body.appendChild(btn);
}
```

***(a) What gets logged to the console when the user clicks on “Button 4” and why?**

Since var is declared outside the for loop, it is global. "5" will get logged because the loop has already run. Therefore, i is set to 5 by the time the buttons are added to the body.

***(b) Provide one or more alternate implementations that will work as expected.**

Use let instead of var. 

```for (let i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', function(){ console.log(i); });
  document.body.appendChild(btn);
}
```

***12.Assuming d is an “empty” object in scope, say:**

```var d = {};```
***…what is accomplished using the following code?**

```[ 'zebra', 'horse' ].forEach(function(k) {
	d[k] = undefined;
});
```
An object is created with zebra and horse as keys and undefined as their values.
{
  zebra:undefined,
  horse:undefined
}

***13.What will the code below output to the console and why?**

```
var arr1 = "john".split(''); // ['j','o','h','n']
var arr2 = arr1.reverse(); // ['n','h','o','j']
var arr3 = "jones".split(''); // ['j','o','n','e','s']
arr2.push(arr3); ['n','h','o','j','j','o','n','e','s']
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
```

```array 1: length=5 last=j,o,n,e,s
 array 2: length=5 last=j,o,n,e,s
```
```
arr1
(5) 
0: "n"
1:"h"
2:"o"
3:"j"
4: (5) ['j', 'o', 'n', 'e', 's']
```

```
arr2
(5) 
0: "n"
1:"h"
2:"o"
3:"j"
4: (5) ['j', 'o', 'n', 'e', 's']
```

**14.What will the code below output to the console and why ?**

```
console.log(1 +  "2" + "2"); // 122. You're concatenating strings
console.log(1 +  +"2" + "2"); // 32 the extra + before the first "2" is treated as a unary operator). Thus, JavaScript converts the type of "2" to numeric and then applies the unary + sign to it (i.e., treats it as a positive number).
console.log(1 +  -"1" + "2"); // 02
console.log(+"1" +  "1" + "2"); //112, you're connecting 3 strings
console.log( "A" - "B" + "2"); //NaN2. you can't subtract string A from string B, but you can connect string 2
console.log( "A" - "B" + 2); //NaN - you can't subtract strings
```

**15.The following recursive code will cause a stack overflow if the array list is too large. How can you fix this and still retain the recursive pattern?**

```
var list = readHugeList();

var nextListItem = function() {
    var item = list.pop();

    if (item) {
        // process the list item...
        nextListItem();
    }
};
```
By adding a setTimeout set to 0, it creates a delay of about 4 ms. When nextListItem runs, it is pushed to the event queue and the function exits, leaving the call stack clear. 

```
var list = readHugeList();

var nextListItem = function() {
    if (!list.length) return "Done!"
    var item = list.pop();

    if (item) {
      
        // process the list item...
         setTimeout( nextListItem, 0);
    }
};
```
**16.What is a “closure” in JavaScript? Provide an example.**

 A closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

 example:

 ```
 function getValue(){
  let a=1

  function getValueHelper(){
    return a++
  }
  getValueHelper()
  
  console.log(a) //2
 }
 ```

 **17.What would the following lines of code output to the console?**
 
 ```
 console.log("0 || 1 = "+(0 || 1)); // 0||1 = 1 because 0 is falsy
console.log("1 || 2 = "+(1 || 2)); // 1||2 = 1
console.log("0 && 1 = "+(0 && 1)); // 0&&1 = 0 
console.log("1 && 2 = "+(1 && 2)); // 1 && 2 = 2
 ```

 The and (&&) operator. In an expression of the form X&&Y, X is first evaluated and interpreted as a boolean value. If this boolean value is false, then false (0) is returned and Y is not evaluated, since the “and” condition has already failed. 
 
 If this boolean value is “true”, though, we still don’t know if X&&Y is true or false until we evaluate Y, and interpret it as a boolean value as well.

 **18. What will be the output when the following code is executed? Explain.**

 ```
 console.log(false == '0') //true
console.log(false === '0') //false
 ```
== tries to coerce the values before comparing them. SIne 0 is falsy, it returns true.
=== is looking for an exact match and will return false. 

**19. What is the output out of the following code? Explain your answer.**

```
var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;
a[c]=456;

console.log(a[b]); // 456
```
 An object that is set as a key will stringify to [object Object]. So  you're setting ```a[object Object] = 123,``` then ```a[object Object]=456```

**20. What will the following code output to the console:**

```
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
```
The value of 10 factorial, aka ```3,628,800```

**21. Consider the code snippet below. What will the console output be and why?**

```
(function(x) {
    return (function(y) {
        console.log(x);
    })(2)
})(1);
```
It will return ```1```. You're setting x to 1 and y to 2, but you're console logging x.

**22. What will the following code output to the console and why:**

```
var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity()); // undefined
console.log(hero.getSecretIdentity()); //'John Doe'
```
You need to add parenthesis to ```var stoleSecretIdentity = hero.getSecretIdentity();``` to make it a method. 

**23. Create a function that, given a DOM Element on the page, will visit the element itself and all of its descendents (not just its immediate children). For each element visited, the function should pass that element to a provided callback function.**

**The arguments to the function should be:**

- **a DOM element**
- **a callback function (that takes a DOM element as its argument)****

```
function visitAll(element){
  console.log(element)
  if(element.children){
    for(let child of element.children){
      visitAll(child)
    }
  }
}
```

**24. Testing your this knowledge in JavaScript: What is the output of the following code?**

```
var length = 10;
function fn() {
	console.log(this.length); 
}

var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1);
```
```10```
```2```

Why isn’t it 10 and 5?

In the first place, as fn is passed as a parameter to the function method, the scope (this) of the function fn is window. var length = 10; is declared at the window level. It also can be accessed as window.length or length or this.length (when this === window.)

method is bound to Object obj, and obj.method is called with parameters fn and 1. Though method is accepting only one parameter, while invoking it has passed two parameters; the first is a function callback and other is just a number.

When fn() is called inside method, which was passed the function as a parameter at the global level, this.length will have access to var length = 10 (declared globally) not length = 5 as defined in Object obj.

Now, we know that we can access any number of arguments in a JavaScript function using the arguments[] array.

Hence arguments[0]() is nothing but calling fn(). Inside fn now, the scope of this function becomes the arguments array, and logging the length of arguments[] will return 2.

**25. Consider the following code. What will the output be, and why?**

```(function () {
    try {
        throw new Error();
    } catch (x) {
        var x = 1, y = 2;
        console.log(x);
    }
    console.log(x);
    console.log(y);
})();
```
```1
undefined
2
```
var statements are hoisted (without their value initialization) to the top of the global or function scope it belongs to, even when it’s inside a with or catch block. However, the error’s identifier is only visible inside the catch block. It is equivalent to:

```
(function () {
    var x, y; // outer and hoisted
    try {
        throw new Error();
    } catch (x /* inner */) {
        x = 1; // inner x, not the outer one
        y = 2; // there is only one y, which is in the outer scope
        console.log(x /* inner */);
    }
    console.log(x);
    console.log(y);
})();
```