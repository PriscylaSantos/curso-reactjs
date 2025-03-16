console.log("\nExemplo 1\n");
const pessoaUm = {
    idade: null,
    endereco: {
        rua: 'Avenida Brasil',
        numero: 3201252115
    }
};
const { 
    nome: nomePessoaUm = "Não informado",
    sobrenome: sobrenomePessoaUm = "Não informado",
    idade: idadePessoaUm = "Não informado",
    endereco: { 
        rua: ruaPessoaUm = "Não informado", 
        numero: numeroPessoaUm = "Não informado", 
        bairro: bairroPessoaUm = "Centro"
    }
} = pessoaUm;

console.log("Nome: ", nomePessoaUm);
console.log("Sobrenome: ", sobrenomePessoaUm);
console.log("Idade: ", idadePessoaUm);
console.log("Rua: ", ruaPessoaUm);
console.log("Número: ", numeroPessoaUm);
console.log("Bairro: ", bairroPessoaUm);  


console.log("\nExemplo 2\n");
const pessoaDois = {
    idade: null,
    endereco: {
        rua: 'Avenida Brasil',
        numero: 3201252115
    }
};
pessoaDois.nome = "Luiz";
pessoaDois.endereco.rua = "Avenida Central";
if (pessoaDois.idade === null){ 
    pessoaDois.idade = "Não informado";
}

const { 
    nome = "Não informado",
    sobrenome = "Não informado",
    idade = "Não informado",
    endereco: { 
        rua = "Não informado", 
        numero = "Não informado", 
        bairro="Não informado"
    }, 
    endereco 
} = pessoaDois;

console.log("Nome: ", nome);
console.log("Sobrenome: ", sobrenome);
console.log("Idade: ", idade);
console.log("Rua: ", rua);
console.log("Número: ", numero);
console.log("Bairro: ", bairro); 


console.log("\nExemplo 3\n");
const {nome: nomePessoaDois, sobrenome: sobrenomePessoaDois, ...outrasInformacoes} = pessoaDois;
console.log("Nome: ", nomePessoaDois);
console.log("Sobrenome: ", sobrenomePessoaDois);
console.log("Outras informações: ", outrasInformacoes);