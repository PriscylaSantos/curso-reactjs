
# Funções

Essa aula abordou os conceitos básicos e avançados de **funções**.

Acesse o códigos [aqui](codigos/aula_03.js)

## Pontos Principais

- Declaração de função

```javascript
function nomeDaFuncao() {
        //codigo
}
```

- Funções declaradas com `function` são elevadas ao topo do código, permitindo chamá-las antes da declaração.

```javascript
fala();
function fala() {
        console.log("Sou a função 'fala'");
}
```

- Funções podem ser atribuídas a variáveis, passadas como parâmetros e retornadas por outras funções.

```javascript
souUmDado();
const souUmDado = function() {
        console.log("Sou um dado");
};
```

- Funções como parâmetros

```javascript
function executaFuncao(funcao) {
        funcao();
}
executaFuncao(souUmDado);
```

- Arrow functions: Sintaxe mais curta introduzida no ES6.

```javascript
const funcaoArrow = () => {
        console.log("Sou uma arrow function");
};
funcaoArrow();
```

- Funções podem ser métodos de objetos.

```javascript
const objeto = {
    falar: function() {
        console.log("Estou falando");
    },
    cantar: function() {
        console.log("Estou cantando");
    }
};
objeto.falar();
executaFuncao(objeto.cantar);

```
