class RecordType
{
    column1:Boolean;
    column2:String;
}

var recordObject: RecordType = new RecordType();
var recordObject2: RecordType = new RecordType();

recordObject.column1 = true;
recordObject2.column2 = "something"

console.log(recordObject2.column1);
console.log(recordObject2.column2);

