console.log("\nExemplo 1\n");
function dividir(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject("Erro: Divisão por zero!");
        } else {
            resolve(a / b);
        }
    });
}

dividir(10, 2)
    .then((resultado) => {
        console.log("Resultado:", resultado)
    })
    .catch((erro) => {
        console.error(erro)
    });

dividir(10, 0)
    .then(
        resultado => console.log("Resultado:", resultado)
    )
    .catch(
        erro => console.error(erro)
    );


function espera(mensagem, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof mensagem !== 'string') reject('Erro: mensagem não é uma string');
        if (typeof tempo !== 'number') reject('Erro: tempo não é um número');
        setTimeout(() => {
            resolve(mensagem);
        }, tempo);
    });
}

espera('Conexão com o PostgreSQL', 1000)
    .then((resposta) => {
        console.log(resposta);
        return espera('PostgreSQL: Buscando dados da base de homologação', 2000);
    })
    .then((resposta) => {
        console.log(resposta);
        return espera('PostgreSQL: Tratando os dados da tabela "carros"', 3000);
    })
    .then((resposta) => {
        console.log(resposta);
    })
    .then(() => {
        console.log('PostgreSQL: Fechando conexão com o banco de dados.');
    })
    .catch((erro) => {
        console.error("PostgreSQL ", erro);
    });


espera('Conexão com o MySQL', 100)
    .then((resposta) => {
        console.log(resposta);
        return espera('MySQL: Buscando dados da base de desenvolvimento', 200);
    })
    .then((resposta) => {
        console.log(resposta);
        return espera('MySQL: Tratando os dados da tabela "telas"', "3000");
    })
    .then((resposta) => {
        console.log(resposta);
    })
    .then(() => {
        console.log('MySQL: Fechando conexão com o banco de dados.');
    })
    .catch((erro) => {
        console.error('MySQL ', erro);
    });

espera('Conexão com o Oracle', 10)
    .then((resposta) => {
        console.log(resposta);
        return espera('Oracle: Buscando dados da base de produção', 2000);
    })
    .then((resposta) => {
        console.log(resposta);
        return espera('Oracle: Tratando os dados da tabela "perdas"', 3000);
    })
    .then((resposta) => {
        console.log(resposta);
    })
    .then(() => {
        console.log('Oracle: Fechando conexão com o banco de dados.');
    })
    .catch((erro) => {
        console.error("Oracle ", erro);
    });


espera('Conexão com o SQL-Server', 300)
    .then((resposta) => {
        console.log(resposta);
        return espera('SQL-Server: Buscando dados da base local', 10);
    })
    .then((resposta) => {
        console.log(resposta);
        return espera(['SQL-Server: Tratando os dados da tabela "lojas"'], 5);
    })
    .then((resposta) => {
        console.log(resposta);
    })
    .then(() => {
        console.log('SQL-Server: Fechando conexão com o banco de dados.');
    })
    .catch((erro) => {
        console.error('SQL-Server ', erro);
    });

console.log("Inciando as promessas...");