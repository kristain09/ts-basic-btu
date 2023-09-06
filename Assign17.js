var object1 = function () { };
console.log(object1); // unnamed empty procedure
var object1 = function () { var object2; };
console.log(object1); // unnamed non-empty procedure
object1 = function operation1() { };
console.log(object1); // named empty procedure
object1 = function operation1() { var object2; };
console.log(object1); // named non-empty procedure
object1 = function () { return (2); };
console.log(object1); // unnamed non-empty function
object1 = function operation1() { return (2); };
console.log(object1); // named non-empty function
