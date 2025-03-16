fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        if (!response.ok) {  // Verifica se a resposta não está OK (status diferente de 200-299)
            throw new Error(`Erro na requisição!\nStatus: ${response.status}\nMensagem:${response.statusText}\n`);
        }
        return response.json(); // Converte a resposta para JSON se estiver OK
    })
    .then(data => console.log("Dados recebidos:", data)) // Exibe os dados no console
    .catch(error => console.error("Erro na requisição:", error)); // Captura erros


async function buscarPost(id_post) {
    console.log(`Buscando post ${id_post}...`);
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id_post}`); // Faz a requisição

        if (!response.ok) {  // Verifica se a resposta não está OK (status diferente de 200-299)
            throw new Error(`Post ${id_post}:\nStatus: ${response.status}\nMensagem:${response.statusText}\n`);
        }

        const data = await response.json(); // Converte a resposta para JSON
        console.log(`Post ${id_post}:`, data); // Exibe os dados no console

    } catch (error) {
        console.error(error); // Captura e exibe erros
    } finally { // Executa sempre, com ou sem erro
        console.log(`Busca do post ${id_post} finalizada.`);
    }
}


async function buscarAlbum(id_album = 1) {
    console.log(`Buscando album ${id_album}...`);
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${id_album}`); // Faz a requisição

        if (!response.ok) {  // Verifica se a resposta não está OK (status diferente de 200-299)
            throw new Error(`Album ${id_album}:\nStatus: ${response.status}\nMensagem:${response.statusText}\n`);
        }

        const data = await response.json(); // Converte a resposta para JSON
        console.log(`Album ${id_album}:`, data); // Exibe os dados no console

    } catch (error) {
        console.error(error); // Captura e exibe erros
    } finally { // Executa sempre, com ou sem erro
        console.log(`Busca do album ${id_album} finalizada.`);
    }
}


buscarPost();
buscarPost(0);
buscarPost(6);

buscarAlbum(0);
buscarAlbum();
buscarAlbum(6);