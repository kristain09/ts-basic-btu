function operation1():void
{ }
var object1:void = operation1();
console.log (object1); // result: undefined
var object2 = function operation1():void { };
console.log (object2); // result: [Function: operation1]
var object3 = operation1;
console.log (object3); // result: [Function: operation1]