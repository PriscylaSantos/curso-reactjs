class ControleRemoto {
    constructor(tv, volume=0) {
        this.tv = tv;
        this.volume = volume;
    }
    static trocaPilha(quantidade=2) {
        console.log(`Ok, vou trocar ${quantidade} pilhas.`);
    }
    static coloracao() {
        console.log(`A cor do controle é preta.`);
    }
    static mostraClasse() {
        console.log(this);
    }
    aumentaVolume() {
        this.volume += 2;
        console.log(`Volume: ${this.volume}`);
    }
    mostraTV() {
        console.log(`Tv da marca ${this.tv}`);
    }

}

console.log("\nExemplo 1 \n");
ControleRemoto.trocaPilha();
ControleRemoto.trocaPilha(4);
ControleRemoto.coloracao();
console.log(ControleRemoto);


console.log("\nExemplo 2 \n");
const controle = new ControleRemoto('LG');
controle.aumentaVolume();
console.log(controle.volume);
controle.mostraTV();
console.log(controle);

console.log();

const controle2 = new ControleRemoto('Samsung', 10);
console.log(controle2.volume);
controle2.aumentaVolume();
controle2.mostraTV();
console.log(controle2);


console.log("\nExemplo 3 \n");
ControleRemoto.mostraClasse(); 