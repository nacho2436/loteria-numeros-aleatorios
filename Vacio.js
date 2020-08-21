

var z;
var b;
var c;
var d;


for (var i=0; i<5; i++)
{

 z = aleatorio (0, 9);
 b = aleatorio (0, 9);
 c = aleatorio (0, 9);
 d = aleatorio (0, 9);
 

document.write(z,b,c,d,  + " -");

}


function aleatorio (min, max)
{
  var resultado;
  resultado = Math.floor(Math.random() *(max- min + 1)) + min;
  return resultado;
}
