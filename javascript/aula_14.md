# Fetch API

Essa aula abordou sobre como utilizar a **Fetch API** para realizar requisições HTTP de forma mais simples e moderna.

Acesse o códigos [aqui](codigos/aula_14.js)

## Pontos Principais

- Exemplo de uso do Fetch API

```javascript
fetch('pagina1.html')
    .then(response => {
        if (response.status !== 200) {
            throw new Error('Erro 404: Página não encontrada');
        }
        return response.text();
    })
    .then(html => {
        console.log(html);
    })
    .catch(error => {
        console.error('Erro:', error);
    });
```

- Conversão de Respostas: A Fetch API retorna uma promessa que pode ser convertida para diferentes formatos como texto, JSON, etc.
- Tratamento de Erros: Utilização de `.catch` para capturar e tratar erros durante a requisição.

- Uso de Async/Await:

```javascript
async function fetchData() {
    try {
        const response = await fetch('pagina1.html');
        if (response.status !== 200) {
            throw new Error('Erro 404: Página não encontrada');
        }
        const html = await response.text();
        console.log(html);
    } catch (error) {
        console.error('Erro:', error);
    }
}
fetchData();
```
