
# Foreach

Essa aula abordou sobre  **ForEach**, que é útil para operações mais complexas em arrays, enquanto o `For...of` é ideal para iterações simples.

Acesse o códigos [aqui](codigos/aula_08.js)

## Pontos Principais

- **For...of**: Utilizado para iterar sobre elementos de um array.

```javascript
const arr = [1, 2, 3, 4, 5];
for (let valor of arr) {
    console.log(valor);
}
```

- **ForEach**: Método de array que executa uma função para cada elemento.

```javascript
const arr = [10, 20, 30, 40, 50];
arr.forEach((valor, índice) => {
    console.log(`Valor: ${valor}, Índice: ${índice}`);
});
```

- Diferença entre For...of e ForEach:
  - `For...of` é mais simples e direto para iterar sobre valores.
  - `ForEach` permite acessar o índice e o array completo dentro da função de callback.

```javascript
const arr = [10, 20, 30];
let total = 0;
arr.forEach(valor => {
    total += valor;
});
console.log(total); // 60
```

- **Recomendações**:
  - Use `For...of` para simplicidade.
  - Use `ForEach` quando precisar de mais controle sobre o índice e o array.
