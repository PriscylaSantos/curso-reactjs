# Fetch API e Axios

Essa aula abordou sobre como realizar requisições AJAX utilizando três métodos diferentes: `fetch` e `axios`.

Acesse o códigos: [aula_15.js](codigos/aula_15.js) e [index.html](codigos/index.html)

- XMLHttpRequest: Método mais antigo e verboso.

```javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', 'pessoas.json', true);
xhr.onload = function() {
    if (xhr.status === 200) {
        const dados = JSON.parse(xhr.responseText);
        console.log(dados);
    }
};
xhr.send();
```

- Fetch API: Mais moderno e simples, retorna Promises.

```javascript
fetch('pessoas.json')
    .then(response => response.json())
    .then(dados => {
        console.log(dados);
    })
    .catch(error => console.error('Erro:', error));
```

- Axios: Biblioteca externa, mais poderosa e fácil de usar.

```javascript
axios.get('pessoas.json')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => console.error('Erro:', error));
```
