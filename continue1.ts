var CollectionObject1:number[] = [30, -1, 7];

function CollectionOperation1 (CollectionOperand:number[]):void
{
    const COUNT1 = 3;
    var counter1, sum = 0;
    for (counter1 = 0; counter1 < COUNT1; counter1++)
    {
        if (CollectionOperand[counter1] != -1)
            sum += CollectionOperand[counter1];
        else
            continue;
    }
    console.log (sum);
}
CollectionOperation1 (CollectionObject1)