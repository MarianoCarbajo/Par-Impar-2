let numero: number = 0;
while (numero <= 0) {
  numero = Number(prompt("Ingrese un número mayor a cero:"));
}
if (numero % 2 === 0) {
  console.log("El número " + numero + " es par");
} else {
  console.log("El número " + numero + " es impar");
}
