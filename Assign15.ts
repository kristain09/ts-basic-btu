function operation1():void
{
    "world.";
}

var object1:any = operation1();
console.log (object1);
object1 = operation1;
console.log (object1);
function operation1():string //Duplicate function implementation.
{ return ("Hello"); }

object1 = operation1();
console.log (object1);
object1 = operation1;
console.log (object1);