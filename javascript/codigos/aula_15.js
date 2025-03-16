async function buscarPostFetch(id_post) {
    console.log(`Buscando post ${id_post}...`);
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id_post}`); // Faz a requisição

        if (!response.ok) {  // Verifica se a resposta não está OK (status diferente de 200-299)
            throw new Error(`Post ${id_post}:\nStatus: ${response.status}\nMensagem:${response.statusText}\n`);
        }

        const data = await response.json(); // Converte a resposta para JSON
        console.log(`Post ${id_post}:`, data); // Exibe os dados no console
        exibirNoHtml(data);

    } catch (error) {
        console.error(error); // Captura e exibe erros
    } finally { // Executa sempre, com ou sem erro
        console.log(`Busca do post ${id_post} finalizada.`);
    }
}
async function buscarPostAxios(id_post = 1) {
    console.log(`Buscando post ${id_post}...`);
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id_post}`); // Faz a requisição

        if (response.status < 200 || response.status >= 300) {  // Verifica se a resposta não está OK (status diferente de 200-299)
            throw new Error(`Post ${id_post}:\nStatus: ${response.status}\nMensagem:${response.statusText}\n`);
        }

        const data = response.data; // Obtém os dados da resposta
        console.log(`Post ${id_post}:`, data); // Exibe os dados no console
        exibirNoHtml(data);

    } catch (error) {
        console.error(error); // Captura e exibe erros
    } finally { // Executa sempre, com ou sem erro
        console.log(`Busca do post ${id_post} finalizada.`);
    }
}
function exibirNoHtml(dados) {
    const container = document.getElementById("post-container");
    container.innerHTML = `
        <h2>${dados.title}</h2>
        <p>${dados.body}</p>
        <small><strong>ID do Post:</strong> ${dados.id}</small>
    `;
}