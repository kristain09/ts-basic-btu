var RecordType1 = /** @class */ (function () {
    function RecordType1(operand1) {
        this.column1 = operand1;
    }
    return RecordType1;
}());
var object1 = new RecordType1(true);
console.log(object1.column1);
var object2 = RecordType1;
var object3 = new object2(1.5);
console.log(object3.column1);
