console.log ('Fahrenheit Celcius');
console.log ('===================');

var Temps:number[] = [20.0, 30.0, 40.0, 50.0, 60.0];

var i:number = 0, count:number = Temps.length;

while (i < count)
{
    console.log(Temps[i], ' ', (Temps[i] - 32) * 5.0/9.0);
    i++
}
