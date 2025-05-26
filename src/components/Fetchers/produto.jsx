import axios from 'axios';
const API = "http://localhost:3000/produtos";

export async function criarProduto(nome, valor, imagem) {
    console.log("Criando produto no servidor...", {nome, valor, imagem});

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


export async function atualizarProduto(id, nome, valor, imagem) {
    console.log("Atualizando produto no servidor...", {id, nome, valor, imagem});

    try {
        const response = await axios.put(API+"/atualizar",
            {id, nome, valor, imagem},
            {headers: { "Content-Type": "application/json" }}
        );

        return response.data;
    } catch (error) {
        console.error("Erro ao atualizar produto:", error);
        throw error;
    }
}

export async function deletarProduto(id) {
    console.log("Deletando produto no servidor...", {id});

    try {
        const response = await axios.delete(API+"/deletar", {
            data: { id },
            headers: { "Content-Type": "application/json" }
        });

        return response.data;
    } catch (error) {
        console.error("Erro ao deletar produto:", error);
        throw error;
    }
}