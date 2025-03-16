# Métodos Estáticos

Essa aula abordou sobre **métodos estáticos e de instância** em JavaScript.

Acesse o códigos [aqui](codigos/aula_10.js)

## Pontos Principais

- **Métodos Estáticos**: São métodos que pertencem à classe e não às instâncias da classe. Eles podem ser chamados diretamente na classe sem a necessidade de criar uma instância.

- Definição de métodos estáticos

```javascript
class ControleRemoto {
    static trocaPilha() {
        console.log("Ok, vou trocar.");
    }
}
```

- Chamada de métodos estáticos

```javascript
ControleRemoto.trocaPilha(); // Ok, vou trocar.
```

- **Métodos de Instância**: São métodos que pertencem às instâncias da classe e podem acessar os dados da instância.

```javascript
class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumentaVolume() {
        this.volume += 2;
    }
}
const controle1 = new ControleRemoto('LG');
controle1.aumentaVolume();
console.log(controle1.volume); // 2
```

- Diferença entre métodos estáticos e de instância
  - Métodos estáticos não têm acesso aos dados da instância.
  - Métodos de instância podem acessar e modificar os dados da instância.

```javascript
class ControleRemoto {
    static somaValores(x, y) {
        return x + y;
    }
}

console.log(ControleRemoto.somaValores(2, 4)); // 6
```

- O `this` se refere à classe e não à instância.

- Método estático com `this`

```javascript
class ControleRemoto {
    static mostraClasse() {
        console.log(this);
    }
}

ControleRemoto.mostraClasse(); // [class ControleRemoto]
```

- Método de instância com `this`

```javascript
class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
    }

    mostraTV() {
        console.log(this.tv);
    }
}

const controle1 = new ControleRemoto('Samsung');
controle1.mostraTV(); // Samsung
```
