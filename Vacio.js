

var z;
var b;
var c;
var d;


for (var i=0; i<5; i++)
{

 z = aleatorio (1, 43);
 b = aleatorio (1, 16);
 

document.write(z + "\n -");

}

for (var i=0; i<1; i++)
{

 
 b = aleatorio (1, 16);
 

document.write(" <br> la super balota " + b);

}




function aleatorio (min, max)
{
  var resultado;
  resultado = Math.floor(Math.random() *(max- min + 1)) + min;
  return resultado;
}
