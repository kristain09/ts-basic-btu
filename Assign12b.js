function operation1() { }
var object1 = operation1();
console.log(object1);
var RecordType1 = /** @class */ (function () {
    function RecordType1() {
    }
    return RecordType1;
}());
object1 = RecordType1; //error typeof RecordType is not assignable to type void
console.log(object1);
