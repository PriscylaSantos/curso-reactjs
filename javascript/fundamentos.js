// Sintaxe básica - case sensitive
var nome = "nome escrito em minúsculo"; 
var NOME = "nome escrito em maiúsculo"; 
console.log(nome);
console.log(NOME);


// undefined e ReferenceError
var a;
console.log("O valor de a é " + a);
// console.log("O valor de a é " + b);


// undefined 
var myArray = [];
console.log(myArray);
console.log("myArray[0] é undefined?", myArray[0] === undefined);
if (myArray[0]){
     console.log("myArray[0] é true.");
}
else {
    console.log("myArray[0] é false.");
}

var a;
console.log("Qual valor de a?", a + 2); 


// null
var a = null
console.log("Valor de a é", a); 
console.log("Valor de a * 8:", a * 8); // null se comporta como  0.
console.log("Valor de a + 8:", a + 10); // null se comporta como  0.

console.log("a é null?", a === null);
if (a){
     console.log("a é true."); // não será executado
}
else {
    console.log("a é false.");
}

// const
const  NA = null;
console.log("Valor de NA é", NA);

const PI = 3.14;
console.log("Valor de PI é", PI);
// const PI = 3.1415; // SyntaxError: Identifier 'PI' has already been declared

// const vm; // SyntaxError: Missing initializer in const declaration


// Tipos de dados
var string = "oLÁ, mUNDO!";
var number = 1;
var boolean = true;
var array = ["A", "B", "C"];
var object = {nome: "Fulano", idade: 30};
var nulo = null;
var indefinido = undefined;

console.log("string:", string);
console.log("number:", number);
console.log("boolean:", boolean);
console.log("array:", array);
console.log("object:", object);
console.log("nulo:", nulo);
console.log("indefinido:", indefinido);


// Tipos de dados
var resposta = 42;
console.log("resposta:", resposta);
resposta = "A resposta é 42.";
console.log("resposta:", resposta);

// Tipos de dados: operador +
var resposta = "A resposta é " + 42;
console.log("resposta:", resposta);
resposta = 42 + " é a resposta";
console.log("resposta:", resposta);

console.log('"37" - 7 = ', "37" - 7);
console.log("37 - 7 = ", 37 - 7);
console.log('"37" + 7 = ', "37" + 7);
console.log("37 + 7 = ", 37 + 7);

// operadores aritméticos
let c = 10, b = 5;
console.log("Adição", c + b);  // Adição (15)
console.log("Subtração", c - b);  // Subtração (5)
console.log("Multiplicação", c * b);  // Multiplicação (50)
console.log("Divisão", c / b);  // Divisão (2)
console.log("Módulo", c % b);  // Módulo (0)
console.log("Exponenciação", c ** b); // Exponenciação (100000)


// operadores de comparação
console.log('10 == "10"', 10 == "10");  // true (compara apenas valor)
console.log('10 === "10"', 10 === "10"); // false (compara valor e tipo)
console.log("10 != 5", 10 != 5);     // true
console.log("10 > 5", 10 > 5);      // true
console.log("10 <= 5", 10 <= 5);     // false


// operadores lógicos
console.log("true && true = ", true && true);  // true  (AND)
console.log("false || true = ", false || true); // true  (OR)
console.log("!false = ", !false);        // true  (NOT)
console.log("true && false = ", true && false); // false (AND)
console.log("true || false = ", true || false); // true  (OR)
console.log("!true = ", !true);         // false (NOT)


// if e else
let idade_maioridade = 18;
let idade_idoso = 65;
let idade = 30;

if (idade >= idade_idoso) {
    console.log("Idoso");
}
else if (idade >= idade_maioridade) {
    console.log("Maior de idade");
}
else {
    console.log("Menor de idade");
}


// switch
let fruta = "Manga";
switch (fruta) {
    case "Laranja":
        console.log("O quilo da laranja está R$0,59.");
        break;
    case "Maçã":
        console.log("O quilo da maçã está R$0,32.");
        break;
    case "Banana":
        console.log("O quilo da banana está R$0,48.");
        break;
    case "Cereja":
        console.log("O quilo da cereja está R$3,00.");
        break;
    case "Manga":
        console.log("O quilo da manga está R$0,56.");
        break;
    case "Mamão":
        console.log("O quilo do mamão está R$2,23.");
        break;
    default:
        console.log("Desculpe, não temos " + fruta + ".");
}

// for
for (let i = 0; i < 5; i++) {
    console.log("i:", i);
}

var passo;
for (passo = 0; passo < 5; passo++) {
    console.log("passo", passo + 1);
}


// while
var n = 0;
var x = 0;
while (n < 3) {
    console.log(`Iteração ${n + 1}`);
    console.log(`   > Valor inicial de x: ${x}`);
    
    n++;
    x += n;
    
    console.log(`   > Valor final de x após incremento: ${x}`);
    console.log("──────────────────────────");
}

// do while
var n = 0;
var x = 0;          
do {
    console.log(`Iteração ${n + 1}`);
    console.log(`   > Valor inicial de x: ${x}`);
    
    n++;
    x += n;
    
    console.log(`   > Valor final de x após incremento: ${x}`);
    console.log("──────────────────────────");
}
while (n < 3);


// forEach
let numeros = [10, 20, 30];
numeros.forEach(numero => console.log(numero));
 
