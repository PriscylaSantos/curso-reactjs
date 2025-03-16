
# Async e Await

Essa aula abordou sobre **promises com async e await** que são usados para lidar com operações assíncronas de maneira mais simples e legível, tornando o código que envolve promessas (Promise) mais fácil de entender e escrever.

Acesse o códigos [aqui](codigos/aula_13.js)

## Pontos Principais

- **Async** é usada para declarar uma função assíncrona. Uma função assíncrona sempre retorna uma Promise.

- **Await** só pode ser usada dentro de uma função marcada como `async`. Ela faz o JavaScript esperar pela resolução de uma Promise antes de continuar a execução do código. Assim a execução da função será pausada até que a Promise seja resolvida ou rejeitada. O await torna o código assíncrono mais síncrono, ou seja, ele permite que você escreva código assíncrono de forma que pareça que está executando de maneira sequencial, como se fosse código síncrono.

```javascript
async function executaFases() {
    try {
        const fase1 = await fase1();
        console.log(fase1);

        const fase2 = await fase2();
        console.log(fase2);

        const fase3 = await fase3();
        console.log(fase3);
    } catch (erro) {
        console.error(erro);
    }
}

executaFases();
```

- Tratamento de Erros
  - Usar `.catch()` com Promises.
  - Usar `try...catch` com Async/Await.

```javascript
async function executaFases() {
    try {
    const fase1 = await fase1();
    console.log(fase1);
    } catch (erro) {
    console.error(erro);
    }
}
```

- Estados das Promises:
  - **Pending**: Estado inicial, ainda não resolvida ou rejeitada.
  - **Fulfilled**: A Promise foi resolvida com sucesso.
  - **Rejected**: A Promise foi rejeitada.

```javascript
const promise = new Promise((resolve) => setTimeout(resolve, 1000));
console.log(promise); // Promise { <pending> }

setTimeout(() => {
  console.log(promise); // Promise { <resolved> }
}, 1500);
```
