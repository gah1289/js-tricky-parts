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

"outer func:  this.foo = foo ";
"outer func:  self.foo = foo";
"inner func:  this.foo = undefined");
"inner func:  self.foo = foo";

**4. What is the significance of, and reason for, wrapping the entire content of a JavaScript source file in a function block?**

It creates a closure around the enire contents of the file. That way, users can't change the prototype. 

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

***(a) What gets logged to the console when the user clicks on “Button 4” and why?***

Since var is used, "5" will get logged because the loop has already run. Therefore, i is set to 5 by the time the buttons are added to the body.

***(b) Provide one or more alternate implementations that will work as expected.***

Use let instead of var. 

```for (let i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', function(){ console.log(i); });
  document.body.appendChild(btn);
}
```

***12.Assuming d is an “empty” object in scope, say:***

```var d = {};```
***…what is accomplished using the following code?***

```[ 'zebra', 'horse' ].forEach(function(k) {
	d[k] = undefined;
});
```
An object is created with zebra and horse as keys and undefined as their values.
{
  zebra:undefined,
  horse:undefined
}

***13.What will the code below output to the console and why?***

```
var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
```