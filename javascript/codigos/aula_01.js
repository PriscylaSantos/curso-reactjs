console.log("\nExemplo 1\n");
const [a, b, c] = [1, 2, 3];
console.log(a, b, c);


console.log("\nExemplo 2\n");
const [d, , e] = [1, 2, 3];
console.log(d, e); 


console.log("\nExemplo 3\n");
const [f, g, ...restante] = [1, 2, 3, 4];
console.log(f, g); 
console.log(restante); 


console.log("\nExemplo 4\n");
const [[, h], [i]] = [[1, 2], [3]];
console.log(h, i);


console.log("\nExemplo 5\n");
const numeros = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
const [primeitoArray, ,] = numeros 
const [, segundoArray, ] = numeros 
const [, , terceiroArray] = numeros 
console.log(primeitoArray, segundoArray, terceiroArray);


console.log("\nExemplo 6\n");
const [, [,,numeroSeis]] = numeros 
console.log(numeroSeis);


console.log("\nExemplo 7\n");
const [primeiraLista, segundaLista, terceiraLista] = numeros
console.log(primeiraLista[2]);
console.log(segundaLista[1]);
console.log(terceiraLista[0]);
