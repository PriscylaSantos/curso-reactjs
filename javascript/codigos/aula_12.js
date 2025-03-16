function conectaDB(nomeBanco, tempo) {
    return new Promise((resolve, reject) => {
        console.log('Conectando ao banco de dados', nomeBanco);
        if(['PostgreSQL', 'MySQL', 'Oracle', 'SQL-Server'].includes(nomeBanco)) {
            setTimeout(() => {
                resolve(`Conexão com o ${nomeBanco} estabelecida`);
            }, tempo);
        }
        else {
            reject(`Erro: banco de dados ${nomeBanco} não encontrado`);
        }
    });
}

const conexao = [ 
    conectaDB('PostgreSQL', 1000),
    conectaDB('MySQL', 100),
    conectaDB('Oracle', 10),
    conectaDB('SQL-Server', 300),
];

Promise.all(conexao)
    .then((respostas) => {
        console.log(respostas);
    })
    .catch((erro) => {
        console.error(erro);
    });

Promise.race(conexao)
    .then((respostas) => {
        console.log(respostas);
    })
    .catch((erro) => {
        console.error(erro);
    });


function conectarBaseDeDados(banco) {
    const bancoPadrao = "PostgreSQL";
    console.log('Verificando permissão de acesso para', banco);
    if (banco === undefined) {
        return Promise.reject('Erro: banco de dados não informado');
    } else if (['Amazon Aurora', 'Firebird', 'IBM Db2', 'Google BigQuery'].includes(banco)){
        return Promise.reject(`Conexão com o banco de dados ${banco} não suportada.`);
    } else if (banco === bancoPadrao){
        return Promise.resolve('Conexão com o PostgreSQL já estabelecida.');
    } else {
        return conectaDB(banco, 1000);
    }

};

conectarBaseDeDados('MySQL').then((resposta) => {    
    console.log(resposta);
})
.catch((erro) => {
    console.error(erro);
});

conectarBaseDeDados('PostgreSQL').then((resposta) => {    
    console.log(resposta);
})
.catch((erro) => {
    console.error(erro);
});

conectarBaseDeDados('Firebird').then((resposta) => {    
    console.log(resposta);
})
.catch((erro) => {
    console.error(erro);
});