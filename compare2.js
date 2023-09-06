var RecordType1 = /** @class */ (function () {
    function RecordType1(operand1) {
        this.column1 = operand1;
    }
    RecordType1.prototype.get_column1 = function () { return (this.column1); };
    return RecordType1;
}());
function equals(RecordOperand1, RecordOperand2) {
}
var RecordObject1 = new RecordType1(1);
var RecordObject2 = new RecordType1(2);
console.log(equals(RecordObject1, RecordObject2));
