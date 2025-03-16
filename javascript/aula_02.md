# Objetos - Atribuição via desestruturação (destructuring assignment)

 Essa aula abordou a **atribuição via desestruturação** focando em objetos, como extrair valores usando a notação de ponto e como atribuir esses valores a variáveis.

 Acesse o códigos [aqui](codigos/aula_02.js)

## Pontos Principais

- Criação e manipulação de objetos.

```javascript
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    endereco: {
        rua: 'Avenida Brasil',
        numero: 320
    }
};
console.log(pessoa);
```

- Extração de valores usando notação de ponto.

```javascript
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    endereco: {
        rua: 'Avenida Brasil',
        numero: 320
    }
};
console.log(pessoa.nome);
const sobrenome = pessoa.sobrenome
console.log(sobrenome);
const rua = pessoa.endereco.rua
console.log(rua);
```

- Atribuição via desestruturação.

```javascript
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    endereco: {
        rua: 'Avenida Brasil',
        numero: 320
    }
};
const { nome } = pessoa
console.log(nome);
```

- Definição de valores padrão.

```javascript
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    endereco: {
        rua: 'Avenida Brasil',
        numero: 320
    }
};
const { nome , sobrenome, idade = 'Não informado'} = pessoa
console.log(nome, sobrenome, idade);
```

- Extração de propriedades aninhadas.

```javascript
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    endereco: {
        rua: 'Avenida Brasil',
        numero: 320
    }
};
const { endereco: { rua = "Não informado", numero = "Não informado", bairro="Não informado"}, endereco } = pessoa
console.log(rua);
console.log(numero);
console.log(bairro);
console.log(endereco);
```

- Uso do operador rest (`...`).

```javascript
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    endereco: {
        rua: 'Avenida Brasil',
        numero: 320
    }
};

const {nome, sobrenome, ...outrasInformacoes} = pessoa;
console.log(nome, sobrenome);
console.log(outrasInformacoes);
```
