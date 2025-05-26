import axios from 'axios';
const API = "http://localhost:3000/produtos";

export async function criarProduto(nome, valor, imagem) {
    try {
        const response = await axios.post(API+"/criar",
            {nome, valor, imagem},
            {headers: { "Content-Type": "application/json" }}
        );

        return response.data;
    } catch (error) {
        console.error("Erro ao criar produto:", error);
        throw error;
    }
}

export async function lerProdutos() {
    const api = API + "/ler";

    console.log("Lendo produtos do servidor...", api);
    try {
        const response = await axios.get(api, {
            headers: { "Content-Type": "application/json" }
        });

        console.log("Produtos lidos:", response.data);
        return response.data;
    } catch (error) {
        console.error("Erro ao ler produtos:", error);
        throw error;
    }
}
