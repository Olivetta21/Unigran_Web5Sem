import { useLocation } from "react-router";
import { atualizarProduto, criarProduto } from "../../Fetchers/produto";
import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import { useToast } from "../../Context/ToastNotifContext";

export default function CadastrarProduto() {
    const { produtos, setProdutos } = useContext(DataContext);
    const {addToast} = useToast();
    const { state: produto } = useLocation();

    const [idProduto, setIdProduto] = useState(produto ? produto.id : "auto-gerado");
    const [nome, setNome] = useState(produto ? produto.nome : "");
    const [valor, setValor] = useState(produto ? produto.valor.toFixed(2) : "");
    const [imagem, setImagem] = useState(produto ? produto.imagem : "");


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (produto) {
            addToast("Atualizando produto...", "info");
            const response = await atualizarProduto(parseInt(idProduto), nome, parseFloat(valor), imagem);
            if (!response) {
                addToast("Erro ao atualizar produto", "error");
                return;
            }
            const updatedProdutos = produtos.map((p) =>
                p.id === produto.id ? { ...p, nome, valor: parseFloat(valor), imagem } : p
            );
            setProdutos(updatedProdutos);
        } else {
            addToast("Criando produto...", "info");
            const response = await criarProduto(nome, parseFloat(valor), imagem);
            if (!response) {
                addToast("Erro ao criar produto", "error");
                return;
            }
            setProdutos([...produtos, response]);
        }
        addToast("ok", "success");
    };

    return (
        <div>
            <h2>{produto ? "Atualizar" : "Cadastrar"} Produto</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="valor">Valor:</label>
                    <input
                        type="number"
                        id="valor"
                        value={valor}
                        onChange={(e) => setValor(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="imagem">Imagem URL:</label>
                    <input
                        type="text"
                        id="imagem"
                        value={imagem}
                        onChange={(e) => setImagem(e.target.value)}
                    />
                </div>
                <button type="submit">{produto ? "Salvar" : "Criar"}</button>
            </form>
        </div>
    );
}