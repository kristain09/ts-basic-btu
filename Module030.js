var RecordType = /** @class */ (function () {
    function RecordType() {
    }
    return RecordType;
}());
var recordObject = new RecordType();
var recordObject2 = new RecordType();
recordObject.column1 = true;
recordObject2.column2 = "something";
console.log(recordObject2.column1);
console.log(recordObject2.column2);
