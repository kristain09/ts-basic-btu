var RecordType1 = /** @class */ (function () {
    function RecordType1(operand1) {
        this.column1 = operand1;
    }
    return RecordType1;
}());
var RecordType2 = /** @class */ (function () {
    function RecordType2(operand1) {
        this.column2 = operand1;
    }
    return RecordType2;
}());
var object1 = new RecordType1(true);
var object2 = new RecordType2('Aha');
console.log(object1.column1);
console.log(object2.column2);
