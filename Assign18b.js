function add() { return (2); }
var object1 = add();
object1; // call unnamed non-empty function
var object2 = object1;
console.log(object2);
var object3 = function operation1() { return (2); };
object1; // call named non-empty function
object3; // call named non-empty function\
object2 = object3;
console.log(object2 + 1);
