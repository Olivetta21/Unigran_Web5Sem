import { deletarProduto } from "../../Fetchers/produto";
import { useState, useEffect } from "react";
import { atualizarProduto, lerProdutos } from "../../Fetchers/produto";

export default function DeletarProduto() {

    const [idProduto, setIdProduto] = useState(null);
    const [nome, setNome] = useState("");
    const [valor, setValor] = useState("");
    const [imagem, setImagem] = useState("");

    const [produtos, setProdutos] = useState([]);


    useEffect(() => {
        async function fetchProdutos() {
            try {
                const produtosLidos = await lerProdutos();
                setProdutos(produtosLidos);
            } catch (error) {
                console.error("Erro ao ler produtos:", error);
            }
        }
        fetchProdutos();
    }, []);

    useEffect(() => {
        if (idProduto) {
            const produtoEncontrado = produtos.find(p => p.id === idProduto);
            if (produtoEncontrado) {
                setNome(produtoEncontrado.nome);
                setValor(produtoEncontrado.valor.toFixed(2)); // Formata o valor para duas casas decimais
                setImagem(produtoEncontrado.imagem);
            } else {
                console.error("Produto não encontrado:", idProduto);
            }
        }
    }, [idProduto]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        await deletarProduto(parseInt(idProduto));
    };

    return (
    <div>
        <div>
            <label htmlFor="produto-select">Selecione um produto para deletar:</label>
            <select
                id="produto-select"
                value={idProduto || ""}
                onChange={(e) => setIdProduto(Number(e.target.value))}
                style={{ width: "100%", padding: 10, marginBottom: 20 }}
            >
                <option value="">-- Selecione um produto --</option>
                {produtos.map((p) => (
                    <option key={p.id} value={p.id}>
                        {p.nome} - R$ {p.valor.toFixed(2)}
                    </option>
                ))}
            </select>
        </div>
        {idProduto && (
            <div
                style={{
                maxWidth: 400,
                margin: "auto",
                padding: 20,
                fontFamily: "sans-serif",
                }}
            >
                <h2>Deletar Produto</h2>
                <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 10 }}>
                    <label>Nome:</label>
                    <br />
                    <p>{nome}</p>
                </div>
                <div style={{ marginBottom: 10 }}>
                    <label>Valor (R$):</label>
                    <br />
                    <p>{valor}</p>
                </div>
                <div style={{ marginBottom: 10 }}>
                    <label>Imagem (URL):</label>
                    <br />
                    <p>{imagem}</p>
                </div>
                <button
                    type="submit"
                    style={{ width: "100%", padding: 10 }}
                >
                    Deletar
                </button>
                </form>

                {imagem && (
                <div style={{ marginTop: 20 }}>
                    <p>Prévia da imagem:</p>
                    <img
                    src={imagem}
                    alt="Prévia"
                    style={{ width: "100%" }}
                    />
                </div>
                )}
            </div>
        )}
    </div>
    );
}