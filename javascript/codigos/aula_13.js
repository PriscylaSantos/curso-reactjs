function conectaDB(banco, tempo) {
    return new Promise((resolve, reject) => {
        console.log('Conectando ao banco de dados', banco);
        if(['PostgreSQL', 'MySQL', 'Oracle', 'SQL-Server'].includes(banco)) {
            setTimeout(() => {
                resolve(`Conexão com o ${banco} estabelecida`);
            }, tempo);
        }
        else {
            reject(`Erro: banco de dados ${banco} não encontrado`);
        }
    });
}

function obterDados(tabela, tempo) {
    return new Promise((resolve, reject) => {
        console.log('Obtendo dados da tabela', tabela);
        if(['usuario', 'contas', 'receita'].includes(tabela)) {
            reject(`Erro: Acesso negado a tabela ${tabela}`);
        }
        else {
            setTimeout(() => {
                resolve(`Dados da tabela ${tabela} obtidos com sucesso`);
            }, tempo);
         
        }
    });
}

async function main() {
    try {
        console.log('Início da execução do main()');

        const conexao = await conectaDB('PostgreSQL', 1000);
        console.log("Resposta conectaDB do main(): ", conexao);

        const dados = await obterDados('usuario', 2000);
        console.log("Resposta obterDados do main(): ", dados);

    } catch (erro) {
        console.error(erro);
    } finally {
        console.log('Fim da execução do main()');
    }
}

async function semAwait() {
    try {
        console.log('Início da execução do semAwait()');

        const conexao =  conectaDB('MySQL', 1000);
        console.log("Resposta conectaDB do semAwait(): ", conexao);

        const dados = obterDados('rede', 200);
        console.log("Resposta obterDados do semAwait(): ", dados);

        setTimeout(() => {
            console.log("Verifica se conectaDB do semAwait() já finalizou: ", conexao);
          }, 1500);

    } catch (erro) {
        console.error(erro);
    } finally {
        console.log('Fim da execução do semAwait()');
    }
}


main();
semAwait();