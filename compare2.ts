class RecordType1
{
    column1:number
    constructor (operand1)
    { this.column1 = operand1; }
    get_column1():number{ return (this.column1); }
}
function equals (RecordOperand1:RecordType1, RecordOperand2:RecordType1):void
{
}

var RecordObject1:RecordType1 = new RecordType1 (1);
var RecordObject2 :RecordType1 = new RecordType1 (2);
console.log (equals(RecordObject1, RecordObject2));
