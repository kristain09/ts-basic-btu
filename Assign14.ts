function operation1():void
{ var $object2:number = 2; }

var object1:void = operation1();
console.log (object1);

function operation2():void
{ var $object3:number = 3; }

object1 = operation2();
console.log (object1)