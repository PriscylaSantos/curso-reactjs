class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando`);
    }

    comer() {
        console.log(`${this.nome} está comendo`);
    }

    beber() {
        console.log(`${this.nome} está bebendo`);
    }
}

console.log("\nExemplo 1 \n");
const luiz = new Pessoa('Luiz', 'Miranda');
console.log(luiz);
console.log(luiz.nome, luiz.sobrenome);
console.log();
const ana = new Pessoa('Ana', 'Barabosa');
console.log(ana);
console.log(ana.nome, ana.sobrenome);


console.log("\nExemplo 2 \n");
luiz.falar();
ana.comer();
console.log();
luiz.comer();
ana.beber();
console.log();
luiz.beber();
ana.falar();


console.log("\nExemplo 3 \n");
function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando`);
};

const pessoa1 = new Pessoa2('Luiz', 'Miranda');
console.log(luiz);
console.log(luiz.nome, luiz.sobrenome);
console.log();
const pessoa2 = new Pessoa2('Ana', 'Barabosa');
console.log(ana);
console.log(ana.nome, ana.sobrenome);

