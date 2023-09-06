var object1 = function ():void { }
console.log (object1); // unnamed empty procedure
var object1 = function ():void { var object2; }
console.log (object1); // unnamed non-empty procedure
object1 = function operation1 ():void { }
console.log (object1); // named empty procedure
object1 = function operation1 ():void { var object2; }
console.log (object1); // named non-empty procedure
object1 = function ():number { return (2); }
console.log (object1); // unnamed non-empty function
object1 = function operation1 ():number { return (2); }
console.log (object1); // named non-empty function