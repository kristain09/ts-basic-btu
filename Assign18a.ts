var object1 = function ():number { return (2); }
object1; // call unnamed non-empty function
object1(); // call unnamed non-empty function
var object2 = object1; //address or lambda expression
console.log (object2);
object1 = function operation1 ():number { return (2); } //address or lambda expression
object1; // call named non-empty function
object1(); // call named non-empty function\
object2 = object1; //address or can be called delegate or lambda expression
console.log (object2 + 1);