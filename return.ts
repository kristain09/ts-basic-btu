var CollectionObject1 :number[][] = Array
(
    Array (50, 21, 1),
    Array (30, 0, 7),
    Array (60, -1, 8)
);

var sum = 0;
function CollectionOperation1 (CollectionOperand:number[][]):number
{
    const COUNT1:3 = 3, COUNT2:3 = 3;
    var counter1:number, counter2:number;
    for (counter1 = 0; counter1 < COUNT1; counter1++)
        for (counter2 = 0; counter2 < COUNT2; counter2++)
        {
            if (CollectionOperand[counter1][counter2] != 0)
                sum += CollectionOperand[counter1][counter2];
            else
                return (sum);
        }
    console.log ('This message never comes to screen');
}
sum = CollectionOperation1 (CollectionObject1);
console.log (sum);
