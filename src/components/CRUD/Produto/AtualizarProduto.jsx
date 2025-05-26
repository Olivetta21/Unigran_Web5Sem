import { useState, useEffect } from "react";
import { atualizarProduto, lerProdutos } from "../../Fetchers/produto";

export default function AtualizarProduto() {
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
        await atualizarProduto(parseInt(idProduto), nome, parseFloat(valor), imagem);
    };

    return (
    <div>
        <div>
            <label htmlFor="produto-select">Selecione um produto para atualizar:</label>
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
                <h2>Atualizar Produto</h2>
                <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 10 }}>
                    <label>Nome:</label>
                    <br />
                    <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                    style={{ width: "100%" }}
                    />
                </div>
                <div style={{ marginBottom: 10 }}>
                    <label>Valor (R$):</label>
                    <br />
                    <input
                    type="number"
                    step="0.01"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                    required
                    style={{ width: "100%" }}
                    />
                </div>
                <div style={{ marginBottom: 10 }}>
                    <label>Imagem (URL):</label>
                    <br />
                    <input
                    type="text"
                    value={imagem}
                    onChange={(e) => setImagem(e.target.value)}
                    style={{ width: "100%" }}
                    />
                </div>
                <button
                    type="submit"
                    style={{ width: "100%", padding: 10 }}
                >
                    Salvar
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