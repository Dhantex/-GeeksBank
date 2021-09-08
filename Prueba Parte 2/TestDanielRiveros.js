
//Fibonacci automático
var nFibonacci = 20;
const fibonnacciRecursivoAuto = (num, objectFib) => {

    objectFib = objectFib || {};

    if (objectFib[num]){
        return objectFib[num];
    }

    if (num < 2){
        return num;
    }

    return objectFib[num] = fibonnacciRecursivoAuto(num - 1, objectFib) + fibonnacciRecursivoAuto(num - 2, objectFib);
};

 for (let i = 0; i < nFibonacci; i++){
    console.log(fibonnacciRecursivoAuto(i));
 }

//Fibonacci de un número X con recursividad
const fibonnacciRecursivo = numero =>{
      if(numero ==1 || numero == 2){
          return numero
      }
      else{
          return (fibonnacciRecursivo(numero-1)+fibonnacciRecursivo(numero-2))
      }
  }

console.log(fibonnacciRecursivo(20));


//Filtros de valores
  const ArrayBusqueda = [24,17,35,21,7,100,101,40];
const resultBusqueda = ArrayBusqueda.filter((valorX) => valorX > 20);

//Imprime array ordenado
resultBusqueda.sort((a,b) =>{
    return a-b;
})

console.log(`Sort: ${resultBusqueda}`);

//Imprime Elementos
resultBusqueda.map((item) =>{
    console.log(`Map: ${item}`);
})

//Imprime suma de números
var suma = resultBusqueda.reduce((a,b) => a+b);
console.log(`Reduce: ${suma}`);


//Busqueda binaria
function busquedaBinaria(arrayValores, busqueda) {

    const PuntoBusqueda = Math.floor(arrayValores.length / 2);
  
    if (arrayValores[PuntoBusqueda] === busqueda) {
      return arrayValores[PuntoBusqueda];
    }
  
    if (arrayValores[PuntoBusqueda] < busqueda && arrayValores.length > 1) {
     return busquedaBinaria(arrayValores.slice(PuntoBusqueda), busqueda);
    }
  
    if (arrayValores[PuntoBusqueda] > busqueda && arrayValores.length > 1) {
     return busquedaBinaria(arrayValores.slice(0, PuntoBusqueda), busqueda);
    }
  
    return "No se encontró ningún valor en el array";
  }
  
  var arrayBuscado = [200, 1000, 423, 400, 550, 222, 1, 5, 333];
 
 var result = busquedaBinaria(arrayBuscado, 550);
console.log(`El resultado es: ${result}`)



