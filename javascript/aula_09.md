# Classes

Essa aula abordou sobre a criação e utilização de **classes** em JavaScript.

Acesse o códigos [aqui](codigos/aula_09.js)

## Pontos Principais

- Para criar uma classe, utilizamos a palavra-chave `class` seguida do nome da classe. Por exemplo:

```javascript
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
```

- Para instanciar uma classe, utilizamos a palavra-chave `new`:

```javascript
const pessoa1 = new Pessoa('Luiz', 'Miranda');
```

- Podemos adicionar métodos diretamente na classe:

```javascript
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
```

- A criação de classes é semelhante às funções construtoras, mas com uma sintaxe mais simples e organizada. Exemplo de função construtora equivalente:

```javascript
function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando`);
};
```

- Vantagens das Classes
  - Sintaxe mais clara e organizada.
  - Métodos são automaticamente adicionados ao protótipo da classe.
  - Facilita a criação de heranças e métodos estáticos.

```javascript
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

const pessoa1 = new Pessoa('Luiz', 'Miranda');
pessoa1.falar(); // Luiz está falando
pessoa1.comer(); // Luiz está comendo
pessoa1.beber(); // Luiz está bebendo
```
