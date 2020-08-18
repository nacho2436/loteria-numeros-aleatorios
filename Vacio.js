

var z = aleatorio (0, 9);
document.write(z);




function aleatorio (min, max)
{
  var resultado;
  resultado = Math.floor(Math.random() *(max- min + 1)) + min;
  return resultado;
}

