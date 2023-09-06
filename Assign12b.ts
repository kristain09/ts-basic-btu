function operation1():void
{ }
var object1:any = operation1();
console.log (object1);
class RecordType1
{ }
object1= RecordType1; //error typeof RecordType is not assignable to type void
console.log (object1);