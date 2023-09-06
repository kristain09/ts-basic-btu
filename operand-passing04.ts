let CollectionObject1:number[] = [1, 2, 3];
function addToArray (CollectionOperand:number[], basic_operand:number):void
{ // collection-object is passed-by-address
    CollectionOperand.push (basic_operand); // Strange, treated like stack
} // the value may change after exiting an operation-body
console.log (CollectionObject1);
addToArray (CollectionObject1, 4); // 4 is actual-operand mapped to basic_operand
console.log (CollectionObject1);