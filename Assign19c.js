var RecordType1 = /** @class */ (function () {
    function RecordType1() {
    }
    return RecordType1;
}());
var RecordType2 = /** @class */ (function () {
    function RecordType2() {
    }
    return RecordType2;
}());
var object1 = RecordType1;
var object2 = RecordType1;
object1 === object2 ? console.log('Same address value') : console.log('Distinct address value');
object2 = RecordType2;
object1 === object2 ? console.log('Same address value') : console.log('Distinct address value');
