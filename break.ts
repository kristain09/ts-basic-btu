var CollectionObject1:number[] = [30, 0, 7];
function CollectionOperation1 (CollectionOperand:number[]):void
{
    const COUNT1 = 3;
    var counter1;
    for (counter1 = 0; counter1 < COUNT1; counter1++)
        if (CollectionOperand[counter1] == 0)
            break;
    console.log (counter1);
}
CollectionOperation1 (CollectionObject1);
